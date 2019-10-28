import axios from "axios";

const fetch = async () => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

export default fetch;
