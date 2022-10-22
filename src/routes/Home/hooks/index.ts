import {useEffect, useState} from 'react';
import {IPokemon} from '../dto';
import {usePokemons} from './usePokemons';

export function useHomeCase() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const {getPokemons, getNextPagePokemons} = usePokemons({
    setPokemons: pokes => {
      setPokemons([...pokemons, ...pokes]);
    },
  });

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    pokemons,
    getNextPagePokemons,
  };
}
