import axios from 'axios'


class Http {
    private baseUrl: string;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    public async fetch(path: string) {
        return axios.get(`${this.baseUrl}${path}`);
    }

    public async post(path: string, data: any) {
        return axios.post(`${this.baseUrl}${path}`, data);
    }
}

export default Http;