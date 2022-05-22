export const normalizeData = (data, elements) => {
  const searchElem = elements.find((elem) => elem.name === data.name);
  return {
    ...data,
    value: searchElem.value,
    isChecked: searchElem.isChecked ? true : false,
  };
};
