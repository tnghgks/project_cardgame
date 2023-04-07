export const request = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
    throw new Error("API 통신 실패");
  } catch (e) {
    alert(e.message);
  }
};
