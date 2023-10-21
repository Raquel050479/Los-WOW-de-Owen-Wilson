import uuid from 'react-uuid';

const getDataFromApi = () => {
  return fetch(
    `https://owen-wilson-wow-api.onrender.com/wows/random?results=50`
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((scene) => {
        return {
          id: uuid(),
          movie: scene.movie,
          year: scene.year,
          full_line: scene.full_line,
          poster: scene.poster,
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;