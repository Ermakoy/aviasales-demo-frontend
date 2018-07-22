import React from 'react';
import styled from 'styled-components';
import Header from '../styled/Header';
import Button from '../styled/Button';
import croppedLogo from '../assets/cropped-logo.svg';
import logo from '../assets/logo.svg';

const Logo = () => (
  <picture>
    <source srcSet={croppedLogo} media="(min-width: 320px) and (max-width: 767px)" />
    <source srcSet={logo} media="(min-width: 768px)" />
    <img alt="Логотип Aviasales" />
  </picture>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    padding-top: 215px;
    padding-bottom: 48px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    padding-top: 83px;
    padding-bottom: 32px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding-top: 47px;
    padding-bottom: 16px;
  }
`;

const Title = styled.h1`
  color: white;
  @media (min-width: 1440px) {
    font-size: 40px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 20px;
    line-height: normal;
  }
`;

const Text = styled.h2`
  color: white;
  margin-top: 8px;
  margin-bottom: 40px;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Input = styled.div`
  background-color: white;
  padding: 18px 16px;
`;

const MainPage = () => (
  <React.Fragment>
    <Header>
      <div className="container">
        <Logo />
        <div className="row center-xs">
          <div className="col-xs-12 col-md-10">
            <Content>
              <Title>Поиск дешевых авиабилетов</Title>
              <Text>Лучший способ купить авиабилеты дешево</Text>
              <div className="row center-xs">
                <div className="col-xs-12 col-md-10 col-lg">
                  <div className="row">
                    <div className="col-xs col-md-5 col-lg">
                      <Input />
                    </div>
                    <div className="col-xs col-md-5 col-lg">
                      <Input />
                    </div>
                    <div className="col-xs-12 col-md-5 col-lg">
                      <div className="row">
                        <div className="col-xs">
                          <Input />
                        </div>
                        <div className="col-xs">
                          <Input />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs col-md-5 col-lg">
                      <Input />
                    </div>
                  </div>
                </div>
              </div>
            </Content>
          </div>
        </div>
        <div className="row center-xs">
          <Button>Найти билеты</Button>
        </div>
      </div>
    </Header>
  </React.Fragment>
);

export default MainPage;
