// If text is shorter than length, just return the text
// otherwise trim and add ellipsis
export const limitTextLength = (text: string, length: number) => {
  return text.length <= length ? text : `${text.slice(0, length)}...`;
};
