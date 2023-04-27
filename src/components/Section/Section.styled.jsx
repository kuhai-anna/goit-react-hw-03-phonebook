import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 24px 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  width: ${props => props.theme.spacing(80)};
`;

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing(5)};

  font-size: 30px;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing(4)};

  font-size: 24px;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;
