import axios from 'axios'
import { useState } from 'react';


const USERS_REST_API_URL = 'http://localhost:8080/news/all';
class NoticiaService {
 buscarTodos () {
    return axios.get(USERS_REST_API_URL);
 }

}




export default new NoticiaService (); 
