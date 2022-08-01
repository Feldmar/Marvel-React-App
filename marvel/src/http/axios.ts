import axios from "axios";

const $api = axios.create({
  baseURL: process.env.API_URL || 'https://gateway.marvel.com:443/v1/public/',
  params: {
    hash: process.env.HASH || 'e2f0393349b916df7ffebf7b48e2a7b9',
    ts: process.env.TS || '100',
    apikey: process.env.API_KEY || '3cf2949e02b2b1a7f4b16606c304108c'
  }
})
export default $api;