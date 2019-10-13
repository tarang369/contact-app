import { GET_CONTACTS , ADD_CONTACT} from "./types";
import axios from "axios";

export const getContacts = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const addContacts = contact => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users",contact);
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};
