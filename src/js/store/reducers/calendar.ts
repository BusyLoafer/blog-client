import { SET_CURRENT_DAY, SET_MOUNTH } from "../../libs/constans";
import { StoreAction } from "../../libs/types";

const currentDay = (state: Date = new Date(), action: StoreAction) => action.type === SET_CURRENT_DAY ? action.value : state;
const currentMounth = (state: number = new Date().getMonth(), action: StoreAction) => action.type === SET_MOUNTH ? action.value : state;

export default {currentDay, currentMounth}