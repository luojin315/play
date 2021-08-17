import axios from 'axios'

export const serverAxios = axios.create({
    baseURL: 'http://localhost:9094/'
})

export const clientAxios = axios.create({
    baseURL: '/'
})