import axios from 'axios';

const apiKey = 'edf76b7a835048afb18d643bc0a466d1';

axios
  .interceptors
  .request
  .use(request => {
    console.log('Starting Request', request)
    return request
  })

axios
  .interceptors
  .response
  .use(response => {
    console.log('Response:', response)
    return response
  })

export function getNews(subject) {
  return axios
    .get(`http://newsapi.org/v2/everything?q=${subject}&from=2021-04-18&sortBy=publishedAt&apiKey=${apiKey}`)
    .then((result) => result.data.sources);
}

export function getListNews(source) {
  return axios
    .get(`https://newsapi.org/v2/articles?apiKey=${apiKey}&source=${source}`)
    .then((result) => result.data.articles);
}