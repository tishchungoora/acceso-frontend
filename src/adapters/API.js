const API_ENDPOINT = "http://localhost:3000/api/v1";
const CATEGORIES_URL = `${API_ENDPOINT}/categories`;
const CARDS_URL = `${API_ENDPOINT}/cards`;
const BEHAVIOURS_URL = `${API_ENDPOINT}/behaviours`;

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

export default {
  fetchCategories,
  fetchCards,
  fetchBehaviours
};
