import {api} from '../../../services/api';
import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

import {usePokemons} from './usePokemons';
import {IPokemon} from '../dto';

jest.mock('../../../services/api');

const sut = () =>
  renderHook(() =>
    usePokemons({
      setPokemons: () => {},
    }),
  ).result.current;

const mockedApi = api as jest.MockedFunction<typeof api>;

describe('usePokemons', () => {
  const results: IPokemon[] = [
    {name: 'pokemon-mock-name', url: 'pokemon-mock-url'},
    {name: 'pokemon-mock-name2', url: 'pokemon-mock-url2'},
  ];
  const testRoute = 'test-route-name';

  beforeAll(() => {
    mockedApi.mockResolvedValue({
      data: results,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Given getPokemons is called', () => {
    it('should call Api.get with given route', async () => {
      await waitFor(() => {
        const {getPokemons} = sut();
        getPokemons(testRoute);

        expect(mockedApi.get).toHaveBeenCalledWith(testRoute);
      });
    });
  });
});
