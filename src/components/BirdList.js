import { useDispatch, useSelector } from 'react-redux';
import { incrementBird } from '../actions';

const BirdList = () => {
  // const birds = useSelector(state => state.birds);
  const dispatch = useDispatch();

  const birds = [...useSelector(state => state.birds)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });

  return (
    <ul>
      {birds.map(bird => (
        <li key={bird.name}>
          <h3>{bird.name}</h3>
          <div>
            Views: {bird.views}
            <button onClick={() => dispatch(incrementBird(bird.name))}>
              <span role="img" aria-label="add">➕</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default BirdList;
