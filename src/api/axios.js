import axios from 'axios'


const Axios = axios.create({
  timeout: 8000,
});


export default Axios

