import React from 'react';
import {IPokemon} from '../../dto';
import {Container, Image, Title} from './styles';

interface IPokemonCardProps {
  pokemon: IPokemon;
}

function PokemonCard({pokemon}: IPokemonCardProps) {
  return (
    <Container>
      <Image testID="pokemon-avatar" source={{uri: pokemon.url}} />

      <Title>{pokemon.name}</Title>
    </Container>
  );
}

export default PokemonCard;
