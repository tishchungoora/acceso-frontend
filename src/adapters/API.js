const API_ENDPOINT = "https://acceso-backend.herokuapp.com/api/v1";
const CATEGORIES_URL = `${API_ENDPOINT}/categories`;
const CARDS_URL = `${API_ENDPOINT}/cards`;
const BEHAVIOURS_URL = `${API_ENDPOINT}/behaviours`;
const LOGIN_URL = `${API_ENDPOINT}/login`;
const VALIDATE_URL = `${API_ENDPOINT}/validate_user`;
const BOARDS_URL = `${API_ENDPOINT}/boards`;

const jsonify = response => response.json();

const login = loginData =>
  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: loginData })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });

const validateUser = () => {
  if (localStorage.token) {
    return fetch(VALIDATE_URL, {
      headers: {
        Authorisation: localStorage.token
      }
    })
      .then(jsonify)
      .then(data => {
        localStorage.setItem("token", data.token);
        return data.user;
      });
  } else {
    return Promise.reject({ error: "no token" });
  }
};

const clearToken = () => {
  localStorage.removeItem("token");
};

const fetchCategories = () => {
  return fetch(CATEGORIES_URL).then(jsonify);
};

const fetchCards = () => {
  return fetch(CARDS_URL).then(jsonify);
};

const fetchBehaviours = () => {
  return fetch(BEHAVIOURS_URL).then(jsonify);
};

const fetchBoards = () => {
  return fetch(BOARDS_URL).then(jsonify);
};

const postBoard = boardData =>
  fetch(BOARDS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify(boardData)
  }).then(jsonify);

const deleteBoard = id =>
  fetch(BOARDS_URL + `/${id}`, {
    method: "DELETE"
  }).then(jsonify);

export default {
  fetchCategories,
  fetchCards,
  fetchBehaviours,
  fetchBoards,
  postBoard,
  deleteBoard,
  login,
  validateUser,
  clearToken
};
