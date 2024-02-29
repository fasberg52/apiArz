import axios from 'axios'

export const baseUrlArz = axios.create({ baseURL: "https://raw.githubusercontent.com",
timeout: 3000000,
headers: {
  "Content-Type": "application/json",
},})
