import { SET_CONTACTS, SET_GROUPS, SET_PERSONS } from "../../libs/constans";
import { StoreAction, Group, Person, Contact } from "../../libs/types";

const groups = (state: Group[] = [], action: StoreAction) => action.type === SET_GROUPS ? action.value : state;
const persons = (state: Person[] = [], action: StoreAction) => action.type === SET_PERSONS ? action.value : state;
const contacts = (state: Contact[] = [], action: StoreAction) => action.type === SET_CONTACTS ? action.value : state;

export default {groups, persons, contacts}