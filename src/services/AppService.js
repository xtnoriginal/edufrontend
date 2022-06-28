import axios from 'axios';
import {getAccessToken} from "./common";
const API_URL = 'http://localhost:8080';

export default class AppService{




    getPapers(subject) {
        const url = `${API_URL}/app/subject/${subject}`;
        return axios.get(url, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`
            }
        }).then(response => response.data);
    }
    getCustomersByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getCustomer(pk) {
        const url = `${API_URL}/api/customers/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteCustomer(customer){
        const url = `${API_URL}/api/customers/${customer.pk}`;
        return axios.delete(url);
    }
    createCustomer(customer){
        const url = `${API_URL}/api/customers/`;
        return axios.post(url,customer);
    }
    updateCustomer(customer){
        const url = `${API_URL}/api/customers/${customer.pk}`;
        return axios.put(url,customer);
    }

}
