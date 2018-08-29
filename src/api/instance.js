import axios from 'axios';
import environment from '../config/environment';

const env = environment.env;

export default axios.create({
    baseURL: environment.api[env].endpoints
});
