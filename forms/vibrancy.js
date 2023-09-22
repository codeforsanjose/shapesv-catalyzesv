const formTranslations = {
  states: [
    {
      state: 0,
      questions: [
        {
          title: {
            en: "Which of the following community benefits is most important to you in a development?",
            es: "¿Cuál de los siguientes beneficios comunitarios es más importante para ti en un desarrollo?",
            vi: "Trong sự phát triển, lợi ích cộng đồng nào sau đây quan trọng nhất đối với bạn?",
          },
          subheading: {
            en: "Select up to 3 Choices (Required)",
            es: "Selecciona hasta 3 opciones (Requerido)",
            vi: "Chọn tối đa 3 lựa chọn (Yêu cầu)",
          },
          value: {
            en: [
              "Retail Storefronts",
              "Community Spaces (Gardens)",
              "Indoor Banquet Rooms",
              "Public Art",
              "Innovative Streetscape Designs",
              "Childcare and Spaces for Children",
              "Co-Working Space",
              "Walking Paths",
              "Dog Areas",
              "Hotels",
            ],
            es: [
              "Frente de tiendas minoristas",
              "Espacios comunitarios (jardines)",
              "Salones de banquetes cubiertos",
              "Arte público",
              "Diseños innovadores de paisajes urbanos",
              "Cuidado infantil y espacios para niños",
              "Espacio de coworking",
              "Senderos para caminar",
              "Áreas para perros",
              "Hoteles",
            ],
            vi: [
              "Cửa hàng bán lẻ",
              "Khu vườn không gian cộng đồng",
              "Phòng tiệc trong nhà",
              "Nghệ thuật công cộng",
              "Thiết kế phong cách đường phố sáng tạo",
              "Dịch vụ giữ trẻ và không gian cho trẻ em",
              "Không gian làm việc chung",
              "Đường dạo dành cho người đi bộ",
              "Khu vực cho thú cưng",
              "Khách sạn",
            ],
          },
        },
      ],
    },
    {
      state: 1,
      questions: [
        {
          title: {
            en: "What retail do you most want to see more of in your neighborhood?",
            es: "¿Qué tipo de comercio te gustaría ver más en tu vecindario?",
            vi: "Bạn muốn thấy loại cửa hàng gì nhiều hơn trong khu vực của bạn?",
          },
          subheading: {
            en: "Select up to 2 Choices (Required)",
            es: "Selecciona hasta 2 opciones (Requerido)",
            vi: "Chọn tối đa 2 lựa chọn (Yêu cầu)",
          },
          value: {
            en: [
              "Restaurant Cafe Bar",
              "Daily Services (Pharmacy, Dry Cleaner, Hardware Store, Health Clinic)",
              "Clothing",
              "Arts, Crafts, Entertainment",
              "Personal Services (Hair Salon, Nail Spa, etc.)",
            ],
            es: [
              "Restaurante Cafetería Bar",
              "Servicios diarios (Farmacia, Lavandería, Ferretería, Clínica de Salud)",
              "Ropa",
              "Artes, Manualidades, Entretenimiento",
              "Servicios personales (Salón de belleza, Spa de uñas, etc.)",
            ],
            vi: [
              "Nhà hàng Quán cà phê Quán bar",
              "Dịch vụ hàng ngày (Hiệu thuốc, Tiệm làm sạch, Cửa hàng thiết bị, Phòng khám sức khỏe)",
              "Thời trang",
              "Nghệ thuật, Thủ công, Giải trí",
              "Dịch vụ cá nhân (Salon tóc, Spa móng tay, vv.)",
            ],
          },
        },
      ],
    },
    {
      state: 2,
      questions: [
        {
          title: {
            en: "What type of retail would you NOT like to see more of in your neighborhood?",
            es: "¿Qué tipo de comercio NO te gustaría ver más en tu vecindario?",
            vi: "Loại cửa hàng gì bạn KHÔNG muốn thấy nhiều hơn trong khu vực của bạn?",
          },
          subheading: {
            en: "Please enter a response (Required)",
            es: "Por favor, ingresa una respuesta (Requerido)",
            vi: "Vui lòng nhập phản hồi (Yêu cầu)",
          },
          value: null,
        },
      ],
    },
    {
      state: 3,
      questions: [
        {
          title: {
            en: "In your opinion, what makes your neighborhood more vibrant?",
            es: "En tu opinión, ¿qué hace que tu vecindario sea más vibrante?",
            vi: "Theo ý kiến của bạn, điều gì làm cho khu vực của bạn trở nên sôi động hơn?",
          },
          subheading: {
            en: "(Optional)",
            es: "(Opcional)",
            vi: "(Không bắt buộc)",
          },
          value: null,
        },
      ],
    },
    {
      state: 4,
      questions: [
        {
          title: {
            en: "Please mark your ethnicity",
            es: "Por favor, marca tu etnia",
            vi: "Vui lòng đánh dấu dân tộc của bạn",
          },
          subheading: {
            en: "Select one dropdown choice (Required)",
            es: "Selecciona una opción del menú desplegable (Requerido)",
            vi: "Chọn một lựa chọn trong danh sách thả xuống (Yêu cầu)",
          },
          value: {
            en: [
              "American Indian or Alaska Native",
              "Asian",
              "Black or African American",
              "Hispanic or Latino",
              "Native Hawaiian or Other Pacific Islander",
              "White",
              "Other",
              "Choose not to answer",
            ],
            es: [
              "Indígena americano o nativo de Alaska",
              "Asiático",
              "Negro o afroamericano",
              "Hispano o latino",
              "Nativo hawaiano u otro isleño del Pacífico",
              "Blanco",
              "Otro",
              "Prefiero no responder",
            ],
            vi: [
              "Người Da Đỏ Mỹ hoặc Da Đỏ Alaska",
              "Người châu Á",
              "Người da đen hoặc người da Mỹ gốc Phi",
              "Người Mỹ Latinh hoặc người Mỹ gốc Latinh",
              "Người Da Đỏ Hawaii hoặc người đảo Khác ở Thái Bình Dương",
              "Người da trắng",
              "Khác",
              "Không muốn trả lời",
            ],
          },
        },
        {
          title: {
            en: "What is your age?",
            es: "¿Cuál es tu edad?",
            vi: "Bạn bao nhiêu tuổi?",
          },
          subheading: {
            en: "Select one dropdown choice (Required)",
            es: "Selecciona una opción del menú desplegable (Requerido)",
            vi: "Chọn một lựa chọn trong danh sách thả xuống (Yêu cầu)",
          },
          value: {
            en: [
              "18-24",
              "25-34",
              "35-44",
              "45-54",
              "55-64",
              "65-74",
              "75 and over",
              "Choose not to answer",
            ],
            es: [
              "18-24",
              "25-34",
              "35-44",
              "45-54",
              "55-64",
              "65-74",
              "75 o más",
              "Prefiero no responder",
            ],
            vi: [
              "18-24",
              "25-34",
              "35-44",
              "45-54",
              "55-64",
              "65-74",
              "75 trở lên",
              "Không muốn trả lời",
            ],
          },
        },
        {
          title: {
            en: "What is your home Zip code?",
            es: "¿Cuál es el código postal de tu hogar?",
            vi: "Mã bưu điện của ngôi nhà của bạn là gì?",
          },
          subheading: {
            en: "Please enter a valid Zip code (Required)",
            es: "Por favor, ingresa un código postal válido (Requerido)",
            vi: "Vui lòng nhập mã bưu điện hợp lệ (Yêu cầu)",
          },
          value: null,
        },
      ],
    },
    {
      state: 5,
      questions: [
        {
          title: {
            en: "Are you part of a Community Based Organization?",
            es: "¿Eres parte de una Organización Comunitaria?",
            vi: "Bạn có phải là thành viên của Tổ chức Dựa vào Cộng đồng không?",
          },
          subheading: {
            en: "Select one dropdown choice (Required)",
            es: "Selecciona una opción del menú desplegable (Requerido)",
            vi: "Chọn một lựa chọn trong danh sách thả xuống (Yêu cầu)",
          },
          value: {
            en: [
              "AACI",
              "African American Community Service Agency",
              "Amigos de Guadalupe",
              "AnewVista Community Services",
              "Bill Wilson Center",
              "Destination Home",
              "ICAN",
              "Korean American Community Services",
              "LEAD Filipino",
              "LUNA",
              "Next Door Solutions",
              "Organization",
              "PACT",
              "Project Safety Net",
              "Sacred Heart Community Service",
              "Silicon Valley De-Bug",
              "Silicon Valley Independent Living Center",
              "Silicon Valley Youth",
              "SOMOS Mayfair",
              "Vietnamese American Roundtable",
              "VIVO",
              "Youth Liberation Movement (YLM)",
              "Yu-Ai Kai",
              "Other",
              "No",
            ],
            es: [
              "AACI",
              "African American Community Service Agency",
              "Amigos de Guadalupe",
              "AnewVista Community Services",
              "Bill Wilson Center",
              "Destination Home",
              "ICAN",
              "Korean American Community Services",
              "LEAD Filipino",
              "LUNA",
              "Next Door Solutions",
              "Organization",
              "PACT",
              "Project Safety Net",
              "Sacred Heart Community Service",
              "Silicon Valley De-Bug",
              "Silicon Valley Independent Living Center",
              "Silicon Valley Youth",
              "SOMOS Mayfair",
              "Vietnamese American Roundtable",
              "VIVO",
              "Youth Liberation Movement (YLM)",
              "Yu-Ai Kai",
              "Other",
              "No",
            ],
            vi: [
              "AACI",
              "African American Community Service Agency",
              "Amigos de Guadalupe",
              "AnewVista Community Services",
              "Bill Wilson Center",
              "Destination Home",
              "ICAN",
              "Korean American Community Services",
              "LEAD Filipino",
              "LUNA",
              "Next Door Solutions",
              "Organization",
              "PACT",
              "Project Safety Net",
              "Sacred Heart Community Service",
              "Silicon Valley De-Bug",
              "Silicon Valley Independent Living Center",
              "Silicon Valley Youth",
              "SOMOS Mayfair",
              "Vietnamese American Roundtable",
              "VIVO",
              "Youth Liberation Movement (YLM)",
              "Yu-Ai Kai",
              "Other",
              "No",
            ],
          },
        },
        {
          title: {
            en: "What is the income range of your household?",
            es: "¿Cuál es el rango de ingresos de tu hogar?",
            vi: "Khoảng thu nhập của hộ gia đình bạn là bao nhiêu?",
          },
          subheading: {
            en: "Select one dropdown choice (Required)",
            es: "Selecciona una opción del menú desplegable (Requerido)",
            vi: "Chọn một lựa chọn trong danh sách thả xuống (Yêu cầu)",
          },
          value: {
            en: [
              "Under $50,000",
              "$50,000 - $100,000",
              "$100,000 - $200,000",
              "Over $200,000",
              "Choose not to answer",
            ],
            es: [
              "Menos de $50,000",
              "$50,000 - $100,000",
              "$100,000 - $200,000",
              "Más de $200,000",
              "Prefiero no responder",
            ],
            vi: [
              "Dưới $50,000",
              "$50,000 - $100,000",
              "$100,000 - $200,000",
              "Hơn $200,000",
              "Không muốn trả lời",
            ],
          },
        },
      ],
    },
  ],
  loading: {
    en: "Submitting Form...",
    es: "Enviando formulario...",
    vi: "Đang gửi biểu mẫu...",
  },
  success: {
    en: "Successfully submitted! ✅ \n Thank you for your feedback.",
    es: "¡Enviado exitosamente! ✅ \n Gracias por tus comentarios.",
    vi: "Đã gửi thành công! ✅ \n Cảm ơn phản hồi của bạn.",
  },
  error: {
    en: "Uh oh! There was an error submitting your form.",
    es: "¡UH oh! Se produjo un error al enviar su formulario.",
    vi: "Ờ ồ! Đã xảy ra lỗi khi gửi biểu mẫu của bạn.",
  },
  buttons: {
    next: {
      en: "Continue",
      es: "Continuar",
      vi: "Tiếp tục",
    },
    back: {
      en: "Back",
      es: "Previo",
      vi: "Trước",
    },
    submit: {
      en: "Submit",
      es: "Entregar",
      vi: "Nộp",
    },
  },
};

// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// import { addValuesToGoogleSheet } from 'backend/question_googlesheetMay2023';

const googleSheetsTab = "'Vibrancy Form Data (wix)'!A2";

import { addValuesToGoogleSheet } from "backend/google-sheets";

const isNumber = (char) => {
  return (
    "0".charCodeAt(0) <= char.charCodeAt(0) &&
    char.charCodeAt(0) <= "9".charCodeAt(0)
  );
};

$w.onReady(function () {
  const multiStateBox = $w("#surveyStateBox");
  const boxStates = multiStateBox.states;
  const checkboxGroups = $w("CheckboxGroup");
  const textInputs = $w("TextInput");
  const dropdowns = $w("Dropdown");
  const zipInput = $w("#zipInput");
  const textBoxs = $w("TextBox");
  const btnBack = $w("#btnBack");
  const btnNext = $w("#btnNext");
  const btnSubmit = $w("#btnSubmit");
  const btnTranslate = $w("#btnTranslate");
  let lang = "en";
  let currState = 0;
  let formData = Array.from({ length: boxStates.length - 4 }, () => []);

  const handleTranslate = (lang) => {
    boxStates.forEach((state, stateIndex) => {
      const questions = state.children;
      let pointer = 0;
      let isTitle = true;

      if (stateIndex > boxStates.length - 4) return;

      questions.forEach((question) => {
        const dataQuestions = formTranslations.states[stateIndex].questions;

        if (question.type === "$w.Text") {
          const title = dataQuestions[pointer].title[lang];
          if (isTitle) {
            question.text = title;
            isTitle = false;
          } else {
            const subheading = dataQuestions[pointer].subheading;
            if (subheading) {
              question.text = subheading[lang];
              isTitle = true;
            }
          }
        } else {
          isTitle = true;
          if (dataQuestions[pointer].value) {
            const options = dataQuestions[pointer].value[lang].map((val, i) => {
              return {
                label: val,
                value: dataQuestions[pointer].value["en"][i],
              };
            });
            question.options = options;
          }
          pointer++;
        }
      });
    });

    btnBack.label = formTranslations.buttons.back[lang];
    btnNext.label = formTranslations.buttons.next[lang];
    btnSubmit.label = formTranslations.buttons.submit[lang];

    boxStates.slice(-3).forEach((state) => {
      const children = state.children;
      children[children.length - 1].text = formTranslations[state.id][lang];
    });
  };

  const handleStateChange = (state) => {
    multiStateBox.changeState(boxStates[state]);
  };

  const showHideBtns = () => {
    if (currState === 0) {
      btnBack.hide();
      btnBack.disable();
    } else {
      btnBack.show();
      btnBack.enable();
    }

    if (currState !== boxStates.length - 4) {
      btnNext.show();
      btnSubmit.hide();
    } else {
      btnNext.hide();
      btnSubmit.show();
    }

    if (currState > boxStates.length - 4) {
      btnTranslate.hide();
      btnBack.hide();
      btnBack.disable();
      btnNext.hide();
      btnNext.disable();
      btnSubmit.hide();
      btnSubmit.disable();
    } else {
      btnTranslate.show();
    }
  };

  showHideBtns();

  const checkCurrValidity = (children) => {
    let button = currState === boxStates.length - 4 ? btnSubmit : btnNext;

    if (children.every((child) => child.validity?.valid !== false)) {
      button.enable();
    } else {
      button.disable();
    }
  };
  checkCurrValidity(multiStateBox.currentState.children);

  const handleFormSubmit = () => {
    const googleSheetData = [];
    const date = new Date().toISOString();
    googleSheetData.push("Pending");
    googleSheetData.push(date);
    for (const state of formData) {
      for (const questionValue of state) {
        if (Array.isArray(questionValue)) {
          googleSheetData.push(questionValue.join(", "));
        } else {
          googleSheetData.push(questionValue);
        }
      }
    }
    googleSheetData.push(lang);
    addValuesToGoogleSheet(
      googleSheetData,
      googleSheetsTab,
      "1H6jCMV-gFoTHlbKL2L_Kw7ENVUUv2-dO4MbF9rF2sTM"
    )
      .then((res) => {
        if (res.status === 200) {
          currState++;
          handleStateChange(currState);
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        currState = boxStates.length - 1;
        handleStateChange(currState);
      });
  };

  const storeStateValues = () => {
    const children = boxStates[currState - 1].children;
    const values = [];

    children.forEach((child) => {
      // values.push({
      //     question: child.label,
      //     value: child.value
      // });
      if (child.type === "$w.Text") return;
      values.push(child.value);
    });

    formData[currState - 1] = values;
  };

  btnTranslate.onChange((e) => {
    lang = e.target.value;
    handleTranslate(lang);
  });

  btnBack.onClick(() => {
    if (currState === 0) return;
    currState--;
    handleStateChange(currState);
  });

  btnNext.onClick(() => {
    if (currState >= boxStates.length - 4) return;
    currState++;
    handleStateChange(currState);
    storeStateValues();
  });

  btnSubmit.onClick(() => {
    if (currState !== boxStates.length - 4) return;
    currState++;
    handleStateChange(currState);
    storeStateValues();
    handleFormSubmit();
  });

  checkboxGroups.forEach((group, i) => {
    const chars =
      formTranslations.states[i].questions[0].subheading["en"].split("");
    const max = chars.filter((char) => isNumber(char))[0];
    let selectedIndices;

    group.onChange(() => {
      if (group.value.length <= +max) {
        selectedIndices = group.selectedIndices;
      } else {
        group.selectedIndices = selectedIndices;
      }

      if (group.value.length >= 1) {
        btnNext.enable();
      } else {
        btnNext.disable();
      }
    });
  });
  multiStateBox.onChange((event) => {
    const children = event.target.currentState.children;
    $w("#anchor1").scrollTo();
    showHideBtns();
    checkCurrValidity(children);
  });

  multiStateBox.onClick(() => {
    const children = multiStateBox.currentState.children;
    checkCurrValidity(children);
  });

  dropdowns.forEach((drop, i) => {
    if (i === 0) return;

    drop.onChange(() => {
      const children = multiStateBox.currentState.children;
      checkCurrValidity(children);
    });
    drop.onClick(() => {
      const children = multiStateBox.currentState.children;
      checkCurrValidity(children);
    });
  });

  textInputs.forEach((input) => {
    input.onInput(() => {
      const children = multiStateBox.currentState.children;
      checkCurrValidity(children);
    });
    input.onChange(() => {
      const children = multiStateBox.currentState.children;
      checkCurrValidity(children);
    });
  });

  textBoxs.forEach((box) => {
    box.onInput(() => {
      const children = multiStateBox.currentState.children;
      checkCurrValidity(children);
    });
    box.onChange(() => {
      const children = multiStateBox.currentState.children;
      checkCurrValidity(children);
    });
  });

  zipInput.maxLength = 5;
  zipInput.onCustomValidation((value, reject) => {
    if (value.length !== 5 || value.split("").some((char) => !isNumber(char)))
      reject("Not a valid Zip code");
  });
});
