import axios from "axios";

const API_KEY = '35440752-42ff374148e6092430c9a2e75';
const BASE_URL = 'https://pixabay.com/api';

export function fetchImage(inputValue, pageNumber){
  if(!inputValue){
    return
  }

  return axios(`${BASE_URL}/?key=${API_KEY}&q=${inputValue}&page=${pageNumber}&image_type=photo&orientation=horizontal&per_page=12`)

};
