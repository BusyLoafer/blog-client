import store from '../store'
import { setNewDay, setNewMounth } from './StoreServices/CalendarStoreService';


export const changeDay = (val: number) => {
  const { currentDay, currentMounth } = store.getState();
  let copyOfDate = new Date(currentDay.valueOf());
  copyOfDate = new Date(copyOfDate.setDate(val));
  const newMounth = copyOfDate.getMonth();
  if (newMounth !== currentMounth) {
    setNewMounth(newMounth);
  }
  setNewDay(copyOfDate)
}

export const setCurrentToday = () => {
  const { currentMounth } = store.getState();
  const newDate = new Date();
  setNewDay(newDate)
  const newMounth = newDate.getMonth();
  if (newMounth !== currentMounth) {
    setNewMounth(newMounth);
  }
}

export const nextDay = () => {
  const { currentDay } = store.getState();
  changeDay(currentDay.getDate() + 1)
}
export const prevDay = () => {
  const { currentDay } = store.getState();
  changeDay(currentDay.getDate() - 1)
}

export const getNormalDay = (day: number): number => day < 0 ? 6 : day;