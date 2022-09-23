import axios from 'axios';
import { Buffer } from "buffer";

export const userLogin = async(userName, password) => {
  let result = {id: '', error: ''};

  try {
    const encodedBase64Token = Buffer.from(`${userName}:${password}`).toString('base64');
    const authorization = `Basic ${encodedBase64Token}`;
    const response = await axios.get('https://cloud-api.10levels.ru/v1/login/basic', {
      headers: {
        Authorization: authorization
      },
    }); 

    result.id = response.data.content.id;

  } catch(error)  {
    result.error = error.response.data;
  }; 
  return result;
}