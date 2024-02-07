/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

interface Type {
  color?: string;
  background?: string;
  width?: string;
}

export const Button = styled.button<Type>`
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  width: ${({ width }) => width};
  cursor: pointer;
`;
