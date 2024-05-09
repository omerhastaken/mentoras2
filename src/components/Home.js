import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { Plans } from "./Plans";

export const Home = () => {
  return (
    <Container>
      <Header>
        <h1>Mentoras</h1>
        <Menu>
          <h2>İçerik</h2>
          <Link to="/plans">
            <h2>Paketler</h2>
          </Link>
          <h2>Hakkımızda</h2>
        </Menu>
        <Link to="/dashboard">
          <Login>
            <h2>Giriş</h2>
            <ArrowForwardIcon />
          </Login>
        </Link>
      </Header>
      <Hashtag>
        <h4>#mentorasai</h4>
        <br />
        <br />
        <br />
        <Description>
          <h1>MENTORAS.AI</h1>
          <h2>Açıklama</h2>
        </Description>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/plans">
          <Laram>
            <h2>Paketlerimizi incele</h2>
            <Icon>
              <ArrowForwardIcon style={{ color: "white" }} />
            </Icon>
          </Laram>
        </Link>
      </Hashtag>
    </Container>
  );
};

const Container = styled.div`
  background-color: #13072e;
  color: #ffff;
  position: relative;
  display: block;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  text-decoration: none !important;
`;

const Header = styled.div`
  background-color: #13072e;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-left: 50px;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  h2 {
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const Login = styled.div`
  background-color: #e9ecef;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding: 1px 30px;
  border: solid #f9f9f9;
  border-radius: 50px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    border-color: transparent;
  }
`;

const Hashtag = styled.div`
  background-image: linear-gradient(#13072e, #3f2182);
  margin: 45px;
  margin-left: 25px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  h4 {
    margin-top: 50px;
    border: solid #f9f9f9;
    border-radius: 25px;
    align-items: center;
    background-color: #b3aaff;
    padding: 10px 15px;
    margin-left: 25px;
    margin-right: 75%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  column-gap: 10vh;
  margin-left: 45px;
`;

const Laram = styled.div`
  background-color: white;
  margin-right: 75%;
  color: black;
  display: flex;
  border: solid #f9f9f9;
  border-radius: 45px;
  padding: 0px 30px;
  margin-left: 25px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;

  &:hover {
    background-color: black;
    color: white;
    border-color: transparent;
  }
`;

const Icon = styled.div`
  border-radius: 100%;
  background-color: black;
  padding: 10px 15px;
`;
