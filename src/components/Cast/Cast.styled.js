import styled from 'styled-components';

export const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
`;
export const CastList = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const CastItem = styled.li`
  flex-basis: calc((100% - 60px) / 5);
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 6px;
`;
export const ActorName = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
`;
export const CharacterDescription = styled.p`
  font-size: 20px;
`;
