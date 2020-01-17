const API_ENDPOINT = "https://acesso-backend.herokuapp.com/api/v1";
const CATEGORIES_URL = `${API_ENDPOINT}/categories`;
const CARDS_URL = `${API_ENDPOINT}/cards`;
const BEHAVIOURS_URL = `${API_ENDPOINT}/behaviours`;
const USERS_URL = `${API_ENDPOINT}/users`;
const BOARDS_URL = `${API_ENDPOINT}/boards`;

const jsonify = response => response.json();

const fetchCategories = () => {
  return fetch(CATEGORIES_URL).then(jsonify);
};

const fetchCards = () => {
  return fetch(CARDS_URL).then(jsonify);
};

const fetchBehaviours = () => {
  return fetch(BEHAVIOURS_URL).then(jsonify);
};

const fetchUsers = () => {
  return fetch(USERS_URL).then(jsonify);
};

const fetchBoards = () => {
  return fetch(BOARDS_URL).then(jsonify);
}

const postBoard = boardData =>
  fetch(BOARDS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(boardData)
  }).then(jsonify);

export default {
  fetchCategories,
  fetchCards,
  fetchBehaviours,
  fetchUsers,
  fetchBoards,
  postBoard
};
