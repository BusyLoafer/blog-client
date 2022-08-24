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

const createGroup = async (params:Group, func: () => void) => {
  axiosCreateGroup(params).then((response: AxiosResponse) => {
    addNewGroup(response.data)
    func();
  })
}

const addNewGroup = (group: Group) => {
  const {groups} = store.getState();
  dispatch(setGroups(groups.concat([group])))
}



export {checkContacts, createGroup}