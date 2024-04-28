import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  max-width: 130rem;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem 0;
  @media screen and (max-width: 768px) {
    padding: 3.2rem 1.6rem 0;
  }
`;

export default Container;
