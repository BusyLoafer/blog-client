import { AxiosResponse } from 'axios';
import { getDishes, getMeals, getProducts } from "../ApiServices/FoodApiService";


export const checkFoodExists = () => {
  getDishesData();
  getProductsData();
  getMealsData();
}

const getDishesData = () => {
  getDishes.then((data:AxiosResponse) => console.log("dishes", data.data))
}

const getProductsData = () => {
  getProducts.then((data:AxiosResponse) => console.log("products", data.data))
}

const getMealsData = () => {
  getMeals.then((data:AxiosResponse) => console.log("meals", data.data))
}