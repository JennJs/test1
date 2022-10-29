import axios from 'axios';

export const userRegistration = async (login, password) => {
    let result = { id: '', error: '' };

    try {
        const response = await axios.post(
        'https://cloud-api.10levels.ru/v1/registration/basic',
        {
            login,
            password
        }
        );
        if (response.data.error.status > 0) {
        result.error = response.data.error.message;
        } else {
        result.id = response.data.content.id;
        }
    } catch (error) {
        result.error = error;
    }
    return result;
};