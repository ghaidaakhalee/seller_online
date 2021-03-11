import API_URL from "./apiConfig";
// const API_URL=require('./apiConfig')
import axios from "axios";

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Articles
const getAllItem = () => {
  return axios.get(`${API_URL}/allItem`);
};

// Delete Article by ID
const deleteArticleByID = (id) => {
  return axios.delete(`${API_URL}/articles/${id}`);
};

export { getAllItem, deleteArticleByID };
