import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 48px;
  height: 48px;

  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  border-radius: 50px;
`;

export default props => <Container>{props.children}</Container>;
