import { detailImages, additionalCard, mainCources } from "./data";
import { EndpointEmulationType } from "../types/general";


export function serverEmulation(endpoint: EndpointEmulationType): Promise<any> {
  let data = {};

  switch (endpoint) {
    case "/main_courses": 
      data = mainCources;
      break;
    case "/statistics_info":
      data = detailImages;
      break;
    case "/cards_info":
      data = "Data developing...";
      break;
    case "/additional_info":
      data = additionalCard;
      break;
    default: 
      data = "Error: no endpoint"
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const response = { data: data };
      resolve(response);
    }, 1000); // Імітуємо затримку в 1 секунду
  });
}
