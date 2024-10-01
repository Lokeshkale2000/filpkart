import axios from 'axios';

const url = 'https://filpkart-qn9r.vercel.app';
export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user);
    } catch (error) {
        console.log('Error while calling login API: ', error.message);
        return { error: true, message: error.message }; 
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user);
    } catch (error) {
        console.log('Error while calling Signup API: ', error.message);
        return { error: true, message: error.message };
    }
}



