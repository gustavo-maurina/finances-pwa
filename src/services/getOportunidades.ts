import { API } from "./api";

const convertStringToObject = (str: string) => {
  let stringToConvert = str;
  const obj: any = {};

  stringToConvert = stringToConvert.replace("{", "").replace("}", "");

  stringToConvert.split(",").forEach((property) => {
    if (!property.length) return;

    const [key, value] = property.split(":");
    obj[key.trim()] = value.trim();
  });

  console.log(obj);
};

export const getOportunidades = async () => {
  try {
    const req = await API.get("");

    return convertStringToObject(req.data);
  } catch (err: any) {
    throw new Error(err);
  }
};
