//function to get data from the server with axios
export const getSliderData = () => {
  return axios.get("http://localhost:3000/slider");
};
