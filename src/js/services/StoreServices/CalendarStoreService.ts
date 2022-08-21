import { AxiosResponse } from 'axios';
import store from '../../store'
import { setCurrentDay, setMounth } from '../../store/actions/calendar';

const { dispatch } = store;

export const setNewDay = (date: Date) => {
  dispatch(setCurrentDay(date));
}

export const setNewMounth = (mounth: number) => {
  dispatch(setMounth(mounth));
}