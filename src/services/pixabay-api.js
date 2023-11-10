import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?';

export const fetchImage = async (query, page) => {
  const images = await axios({
    params: {
      q: query,
      page,
      key: '19502637-d06b43ee367f131773b25cf8c',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    },
  });

  return images.data;
};