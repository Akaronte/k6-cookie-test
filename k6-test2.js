import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const jar = http.cookieJar();
  jar.set('http://localhost:4000', 'my_cookie', 'hello world', {
    domain: 'localhost',
    path: '/',
    secure: true,
    max_age: 600,
  });

  const res = http.post('http://localhost:4000');
  check(res, {
    'has status 200': (r) => r.status === 200,
    "has cookie 'my_cookie'": (r) => r.json().cookies.my_cookie !== null,
    'cookie has correct value': (r) => r.json().cookies.my_cookie == 'hello world',
  });
}