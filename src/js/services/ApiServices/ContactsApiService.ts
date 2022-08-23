import axios from "axios"
import { API_URL } from "../../libs/config"
import { apiPaths } from "../../libs/constans"
import { Group } from "../../libs/types"

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

export const axiosCreateGroup = async (data: Group) => new Promise((res, _rej) => {
  axios.post(
    `${API_URL}${apiPaths.groups}`,
    JSON.stringify(data),
    { headers: { 'Content-Type': 'application/json' } }
  )
    .then(res)
});
