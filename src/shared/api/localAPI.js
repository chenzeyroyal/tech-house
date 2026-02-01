const localAPI = {
  write: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },

  read: (key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch {
      return [];
    }
  },
};

export default localAPI;
