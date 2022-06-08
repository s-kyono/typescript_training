import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
const url = "https://jsonplaceholder.typicode.com";

const options: AxiosRequestConfig = {
  url: `${url}/users`,
  method: "GET",
};

const response = () => {
  axios(options)
  .then((res: {}) => {
    //やりたいことをやる
  })
  .catch((e: AxiosError<{ error: string }>) => {
    // エラー処理
    console.log(e.message);
  });
};


export default response;
