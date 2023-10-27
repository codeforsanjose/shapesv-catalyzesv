const WIX_URL = "https://SOMETHING.wixsite.com"; //CHANGE

// Folder is in same folder as the this Spreadsheet
const IMAGE_FOLDER = "Images For Wix Dataset"; //CHANGE
const AUTH_KEY = "SECRET"; //UPDATE WITH SECRET FROM WIX

// Set true to send to live collection, false for sandbox
const IS_PRODUCTION = true; //CHANGE (goes to live, false goes to Sandbox in Wix Dataset)

const getRowValues = (sheet, row) => {
  return sheet.getRange(row, 3, 1, sheet.getLastColumn()).getValues()[0];
};

const getFieldNames = (sheet) => {
  return sheet.getRange(1, 3, 1, sheet.getLastColumn()).getValues()[0];
};

const getImageUrlFromDrive = (imageName) => {
  const folders = DriveApp.getFoldersByName(IMAGE_FOLDER);

  let imageFolder;
  while (folders.hasNext()) {
    imageFolder = folders.next();
  }

  const imageFiles = imageFolder.searchFiles(`title contains "${imageName}"`);

  while (imageFiles.hasNext()) {
    const file = imageFiles.next();
    const fildId = file.getId();
    return `https://drive.google.com/uc?export=view&id=${fildId}`;
  }
};

const updateWix = async (data) => {
  try {
    const options = {
      method: "put",
      contentType: "application/json",
      headers: {
        auth: AUTH_KEY,
      },
      // Convert the JavaScript object to a JSON string.
      payload: JSON.stringify(data),
    };

    const response = await UrlFetchApp.fetch(
      `${WIX_URL}/_functions${IS_PRODUCTION ? "" : "-dev"}/updateCreateRec`,
      options
    );
    Logger.log(response);
    return response;
  } catch (err) {
    throw err;
  }
};

const deleteWix = async (collectionName, primaryKey, primaryValue) => {
  try {
    const options = {
      method: "delete",
      headers: {
        auth: AUTH_KEY,
      },
    };

    const response = await UrlFetchApp.fetch(
      `${WIX_URL}/_functions${
        IS_PRODUCTION ? "" : "-dev"
      }/deleteRec/collectionName=${collectionName}&${primaryKey}=${primaryValue}`,
      options
    );
    Logger.log(response);
    return response;
  } catch (err) {
    throw err;
  }
};

const setAlertMessage = (message) => {
  const result = SpreadsheetApp.getUi().alert(
    message,
    SpreadsheetApp.getUi().ButtonSet.OK_CANCEL
  );
  if (result === SpreadsheetApp.getUi().Button.OK) {
    return true;
  } else {
    return false;
  }
};

const saveData = async (data) => {
  const active = SpreadsheetApp.getActive();

  try {
    if (!data) {
      throw new Error("No data to save.");
    }

    await updateWix(data);
    active.toast("Updated Successfully!");
  } catch (err) {
    active.toast(err.message);
    throw err;
  }
};

const deleteData = async (collectionName, primaryKey, primaryValue) => {
  const active = SpreadsheetApp.getActive();

  try {
    await deleteWix(collectionName, primaryKey, primaryValue);
    active.toast("Deleted Successfully!");
  } catch (err) {
    if (err.message.includes("No record found")) {
      active.toast("No record found, please save before deleting.");
    } else {
      active.toast(err.message);
    }
    throw err;
  }
};

function specialOnEdit(e) {
  const curRange = e.range;
  const curColumn = curRange.getColumn();
  const curRow = curRange.getRow();
  if (curColumn !== 1 || curRow === 1) return;

  const sheet = SpreadsheetApp.getActiveSheet();
  const sheetName = sheet.getSheetName().replaceAll(" ", "");
  const action = curRange.getValue();

  const fieldNames = getFieldNames(sheet).map((name) => {
    if (!name) return "";
    return (name[0].toLowerCase() + name.slice(1)).trim();
  });
  const values = getRowValues(sheet, curRow);

  if (values.every((val) => !val.trim())) {
    SpreadsheetApp.getUi().alert(
      "Please add data.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    e.range.setValue("");
    return;
  }

  if (action === "Save") {
    const alertRes = setAlertMessage(
      "You are about to save this to the Wix Collection. Would you like to continue?"
    );
    if (!alertRes) {
      e.range.setValue("");
      return;
    }

    const fieldData = {};

    for (let i = 0; i < values.length; i++) {
      if (!fieldNames[i]) continue;

      let val = `${values[i]}`.trim();

      if (!val) {
        fieldData[fieldNames[i]] = "";
        continue;
      }

      if (fieldNames[i].toLowerCase().includes("date")) {
        const date = new Date(val).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
        });
        val = date;
      }

      if (
        fieldNames[i].toLowerCase().includes("image") ||
        fieldNames[i].toLowerCase().includes("img")
      ) {
        val = {
          fileName: val,
          googleUrl: getImageUrlFromDrive(val),
        };
      }

      if (val && val[0] === "[" && val.at(-1) === "]") {
        const words = val.slice(1, -1);
        val = words.split(",").map((word) => word.trim());
      }

      if (fieldNames[i].toLowerCase().includes("check all that apply")) {
        val = val.split(",").map((val) => val.trim());
      }

      fieldData[fieldNames[i]] = val;
    }

    saveData({
      collectionName: sheetName,
      primaryKey: fieldNames[1],
      fieldData,
    }).finally(() => e.range.setValue(""));
  } else if (action === "Delete") {
    const alertRes = setAlertMessage(
      "You are about to delete this record. Would you like to continue?"
    );
    if (!alertRes) {
      e.range.setValue("");
      return;
    }
    deleteData(sheetName, fieldNames[1], values[1])
      .then(() => sheet.deleteRow(curRange.getRow()))
      .finally(() => e.range.setValue(""));
  }
}
