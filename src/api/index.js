import axios from "axios";


let options = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true
}
const Axios = axios.create(options)

Axios.defaults.headers['Authorization'] = 'token d39076d6da35af2144cceac87f0a4ae03e0daffe'


console.log(Axios.defaults, 'axios headers')
const post = (url, formData) => Axios.post(url, formData);
const update = (url, formData) => Axios.put(url, formData);
const remove = (url, formData) => Axios.delete(url, formData);
const get = (url) => Axios.get(url);

export default {
  post,
  update,
  remove,
  get
}