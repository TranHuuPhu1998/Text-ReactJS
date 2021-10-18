const storeData = (data: unknown, key: string): void => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(data));
};

const getData = (key: string): undefined | string => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }
  const item = window.localStorage.getItem(key);

  if (!item) {
    return;
  }

  return JSON.parse(item);
};


export { storeData, getData };
