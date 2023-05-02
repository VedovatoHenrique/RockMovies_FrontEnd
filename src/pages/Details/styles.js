import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;

    padding: 0 123px;
    height: 500px;
    margin-top: 40px;
  }
`

export const Content = styled.div`
  a {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;

    display: flex;
    align-items: center;
    gap: 8px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  margin-left: 120px;
  margin-top: 40px;
  overflow-y: auto;
  margin-right: 120px;

  svg {
    color: ${({ theme }) => theme.COLORS.ROSE};
    margin-top: 3px;
  }
  section{
    display: flex;
    gap: 8px;
  }
`

export const MovieInfo = styled.div``

export const TitleRating = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;

  margin-block: 24px;
  > h1 {
    font-size: 36px;
  }
`
export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    object-fit: cover;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;
export const Tags = styled.div`
  margin-block: 40px;
`;
export const Description = styled.div`
  text-align: justify;
  line-height: 21px;
  width: 100%;
  font-size: 16px;
  
`;

