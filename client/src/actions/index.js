/**
 * Action creators index, contains all action creators
 **/

//Start Imports
import blogs from "../apis/blogs";
import history from "../history";
import {
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  EDIT_POST
} from "./types";

/**
 * createBlog action takes in form values and starts an asyncronous function
 * which posts a new blog to our rails backend and dispatches the data to our
 * reducers
 **/
export const createBlog = formValues => async (dispatch, getState) => {
  const response = await blogs.post("/blogs", { ...formValues });

  dispatch({ type: CREATE_POST, payload: response.data });
  history.push("/");
};

/**
 * fetchBlogs starts an asyncronous function that fetches all blogs from our
 * rails backend and dispatches them to our reducers
 **/
export const fetchBlogs = () => async dispatch => {
  const response = await blogs.get("/blogs");

  dispatch({ type: FETCH_POSTS, payload: response.data });
};

/**
 * fetchBlog starts an asyncronous function that fetches one blog from our
 * rails backend and dispatches it to our reducers
 **/
export const fetchBlog = id => async dispatch => {
  const response = await blogs.get(`/blogs/${id}`);

  dispatch({ type: FETCH_POST, payload: response.data });
};

/**
 * editBlog starts an asyncronous function that patches a blog in our rails
 * backend with new data submitted through our form
 **/
export const editBlog = (id, formValues) => async dispatch => {
  const response = await blogs.patch(`/blogs/${id}`, formValues);

  dispatch({ type: EDIT_POST, payload: response.data });
  history.push("/");
};

/**
 * deleteBlog takes in an id from our state and starts an asyncronous function
 * that deletes a blog from our rails backend
 **/
export const deleteBlog = id => async dispatch => {
  await blogs.delete(`/blogs/${id}`);

  dispatch({ type: DELETE_POST, payload: id });
  history.push("/");
};
