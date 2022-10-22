import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2', // Here should be used process env
  responseType: 'json',
});
