import { AxiosResponse } from 'axios';
import store from '../../store'
import { setContacts, setGroups, setPersons } from '../../store/actions/contacts';
import { getContacts, getGroups, getPersons } from '../ApiServices/ContactsApiService';

const { dispatch } = store;

export const checkContacts = () => {
  if (!store.getState().groups.length) {
    getContactsData();
    getGroupsData();
    getPersonsData();
  }
}

const getContactsData = async () => {
  getContacts.then((reponse: AxiosResponse) => dispatch(setContacts(reponse.data)))
}

const getGroupsData = async () => {
  getGroups.then((reponse: AxiosResponse) => dispatch(setGroups(reponse.data)))
}

const getPersonsData = async () => {
  getPersons.then((reponse: AxiosResponse) => dispatch(setPersons(reponse.data)))
}