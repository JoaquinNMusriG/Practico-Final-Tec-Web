import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const submitRegistration = (user, gen) => {
  client.post("/api/register/", {
    email: user["email"],
    password: user["password"],
    username: user["username"],
    generation: gen,
  });
};

export const submitLogin = (user) => {
  return client.post("/api/login/", {
    email: user["email-login"],
    password: user["password-login"],
  });
};

export const submitLogout = () => {
    client.post("/api/logout/")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

export const getUser = () => {
    return client.get("/api/user/");
  };