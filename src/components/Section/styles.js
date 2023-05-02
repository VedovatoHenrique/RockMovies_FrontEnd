import styled from 'styled-components';

export const Container = styled.section`
  > h2 {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-bottom: 24px;
  }
`;