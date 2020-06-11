import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  border-radius: 4px;
  border: none;
  background-color: #010101;
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 5px 10px;

  ${props => props.block ? `width: 100%` : ``};
`;

const Button = ({onClick, block, children}) => {
  return (
    <StyledButton block={block} type="button" onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button;