import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useHomeCase} from './hooks';
import PokemonCard from './components/PokemonCard';
import {Container} from './styles';
import {FlatList} from 'react-native';

function Home() {
  const {pokemons, getNextPagePokemons} = useHomeCase();

  return (
    <SafeAreaView>
      <Container>
        <FlatList
          keyExtractor={item => item.name}
          data={pokemons}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          onEndReached={getNextPagePokemons}
        />
      </Container>
    </SafeAreaView>
  );
}

export default Home;
