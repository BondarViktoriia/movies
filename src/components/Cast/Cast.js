import { getCast } from 'components/services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastContainer,
  CastList,
  CastItem,
  ActorName,
  CharacterDescription,
  NoActors,
} from './Cast.styled';
import imageNotFound from '../../images/notfound.png';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    getCast(movieId)
      .then(actors => {
        setActors(actors);
        setError(null);
      })
      .catch(error => {
        setError(error);
        setActors([]);
      });
  }, [movieId, error]);

  if (!actors) {
    return;
  }

  return (
    <>
      <CastContainer>
        <CastList>
          {actors.map(({ id, name, profilePath, character }) => (
            <CastItem key={id}>
              <img
                src={
                  profilePath !== null
                    ? `https://image.tmdb.org/t/p/w500/${profilePath}`
                    : imageNotFound
                }
                alt={name}
                width="250"
                height="375"
              />
              <ActorName>{name} </ActorName>
              <CharacterDescription>Character:{character}</CharacterDescription>
            </CastItem>
          ))}
        </CastList>
      </CastContainer>
      {actors.length === 0 && !error && (
        <NoActors>There is no information here yet</NoActors>
      )}
    </>
  );
};

export default Cast;
