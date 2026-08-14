import { defineBoot } from '#q-app'
import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 10_000,
  headers: {
    Accept: 'application/json',
  },
})

export default defineBoot(() => {})

export { api }
