const formTranslations = {
  states: [
    {
      state: 0,
      questions: [
        {
          title: {
            en: "What type of transportation method do you use most frequently?",
            es: "¿Qué tipo de método de transporte utilizas con mayor frecuencia?",
            vi: "Phương tiện giao thông nào bạn sử dụng thường xuyên nhất?",
          },
          subheading: {
            en: "Select up to 3 Choices",
            es: "Selecciona hasta 3 opciones",
            vi: "Chọn tối đa 3 lựa chọn",
          },
          value: {
            en: [
              "Drive alone",
              "Carpool / rideshare",
              "Bus",
              "Train (BART, VTA Light Rail or Caltrain)",
              "Uber/Lyft/taxi",
              "Bike",
              "Walk",
              "Scooter",
              "Outreach (paratransit)",
            ],
            es: [
              "Conducir solo",
              "Compartir coche / viajes compartidos",
              "Autobús",
              "Tren (BART, VTA Light Rail o Caltrain)",
              "Uber/Lyft/taxi",
              "Bicicleta",
              "Caminar",
              "Patinete",
              "Outreach (paratransporte)",
            ],
            vi: [
              "Lái xe một mình",
              "Chia xe / chia sẻ chuyến đi",
              "Xe buýt",
              "Tàu (BART, VTA Light Rail hoặc Caltrain)",
              "Uber/Lyft/taxi",
              "Xe đạp",
              "Đi bộ",
              "Xe scooter",
              "Outreach (vận chuyển đặc biệt)",
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
            en: "Which of these public transportation benefits are you most interested in?",
            es: "¿Cuál de estos beneficios del transporte público te interesa más?",
            vi: "Bạn quan tâm nhất đến những lợi ích vận chuyển công cộng nào sau đây?",
          },
          subheading: {
            en: "Please select up to 2 choices",
            es: "Selecciona hasta 2 opciones",
            vi: "Vui lòng chọn tối đa 2 lựa chọn",
          },
          value: {
            en: [
              "Free transit passes",
              "More frequent transit service",
              "More (convenient) transit stops",
              "Faster speeds for transit",
              "Education/information on how to ride transit",
              "More accessible information on transit service (ex: signage at transit stops, apps on your phone)",
              "Better security at stations",
            ],
            es: [
              "Pases de transporte gratuito",
              "Servicio de transporte público más frecuente",
              "Más paradas de transporte público (convenientes)",
              "Mayores velocidades para el transporte público",
              "Educación/información sobre cómo utilizar el transporte público",
              "Más información accesible sobre el servicio de transporte público (por ejemplo, señalización en las paradas de transporte público, aplicaciones en tu teléfono)",
              "Mejor seguridad en las estaciones",
            ],
            vi: [
              "Vé xe công cộng miễn phí",
              "Dịch vụ vận chuyển công cộng thường xuyên hơn",
              "Nhiều điểm dừng công cộng hơn (thuận tiện hơn)",
              "Tốc độ nhanh hơn cho vận chuyển công cộng",
              "Giáo dục/thông tin về cách sử dụng phương tiện công cộng",
              "Thông tin dễ tiếp cận hơn về dịch vụ vận chuyển công cộng (ví dụ: biển chỉ dẫn tại các điểm dừng, ứng dụng trên điện thoại)",
              "An ninh tốt hơn tại các trạm",
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
            en: "Which of these private transportation benefits are you most interested in?",
            es: "¿Cuál de estos beneficios del transporte privado te interesa más?",
            vi: "Bạn quan tâm nhất đến những lợi ích vận chuyển riêng nào sau đây?",
          },
          subheading: {
            en: "Please select up to 2 choices",
            es: "Selecciona hasta 2 opciones",
            vi: "Vui lòng chọn tối đa 2 lựa chọn",
          },
          value: {
            en: [
              "More parking options",
              "More electric charging stations",
              "Van access for wheelchair transport/delivery",
              "Ability to rent out your parking space",
              "More bikeshare stations",
              "More scooter service",
              "Better Lyft/Uber/Taxi service",
              "Transit incentives through work (stipends from transit riders, showers at work for bike riders, etc.)",
            ],
            es: [
              "Más opciones de estacionamiento",
              "Más estaciones de carga eléctrica",
              "Acceso a furgonetas para el transporte/entrega de sillas de ruedas",
              "Capacidad para alquilar tu espacio de estacionamiento",
              "Más estaciones de uso compartido de bicicletas",
              "Más servicio de patinetes",
              "Mejor servicio de Lyft/Uber/Taxi",
              "Incentivos de transporte a través del trabajo (estipendios para usuarios del transporte, duchas en el trabajo para ciclistas, etc.)",
            ],
            vi: [
              "Nhiều lựa chọn bãi đỗ xe hơn",
              "Nhiều trạm sạc điện cho xe hơi điện hơn",
              "Truy cập xe van cho việc vận chuyển/giao hàng cho người sử dụng xe lăn",
              "Khả năng cho thuê chỗ đỗ xe của bạn",
              "Nhiều trạm xe đạp sử dụng chia sẻ hơn",
              "Dịch vụ xe scooter nhiều hơn",
              "Dịch vụ Lyft/Uber/Taxi tốt hơn",
              "Khuyến mãi vận chuyển công cộng qua công việc (trợ cấp cho người đi vận chuyển công cộng, phòng tắm tại nơi làm việc cho người đi xe đạp, v.v.)",
            ],
          },
        },
      ],
    },
    {
      state: 3,
      questions: [
        {
          title: {
            en: "What type of transportation improvements would you like to see in the community?",
            es: "¿Qué tipo de mejoras en el transporte te gustaría ver en la comunidad?",
            vi: "Bạn muốn thấy những cải tiến vận chuyển nào trong cộng đồng?",
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
      state: 4,
      questions: [
        {
          title: {
            en: "Do you have special needs?",
            es: "¿Tienes necesidades especiales?",
            vi: "Bạn có nhu cầu đặc biệt không?",
          },
          subheading: {
            en: "Select one dropdown choice",
            es: "Selecciona una opción del menú desplegable",
            vi: "Chọn một lựa chọn trong danh sách thả xuống",
          },
          value: {
            en: ["None", "Senior", "On Wheelchair", "On Walker"],
            es: [
              "Ninguno",
              "Adulto mayor",
              "En silla de ruedas",
              "Con andador",
            ],
            vi: ["Không", "Người cao tuổi", "Ngồi xe lăn", "Sử dụng xúc xích"],
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
      state: 5,
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

const googleSheetsTab = "'Transportation Form Data (wix)'!A2";

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
