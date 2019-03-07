import axios from 'axios';

const testerURL = 'https://test-api.techsee.me/api/ex/'

function handleError (error) {
  console.warn(error);
  return null;
}

export default function getResults(tester){
  return axios.get(testerURL + tester.toLowerCase())
      .then(({data}) => data)
      .catch(handleError)
}
