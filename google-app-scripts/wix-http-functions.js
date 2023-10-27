import { ok, badRequest, serverError, created } from "wix-http-functions";
import wixData from "wix-data";
import { getSecret } from "wix-secrets-backend";
import { mediaManager } from "wix-media-backend";

const isAuth = async (headers) => {
  try {
    const authHeader = headers.auth;
    const authKey = await getSecret("auth-key");

    if (authHeader === authKey) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

const listFiles = async (fileName, googleUrl) => {
  if (!fileName || !googleUrl) return "";

  const filter = {
    parentFolderId: "d220d55ce36e4cab9ea68ac213f7b22e",
  };

  const wixFiles = await mediaManager.listFiles(filter);
  const file = wixFiles.find((f) =>
    f.originalFileName.toLowerCase().includes(fileName.toLowerCase())
  );
  if (!file) return googleUrl;
  return file.fileUrl;
};

export const get_collectionItems = async (request) => {
  let options = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const query = request.path[0];
    const [queryParam, queryValue] = query.split("=");
    if (queryParam !== "collectionName") {
      throw new Error("Invalid query");
    }

    const record = await wixData.query(queryValue).find();

    if (!record.items.length) {
      throw new Error("No record found.");
    }

    const execStatus = "200 (OK) status code";
    options.body = {
      items: record.items,
      codeExecuted: execStatus,
    };
    return ok(options);
  } catch (err) {
    options.body = {
      error: err.message,
    };
    return serverError(options);
  }
};

export const put_updateCreateRec = async (request) => {
  const headers = request.headers;
  if (!(await isAuth(headers))) {
    let options = {
      body: {
        error: "Not authorized",
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
    return badRequest(options);
  }

  let execStatus;
  let statusCode;
  let options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const body = await request.body.text();
    const { collectionName, primaryKey, fieldData } = JSON.parse(body);

    const collectionResults = await wixData
      .query(collectionName)
      .eq(primaryKey, fieldData[primaryKey])
      .find();
    const fieldNames = Object.keys(fieldData);
    const imgNames = fieldNames.filter((name) => {
      return (
        name.toLowerCase().includes("image") ||
        name.toLowerCase().includes("img")
      );
    });

    const wixFiles = await Promise.all(
      imgNames.map((name) => {
        const { fileName, googleUrl } = fieldData[name];

        return listFiles(fileName, googleUrl);
      })
    );
    imgNames.forEach((name, i) => {
      fieldData[name] = wixFiles[i];
    });

    fieldNames.forEach((name) => {
      const data = fieldData[name];

      if (typeof data === "string" && data.startsWith("date=")) {
        fieldData[name] = new Date(data.split("=")[1]);
      }
    });

    if (collectionResults.items.length > 0) {
      const item = collectionResults.items[0];

      fieldNames.forEach((name) => {
        item[name] = fieldData[name];
      });

      execStatus = "Record Updated, 200 (OK) status code";
      statusCode = 200;
      options.body = {
        items: collectionResults.items,
        codeExecuted: execStatus,
      };

      await wixData.update(collectionName, item);
    } else {
      execStatus = "Record Inserted, 201 (Created) status code";
      statusCode = 201;

      const insertResult = await wixData.insert(collectionName, fieldData);

      options.body = {
        items: insertResult.items,
        codeExecuted: execStatus,
      };
    }

    if (statusCode === 201) return created(options); //for insert

    if (statusCode === 200) return ok(options); //for update
  } catch (err) {
    options.body = {
      error: err.message,
    };
    return serverError(options);
  }
};

export const delete_deleteRec = async (request) => {
  const headers = request.headers;
  if (!(await isAuth(headers))) {
    let options = {
      body: {
        error: "Not authorized",
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
    return badRequest(options);
  }

  let options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const query = decodeURI(request.path[0]);
    const [collectionQuery, primaryKeyQuery] = query.split("&");
    const collectionName = collectionQuery.split("=")[1];
    const [primaryKey, primaryValue] = primaryKeyQuery.split("=");

    const record = await wixData
      .query(collectionName)
      .eq(primaryKey, primaryValue)
      ?.find();

    if (!record.items.length) {
      throw new Error("No record found.");
    }

    const id = record.items[0]._id;

    const results = await wixData.remove(collectionName, id);
    const execStatus = "Record Deleted, 200 (OK) status code";
    options.body = {
      deleted: results,
      codeExecuted: execStatus,
    };
    return ok(options);
  } catch (err) {
    options.body = {
      error: err.message,
    };
    return serverError(options);
  }
};
