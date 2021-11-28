import { addBird } from '../actions';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

const AddBird = () => {
  const [bird, setBird] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (bird.trim() === '') {
      return;
    }
    dispatch(addBird(bird));
    setBird('');
  }, [bird, dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Add Bird</p>
        <input type="text"
          onChange={e => setBird(e.target.value)}
          value={bird} />
      </label>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default AddBird;