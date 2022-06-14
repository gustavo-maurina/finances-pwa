import { API } from "./api";

const sanitizeString = (stringToSanitize: string) =>
  stringToSanitize.replace("{", "").replace("}", "").replace(/\n/g, "");

const convertStringToObject = (str: string) => {
  const stringToConvert = sanitizeString(str);
  const obj: any = {};

  stringToConvert.split(",").forEach((property) => {
    if (!property.length) return;

    const [key, value] = property.split(":");
    console.log({ key, value, property });
    obj[key.replaceAll('"', "").trim()] = parseFloat(value.trim());
  });

  return obj;
};

export const getOportunidades = async () => {
  try {
    const req = await API.get("");
    const responseObject = convertStringToObject(req.data);

    return responseObject;
  } catch (err: any) {
    throw new Error(err);
  }
};
