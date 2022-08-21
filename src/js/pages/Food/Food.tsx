import React, { FC, useEffect } from 'react'
import { checkFoodExists } from '../../services/StoreServices/FoodStoreService';

const Food:FC = () => {

  useEffect(() => {
    checkFoodExists();
  }, [])
  

  return (
    <div>Food</div>
  )
}

export default Food