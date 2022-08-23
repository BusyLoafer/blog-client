import { AxiosResponse } from 'axios';
import { Group } from '../../libs/types';
import store from '../../store'
import { setContacts, setGroups, setPersons } from '../../store/actions/contacts';
import { axiosCreateGroup, getContacts, getGroups, getPersons } from '../ApiServices/ContactsApiService';

const { dispatch } = store;

const checkContacts = () => {
  if (!store.getState().groups.length) {
    getContactsData();
    getGroupsData();
    getPersonsData();
  }
}

const getContactsData = async () => {
  getContacts.then((response: AxiosResponse) => dispatch(setContacts(response.data)))
}

const getGroupsData = async () => {
  getGroups.then((response: AxiosResponse) => dispatch(setGroups(response.data)))
}

const getPersonsData = async () => {
  getPersons.then((response: AxiosResponse) => dispatch(setPersons(response.data)))
}

const createGroup = async (params:Group) => {
  axiosCreateGroup(params).then((response: AxiosResponse) => console.log(response))
}



export {checkContacts, createGroup}