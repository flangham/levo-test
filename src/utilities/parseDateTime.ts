// Convert from YYYY-MM-DDT12:42:04.000Z format to DD/MM/YYYY
export const parseDateTime = (datetime: string) => {
  const day = datetime.slice(8, 10);
  const month = datetime.slice(5, 7);
  const year = datetime.slice(0, 4);
  return `${day}/${month}/${year}`;
};
