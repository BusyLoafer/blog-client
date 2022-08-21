import axios from "axios"
import { API_URL } from "../../libs/config"
import { apiPaths } from "../../libs/constans"

export const getContacts = new Promise((res, _rej) => {
  axios.get(`${API_URL}${apiPaths.contacts}`)
    .then(res)
})

export const getGroups = new Promise((res, _rej) => {
  axios.get(`${API_URL}${apiPaths.groups}`)
    .then(res)
})

export const getPersons = new Promise((res, _rej) => {
  axios.get(`${API_URL}${apiPaths.persons}`)
    .then(res)
})