import { SET_CONTACTS, SET_EDIT_GROUP, SET_GROUPS, SET_PERSONS, SET_SHOW_EDIT_GROUP } from "../../libs/constans";
import { StoreAction, Group, Person, Contact } from "../../libs/types";

const groups = (state: Group[] = [], action: StoreAction) => action.type === SET_GROUPS ? action.value : state;
const persons = (state: Person[] = [], action: StoreAction) => action.type === SET_PERSONS ? action.value : state;
const contacts = (state: Contact[] = [], action: StoreAction) => action.type === SET_CONTACTS ? action.value : state;

const editGroup = (state: Group | null = null, action: StoreAction) => action.type === SET_EDIT_GROUP ? action.value : state;
const showEditGroup = (state: boolean = false, action: StoreAction) => action.type === SET_SHOW_EDIT_GROUP ? action.value : state;

export default { groups, persons, contacts, editGroup, showEditGroup }