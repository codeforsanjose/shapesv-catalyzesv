const formTranslations = {
  states: [
    {
      state: 0,
      questions: [
        {
          title: {
            en: "Which of the following sustainability features are most important to you?",
            es: "¿Cuáles de las siguientes características de sostenibilidad son más importantes para ti?",
            vi: "Những tính năng bền vững sau đây nào quan trọng nhất đối với bạn?",
          },
          subheading: {
            en: "Select up to 3 Choices",
            es: "Selecciona hasta 3 opciones",
            vi: "Chọn tối đa 3 lựa chọn",
          },
          value: {
            en: [
              "Usage of natural light to reduce energy consumption",
              "Solar panels feeding smart grids",
              "Water conservation and recycling",
              "Drought-tolerant, pollination-enhancing landscaping",
              "Ventilation to enhance indoor air quality",
              "Energy-efficient appliances",
              "Electric vehicle charging stations",
            ],
            es: [
              "Uso de luz natural para reducir el consumo de energía",
              "Paneles solares alimentando redes inteligentes",
              "Conservación y reciclaje de agua",
              "Paisajismo resistente a la sequía y promoción de la polinización",
              "Ventilación para mejorar la calidad del aire interior",
              "Electrodomésticos eficientes en energía",
              "Estaciones de carga para vehículos eléctricos",
            ],
            vi: [
              "Sử dụng ánh sáng tự nhiên để giảm tiêu thụ năng lượng",
              "Bảng điều khiển năng lượng mặt trời cung cấp cho lưới thông minh",
              "Bảo tồn và tái chế nước",
              "Cảnh quan chịu hạn và tăng cường việc thụ phấn",
              "Thiết bị thông gió để cải thiện chất lượng không khí trong nhà",
              "Thiết bị tiết kiệm năng lượng",
              "Trạm sạc xe điện",
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
            en: "Would you be willing to pay extra for sustainable features such as solar energy, energy-efficient appliances, etc.?",
            es: "¿Estarías dispuesto a pagar más por características sostenibles como la energía solar, electrodomésticos eficientes en energía, etc.?",
            vi: "Bạn có sẵn sàng trả thêm tiền cho các tính năng bền vững như năng lượng mặt trời, thiết bị tiết kiệm năng lượng, vv. không?",
          },
          subheading: {
            en: "Please select one",
            es: "Por favor, selecciona uno",
            vi: "Vui lòng chọn một",
          },
          value: {
            en: ["Yes", "No", "Other (Please Specify)"],
            es: ["Sí", "No", "Otro (Por favor, especifica)"],
            vi: ["Có", "Không", "Khác (Vui lòng chỉ rõ)"],
          },
        },
        {
          title: {
            en: "Other (Please Specify)",
            es: "Otro (Por favor, especifica)",
            vi: "Khác (Vui lòng chỉ rõ)",
          },
          subheading: null,
          value: null,
        },
        {
          title: {
            en: "Share your suggestions on improving sustainable features in upcoming housing projects.",
            es: "Comparte tus sugerencias para mejorar las características sostenibles en futuros proyectos de viviendas.",
            vi: "Chia sẻ đề xuất của bạn về việc cải thiện các tính năng bền vững trong các dự án nhà ở sắp tới.",
          },
          subheading: {
            en: "Optional",
            es: "Opcional",
            vi: "Tùy chọn",
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
            en: "Are you a Renter or Home Owner?",
            es: "¿Eres un inquilino o propietario de vivienda?",
            vi: "Bạn là người thuê nhà hay chủ nhà?",
          },
          subheading: {
            en: "Please select one",
            es: "Por favor, selecciona uno",
            vi: "Vui lòng chọn một",
          },
          value: {
            en: ["Renter", "Home Owner", "Other (Please Specify)"],
            es: [
              "Inquilino",
              "Propietario de vivienda",
              "Otro (Por favor, especifica)",
            ],
            vi: ["Người thuê nhà", "Chủ nhà", "Khác (Vui lòng chỉ rõ)"],
          },
        },
        {
          title: {
            en: "Other (Please Specify)",
            es: "Otro (Por favor, especifica)",
            vi: "Khác (Vui lòng chỉ rõ)",
          },
          subheading: null,
          value: null,
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
            es: "¿Eres parte de una Organización Basada en la Comunidad? Selecciona una.",
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
              "Organización",
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
              "Otro",
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
              "Tổ chức",
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
              "Khác",
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

const googleSheetsTab = "'Sustainability Form Data (wix)'!A2";

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
      if (
        child.type === "$w.RadioButtonGroup" &&
        child.value === "Other (Please Specify)"
      ) {
        return;
      }
      if (child.id.endsWith("OtherInput") && !child.enabled) {
        return;
      }
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

  boxStates.forEach((state, stateIndex) => {
    if (stateIndex === 1 || stateIndex === 2) {
      const children = state.children;
      const radio = children.find(
        (child) => child.type === "$w.RadioButtonGroup"
      );
      const otherInput = children.find((child) =>
        child.id.endsWith("OtherInput")
      );
      radio.onChange((e) => {
        if (e.target.value === "Other (Please Specify)") {
          otherInput.enable();
          otherInput.required = true;
        } else {
          otherInput.disable();
          otherInput.required = false;
        }
      });
    }
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
