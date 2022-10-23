import React from 'react';
import {render} from '@testing-library/react-native';
import PokemonCard from './index';

const pokemonTestData = {
  name: 'pokemon-test-name',
  url: 'pokemon-test-url',
};

describe('PokemonCard', () => {
  describe('Given PokemonCard is shown in the screen', () => {
    it("should show pokemon's name and avatar", () => {
      const {getAllByText, getByTestId} = render(
        <PokemonCard pokemon={pokemonTestData} />,
      );

      expect(getAllByText(pokemonTestData.name)).toHaveLength(1);
      expect(getByTestId('pokemon-avatar').props.source.uri).toEqual(
        pokemonTestData.url,
      );
    });
  });
});
