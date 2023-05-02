import styled from "styled-components";

import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  height: 100%;
  width: 100%;
  

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  justify-content: space-between;

  padding: 20px 123px;
  gap: 64px;


  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  >h2{
    margin-top: 18px;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

`;
export const Profile = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  > div {
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
export const Avatar = styled.div`
  > img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const Logout = styled.div`

  a{
  background: none;
  border: none;
  width: fit-content;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-size: 14px;
  }
`


