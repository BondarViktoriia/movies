import { getCast } from 'components/services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(actors => setActors(actors));
  }, [movieId]);

  if (!actors) {
    return;
  }

  return (
    <>
      <div>
        <ul>
          {actors.map(({ id, name, profilePath, character }) => (
              <li key={id}>
                  <img src={`https://image.tmdb.org/t/p/w500/${profilePath}`} alt={name} width='150' />
                  <p>{name} </p>
                  <p>Character:{character }</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cast;
