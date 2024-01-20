import styled from "styled-components";

export const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 786px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
