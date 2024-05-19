import { useSelector } from 'react-redux';
import GridContainer from '../../components/GridContainer/GridContainer';
import { AppDispatch, RootState } from '../../store/store';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { filterParams } from '../../api/characterSuggestion';
import { SearchState } from '../../store/reducers/searchReducers';
import { returnInitialQuery } from '../../api/api';
import { useDispatch } from 'react-redux';
import { setCharacters, setSearchParamsAction } from '../../store/actions/searchActions';

function Home() {
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()
  const search = useSelector<RootState>((state) => state.search) as SearchState

  useEffect(() => {
    const updatedParams = { ...filterParams(search.queryParams), ...returnInitialQuery(location.search) }
    dispatch(setSearchParamsAction(filterParams(updatedParams)))
    dispatch(setCharacters(filterParams(updatedParams)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <GridContainer characters={search.characters}/>
  );
}

export default Home;