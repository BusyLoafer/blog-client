import { SET_CONTACTS, SET_EDIT_GROUP, SET_EDIT_PERSON, SET_GROUPS, SET_PERSONS, SET_SHOW_EDIT_GROUP, SET_SHOW_EDIT_PERSON } from "../../libs/constans";
import { Contact, Group, Person } from "../../libs/types";

export const setContacts = (value: Contact[]) => ({type: SET_CONTACTS,	value});

// Groups
export const setGroups = (value: Group[]) => ({type: SET_GROUPS,	value});
export const setEditGroup = (value: Group | null) => ({type: SET_EDIT_GROUP,	value});
export const setShowEditGroup = (value: boolean) => ({type: SET_SHOW_EDIT_GROUP,	value});

// Persons
export const setPersons = (value: Person[]) => ({type: SET_PERSONS,	value});
export const setEditPerson = (value: Person | null) => ({type: SET_EDIT_PERSON,	value});
export const setShowEditPerson = (value: boolean) => ({type: SET_SHOW_EDIT_PERSON,	value});