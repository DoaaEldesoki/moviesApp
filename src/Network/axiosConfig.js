import axios from "axios";

export const axiosInstace = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});
// Add a request interceptor
axiosInstace.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      console.log("Interceptor", config);
      // config.headers = {
      //   ...config.headers,
      //   Authorization: localStorage.getItem("token"),
      // };
    //   if (localStorage.getItem("token")) {
    //     config.headers["Authorization"] = localStorage.getItem("token");
    //   }
      config.params = {
        ...config.params,
        "api_key": "c5e8f13c16ef17ae472b2cf2b9beceec",
      };
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  axiosInstace.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );