import styled from 'styled-components'

export const Container = styled.span`
  padding: 8px 16px;
  background-color: ${({ theme, color }) => color == 'bg-2' ? theme.COLORS.BACKGROUND_700 : theme.COLORS.BACKGROUND_400};

  font-size: 12px;
  border-radius: 8px;
  margin-right: 8px;
`;