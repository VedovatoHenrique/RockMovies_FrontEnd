import styled from "styled-components"

import { Link } from 'react-router-dom'


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > header {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    grid-area: header;
  }

  section{
    div { display: flex;
    flex-direction: rows;
    justify-content: space-between;
    margin-top: 50px;
    margin-right: 120px;
   }
   > div > h1{
    margin-left: 120px;
   }
     
  }
  
`

export const ButtonAdd = styled(Link)`
  font-size: 16px;
  padding: 13px 32px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    font-size: 20px;
  }
`


export const Main = styled(Link)`
  margin-top: 37px;
  overflow-y: auto;
  margin-left: 120px;
  margin-right: 120px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  svg{
  color: ${({ theme }) => theme.COLORS.ROSE};
  }
`