/**
 * Created by SYLVAIN on 08/11/2017.
 */
'use strict'
import axios from 'axios'


const API_ENDPOINT = 'http://localhost:1337';

export default {
    fetchAll(){
    return axios.get(`${API_ENDPOINT}/collaborateurs`)
            .then(res => res.data).catch(console.error);
    }

}