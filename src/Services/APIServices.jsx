import axios from 'axios'; // Import the axios library

const baseUrl = "http://10.81.4.89:2022/api/admin/getonecategory?catName=vegetables"; 
export default new (class ApiService {

    getProductsByCatg(data) {
   
        return axios.get(`${baseUrl}`);
    
  }
}

)
