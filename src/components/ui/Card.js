import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 300px;
  border-radius: 5px;
  padding: 16px;
  margin: 16px;
`;

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
