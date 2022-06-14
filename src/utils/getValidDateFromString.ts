/**
 * Retorna uma data Javascript válida a partir de uma string.
 *
 * @param dateString data no formato dd/mm/yyyy
 * @returns
 */
export function getValidDateFromString(dateString: string): Date {
  const splitData = dateString.split("/");
  const day = parseInt(splitData[0], 10);
  const month = parseInt(splitData[1], 10);
  const year = parseInt(splitData[2], 10);

  const date = new Date(year, month - 1, day);

  return date;
}
