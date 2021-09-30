export const parseDateTime = (datetime: string) => {
  const day = datetime.slice(8, 10);
  const month = datetime.slice(5, 7);
  const year = datetime.slice(0, 4);
  return `${day}/${month}/${year}`;
};
