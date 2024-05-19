import { useSelector } from 'react-redux';
import GridContainer from '../../components/GridContainer/GridContainer';
import { Character } from '../../types/queryTypes';
import { RootState } from '../../store/store';

function Home() {
  const characters = useSelector<RootState>((state) => state.search.characters) as Character[]
  return (
    <GridContainer characters={characters}/>
  );
}

export default Home;