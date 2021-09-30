export const limitTextLengthAndAddEllipsis = (text: string, length: number) => {
  return `${text.slice(0, length)}...`;
};
