import axios from "axios"
import { API_URL } from "../../libs/config"
import { apiPaths } from "../../libs/constans"


export const getMeals = new Promise((res, _rej) => {
  axios.get(`${API_URL}${apiPaths.meals}`)
    .then(res)
})

export const getDishes = new Promise((res, _rej) => {
  axios.get(`${API_URL}${apiPaths.dishes}`)
    .then(res)
})

export const getProducts = new Promise((res, _rej) => {
  axios.get(`${API_URL}${apiPaths.products}`)
    .then(res)
})