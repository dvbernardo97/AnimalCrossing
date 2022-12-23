import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
  console.log('sendrequest')
  console.log(url)
  console.log(method)
  console.log(payload)
  const options = { method };
  if (payload) {
    console.log('payloadstart')
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  
  const token = getToken();
  if (token) {
    console.log('tokenstart')
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }console.log(options)
  const res = await fetch(url, options);
  console.log(res)
  
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}