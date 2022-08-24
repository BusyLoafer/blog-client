import { AxiosResponse } from 'axios';
import { Group } from '../../libs/types';
import store from '../../store'
import { setContacts, setEditGroup, setGroups, setPersons, setShowEditGroup } from '../../store/actions/contacts';
import { axiosCreateOrEditGroup, getContacts, getGroups, getPersons } from '../ApiServices/ContactsApiService';

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

const getPersonsData = async () => {
  getPersons.then((response: AxiosResponse) => dispatch(setPersons(response.data)))
}


// ? GROUPS
const toggleModalEditGroup = () => {
  const {showEditGroup} = store.getState();
  dispatch(setShowEditGroup(!showEditGroup))
}

const getGroupsData = async () => {
  getGroups.then((response: AxiosResponse) => dispatch(setGroups(response.data)))
}

const createOrEditGroup = async (params:Group) => {
  axiosCreateOrEditGroup(params).then((response: AxiosResponse) => {
    addNewGroup(response.data, !!params.id);
    choseEditGroup(null);
    toggleModalEditGroup();
  })
}

const addNewGroup = (group: Group, edit: boolean) => {
  const {groups} = store.getState();
  if (!edit) {
    dispatch(setGroups(groups.concat([group])))
  } else {
    const groupIndex = groups.findIndex((gr: Group) => gr.id === group.id)
    if (groupIndex >= 0) {
      const newGroups = [...groups];
      newGroups.splice(groupIndex, 1, group)
      dispatch(setGroups(newGroups))
    }
  }
}

const choseEditGroup = (group: Group | null) => {
  dispatch(setEditGroup(group))
}



export {
  checkContacts, 
  createOrEditGroup, 
  choseEditGroup,
  toggleModalEditGroup
}