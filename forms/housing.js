const formTranslations = {
  states: [
    {
      state: 0,
      questions: [
        {
          title: {
            en: "What types of housing are you interested in?",
            es: "¿Qué tipos de vivienda te interesan?",
            vi: "Bạn quan tâm đến loại nhà ở nào?",
          },
          subheading: {
            en: "Select up to 3 Choices",
            es: "Selecciona hasta 3 opciones",
            vi: "Chọn tối đa 3 lựa chọn",
          },
          value: {
            en: [
              "Market-rate Housing",
              "Senior Housing",
              "Foster Youth Housing",
              "Affordable Housing -- making less than area AMI",
              "Affordable Housing for former homeless",
              "Emergency interim or Temporary Housing",
              "Congregate/Assisted living Housing",
              "Housing for disabled",
              "Mixed-Income (next to Affordable Homes)",
              "Farmworker Housing",
              "Student Housing",
              "Housing for Teacher/Nurses",
            ],
            es: [
              "Vivienda a precio de mercado",
              "Vivienda para personas mayores",
              "Vivienda para jóvenes de acogida",
              "Vivienda asequible: ingresos menores que el AMI de la zona",
              "Vivienda asequible para antiguos sin hogar",
              "Vivienda temporal de emergencia",
              "Vivienda de vida congregada/asistida",
              "Vivienda para personas discapacitadas",
              "Vivienda de ingresos mixtos (junto a viviendas asequibles)",
              "Vivienda para trabajadores agrícolas",
              "Vivienda para estudiantes",
              "Vivienda para profesores/enfermeras",
            ],
            vi: [
              "Nhà ở theo giá thị trường",
              "Nhà ở cho người cao tuổi",
              "Nhà ở cho thanh thiếu niên dưới sự chăm sóc",
              "Nhà ở phải chịu giá thấp hơn AMI khu vực",
              "Nhà ở phục vụ người từng vô gia cư",
              "Nhà ở tạm thời trong tình hình khẩn cấp",
              "Nhà ở cộng đồng hoặc hỗ trợ sống",
              "Nhà ở cho người khuyết tật",
              "Nhà ở thu nhập kết hợp (gần nhà ở giá thấp)",
              "Nhà ở cho công nhân nông trại",
              "Nhà ở cho sinh viên",
              "Nhà ở cho giáo viên/hộ lý",
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
            en: "What amenities would you like in your home/housing complex?",
            es: "¿Qué comodidades te gustaría tener en tu hogar/edificio de viviendas?",
            vi: "Bạn muốn có các tiện nghi gì trong ngôi nhà/công trình nhà ở của bạn?",
          },
          subheading: {
            en: "Please select up to 3 choices",
            es: "Selecciona hasta 3 opciones",
            vi: "Vui lòng chọn tối đa 3 lựa chọn",
          },
          value: {
            en: [
              "Laundry facility",
              "Secure mailboxes",
              "Air conditioning",
              "Kids play area",
              "Covered assigned parking",
              "Fitness Center",
              "Bike rooms",
            ],
            es: [
              "Lavandería",
              "Buzones seguros",
              "Aire acondicionado",
              "Área de juegos para niños",
              "Estacionamiento asignado cubierto",
              "Centro de fitness",
              "Salas para bicicletas",
            ],
            vi: [
              "Cơ sở giặt ủi",
              "Hộp thư an toàn",
              "Điều hòa không khí",
              "Khu vui chơi cho trẻ em",
              "Bãi đỗ xe được chỉ định che kín",
              "Trung tâm thể dục",
              "Phòng đậu xe đạp",
            ],
          },
        },
        {
          title: {
            en: "Share any suggestions you have for housing developments in your neighborhood.",
            es: "Comparte cualquier sugerencia que tengas para desarrollos de viviendas en tu vecindario.",
            vi: "Chia sẻ mọi đề xuất mà bạn có cho sự phát triển nhà ở trong khu vực của bạn.",
          },
          subheading: {
            en: "Optional",
            es: "Opcional",
            vi: "Không bắt buộc",
          },
          value: null,
        },
      ],
    },
    {
      state: 2,
      questions: [
        {
          title: {
            en: "Including yourself, how many people currently live in your household?",
            es: "Incluyéndote a ti mismo, ¿cuántas personas viven actualmente en tu hogar?",
            vi: "Bao gồm bạn, hiện tại có bao nhiêu người sống trong hộ gia đình của bạn?",
          },
          subheading: {
            en: "Please select one",
            es: "Selecciona una opción",
            vi: "Vui lòng chọn một lựa chọn",
          },
          value: {
            en: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10+",
              "choose not to answer",
            ],
            es: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10+",
              "prefiero no responder",
            ],
            vi: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10+",
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
            en: "Select one dropdown choice",
            es: "Selecciona una opción del menú desplegable",
            vi: "Chọn một lựa chọn trong danh sách thả xuống",
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
              "choose not to answer",
            ],
            es: [
              "18-24",
              "25-34",
              "35-44",
              "45-54",
              "55-64",
              "65-74",
              "75 o más",
              "prefiero no responder",
            ],
            vi: [
              "18-24",
              "25-34",
              "35-44",
              "45-54",
              "55-64",
              "65-74",
              "75 trở lên",
              "không muốn trả lời",
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
            en: "Please enter a valid Zip code",
            es: "Por favor, ingresa un código postal válido",
            vi: "Vui lòng nhập mã bưu điện hợp lệ",
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
            en: "Are you part of a Community Based Organization? Select one?",
            es: "¿Eres parte de una Organización Comunitaria? Selecciona una.",
            vi: "Bạn có phải là thành viên của Tổ chức Dựa vào Cộng đồng không? Hãy chọn một.",
          },
          subheading: {
            en: "Select one dropdown choice",
            es: "Selecciona una opción del menú desplegable",
            vi: "Chọn một lựa chọn trong danh sách thả xuống",
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
            en: "Select one dropdown choice",
            es: "Selecciona una opción del menú desplegable",
            vi: "Chọn một lựa chọn trong danh sách thả xuống",
          },
          value: {
            en: [
              "under $50,000",
              "$50,000 - $100,000",
              "$100,000 - $200,000",
              "Over $200,000",
            ],
            es: [
              "menos de $50,000",
              "$50,000 - $100,000",
              "$100,000 - $200,000",
              "Más de $200,000",
            ],
            vi: [
              "dưới $50,000",
              "$50,000 - $100,000",
              "$100,000 - $200,000",
              "Hơn $200,000",
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
      en: "Continue>",
      es: "Continuar>",
      vi: "Tiếp tục>",
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

const googleSheetsTab = "'Affordability Form Data (wix)'!A2";

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
    showHideBtns();
    checkCurrValidity(children);
  });

  multiStateBox.onClick(() => {
    const children = multiStateBox.currentState.children;
    checkCurrValidity(children);
  });

  textInputs.forEach((input) => {
    input.onInput(() => {
      const children = multiStateBox.currentState.children;
      checkCurrValidity(children);
    });
  });

  textBoxs.forEach((box) => {
    box.onInput(() => {
      const children = multiStateBox.currentState.children;
      checkCurrValidity(children);
    });
  });
});
