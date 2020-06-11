
import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  padding: 5px;
  box-sizing: border-box;
  border-radius: 3px;
  ${props => props.block ? `width: 100%` : ``};
`;

const PasswordInput = ({value, block,  onChange, name}) => {
  return (
    <StyledInput block={block} type="password" value={value} onChange={onChange} name={name} />
  )
}

export default PasswordInput;