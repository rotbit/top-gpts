import CryptoJS from 'crypto-js';
const secretKey = process.env.ENCRYPT_KEY

export function encrypt(data) {
  let encData = data
    try {
      encData = CryptoJS.AES.encrypt(data, secretKey).toString();
    } catch(error) {
      console.log(error);
    }
    return encData;
  }

export function decrypt(ciphertext) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }