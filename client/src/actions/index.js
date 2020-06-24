import axios from "axios";
import history from "../history";

const API_URL = "http://localhost:3000";

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

// start load event data
const loadDataSuccess = (params) => ({
  type: "LOAD_DATA_SUCCESS",
  params,
});

const loadDataFailure = () => ({
  type: "LOAD_DATA_FAILURE",
});

export const loadData = () => {
  return (dispatch) => {
    return request
      .get("/")
      .then(function (response) {
        dispatch(loadDataSuccess(response.data));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(loadDataFailure());
      });
  };
};

const postDataSuccess = (param) => ({
  type: "POST_DATA_SUCCESS",
  param,
});

const postDataFailure = (id) => ({
  type: "POST_DATA_FAILURE",
  id,
});

const postDataRedux = (id, title, location, date, members, note) => ({
  type: "POST_DATA",
  id,
  title,
  location,
  date,
  members,
  note,
});

export const postData = (title, location, date, members, note) => {
  let id = Date.now();
  return (dispatch) => {
    dispatch(postDataRedux(id, title, location, date, members, note));
    return request
      .post("/", { id, title, location, date, members, note })
      .then(function (response) {
        dispatch(postDataSuccess(response.data));
        history.push("/");
      })
      .catch(function (error) {
        console.error(error);
        dispatch(postDataFailure(id));
      });
  };
};

const deleteDataRedux = (id) => ({
  type: "DELETE_DATA",
  id,
});

const deleteDataSuccess = (events) => ({
  type: "DELETE_DATA_SUCCESS",
  events,
});

const deleteDataFailure = () => ({
  type: "DELETE_DATA_FAILURE",
});

export const deleteData = (id) => {
  return (dispatch) => {
    dispatch(deleteDataRedux(id));
    return request
      .delete(`/${id}`)
      .then(function (response) {
        dispatch(deleteDataSuccess(response.data));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(deleteDataFailure());
      });
  };
};
