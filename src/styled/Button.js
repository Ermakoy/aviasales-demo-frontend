import styled from 'styled-components';

export default styled.button`
  width: 308px;
  padding: 15px 0px 15px 0px;
  background: #ff9241;
  border: #ff9241 solid;
  border-radius: 4px;
  font-weight: 900;
  font-size: 28px;
  cursor: pointer;
  @media (min-width: 768px) {
    padding-left: 45px;
    padding-right: 24px;
  }
  @media (min-width: 320px) {
    padding-left: 52px;
    padding-right: 52px;
  }
`;
