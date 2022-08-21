import { SET_CURRENT_DAY, SET_MOUNTH } from "../../libs/constans";

export const setCurrentDay = (value: Date) => ({type: SET_CURRENT_DAY,	value});
export const setMounth = (value: number) => ({type: SET_MOUNTH,	value});