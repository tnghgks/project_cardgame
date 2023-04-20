const useLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getItem: (key) => {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  },

  addOneToProperty: (key, property) => {
    const prevData = useLocalStorage.getItem(key);
    if (!prevData || !prevData.hasOwnProperty(property)) return;

    localStorage.setItem(key, JSON.stringify({ ...prevData, [property]: prevData[property] + 1 }));
  },
};

export default useLocalStorage;
