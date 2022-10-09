import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29524508-8de40043aa8773c648ea40631';

const OPTIONS = 'image_type=photo&orientation=horizontal';
const PER_PAGE = '12';

export const fetchImage = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&${OPTIONS}&per_page=${PER_PAGE}`
  );

  return response.data;
};
