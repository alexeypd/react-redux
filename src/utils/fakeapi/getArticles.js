import articles from '../../data/api.json';


export const getArticles = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(articles);
    }, 1000);
  });
