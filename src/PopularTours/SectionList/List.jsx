import * as React from 'react';
import styled from 'styled-components';

const InnerList = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
`;

export default ({ items, component }) => (
  <InnerList>{items.map(item => React.createElement(component, { ...item }))}</InnerList>
);
