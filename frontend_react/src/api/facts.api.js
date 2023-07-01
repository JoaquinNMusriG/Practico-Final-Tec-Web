import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getFactsFiltered = (gen) =>{
    console.log(gen)
    return client.get('/api-facts/filtered/', {
        params: { generation: gen }, 
    })
}
