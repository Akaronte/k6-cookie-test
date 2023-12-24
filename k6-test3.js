import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const jar = http.cookieJar();
    jar.set('http://localhost:4000', 'name1', 'value1');
    jar.set('http://localhost:4000', 'name2', 'value2');

    const url = 'http://localhost:4000';
    const payload = JSON.stringify({ 'key': 'value' });
    const headers = { 'Content-Type': 'application/json' };
    const cookies = jar.cookiesForURL(url);

    const res = http.post(url, payload, { headers, cookies });
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}