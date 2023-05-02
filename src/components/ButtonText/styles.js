import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.ROSE};
  font-size: 16px;

  display: flex;
  align-items: center;
  gap: 8px;
`