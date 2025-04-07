import axios from "axios";

const rapidApiKey = "675f1fc79cmshf7f83bb615df26ep132afajsndfcc9ae0eb41";

const baseURL = "https://exercisedb.p.rapidapi.com";

const apicall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchExercisesByBodyParts = async (bodyPart) => {
  let data = await apicall(baseURL + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
