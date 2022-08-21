import { SET_CONTACTS, SET_GROUPS, SET_PERSONS } from "../../libs/constans";
import { Contact, Group, Person } from "../../libs/types";

export const setGroups = (value: Group[]) => ({type: SET_GROUPS,	value});
export const setContacts = (value: Contact[]) => ({type: SET_CONTACTS,	value});
export const setPersons = (value: Person[]) => ({type: SET_PERSONS,	value});