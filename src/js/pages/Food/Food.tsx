import React, { FC, useEffect } from 'react'
import Tabs from '../../components/tabs/Tabs';
import { checkFoodExists } from '../../services/StoreServices/FoodStoreService';
import Dishes from './Dishes';
import Meals from './Meals';
import Products from './Products';

const Food: FC = () => {

  useEffect(() => {
    checkFoodExists();
  }, [])


  return (
    <div id='food' className='main-block'>
      <Tabs
        titles={["Приемы пищи", "Блюда", "Продукты"]}
      >
        <Meals />
        <Dishes />
        <Products/>
      </Tabs>
    </div>
  )
}

export default Food