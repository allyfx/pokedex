import axios from 'axios';
import {useState} from 'react';
import {api} from '../../../services/api';
import {IPokemon} from '../dto';

export interface IUsePokemonsProps {
  setPokemons: (value: IPokemon[]) => void;
}

export function usePokemons({setPokemons}: IUsePokemonsProps) {
  const [pagination, setPagination] = useState({
    next: '/pokemon',
    previous: null,
  });

  async function getPokemons(route = pagination.next) {
    try {
      const response = await api.get(route);
      const {results, next, previous} = response.data;

      const formattedPokemons: IPokemon[] = [];

      const requests = results.map((poke: any) => axios.get(poke.url));
      await axios.all(requests).then(
        axios.spread((...spread: any[]) => {
          spread.forEach(res => {
            formattedPokemons.push({
              name: res.data.name,
              url: res.data.sprites.front_default,
            });
          });
        }),
      );

      setPokemons(formattedPokemons);
      setPagination({
        next,
        previous,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getNextPagePokemons() {
    await getPokemons(pagination.next);
  }

  async function getPreviousPagePokemons() {
    await getPokemons(pagination.next);
  }

  return {
    getPokemons,
    getNextPagePokemons,
    getPreviousPagePokemons,
  };
}
