import http from "k6/http";

export const options = {
  iterations: 1,
};

export default function () {
  const response = http.post("http://localhost:4000",
  {
    cookies: {
      my_cookie: 'hello world',
    },
  });
}