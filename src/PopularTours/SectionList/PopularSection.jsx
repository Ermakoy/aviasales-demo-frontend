import * as React from 'react';
import styled from 'styled-components';
import Picture from './Picture';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;

  color: #00ace2;
`;

export default ({ picture, text }) => (
  <Wrapper>
    <Picture>{picture}</Picture>
    <Text>{text}</Text>
  </Wrapper>
);
