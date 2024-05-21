import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';

export const Dashboard = () => {
  return (
    <Container>
      <BgColor>
        <br />
      </BgColor>
    <Header>
      <CommentIcon fontSize="large" />
      <NotificationsActiveIcon fontSize="large"  style={{ fontWeight: 75 }}/>
      <Search>
        <h4>Search Here</h4>
        <SearchIcon />
      </Search>
      <img src="/images/user.jpeg" />
    </Header>
      <Menu>
        <Buttons>
          <HomeIcon fontSize="large" />
          <BarChartIcon fontSize="large" />
          <ArticleIcon fontSize="large" />
          <AccountCircleIcon fontSize="large" />
          <SettingsIcon fontSize="large" />
        </Buttons>
        <Quit>
          <PowerSettingsNewIcon fontSize="large" />
        </Quit>
      </Menu>
      <Home>
        <h1>Performans Özetin</h1>
        <Puan>
          <h3>Hedef Puan</h3>
          <h1>490</h1>
          <h3>En Son Puan</h3>
          <h1>476.8</h1>
          <h3>En İyi Puan</h3>
          <h1>482.4</h1>
        </Puan>
      </Home>
      <Main> 
        
      </Main>
    </Container>
  );
};

const BgColor = styled.div`
  background-color: #2b2f42;
  position: relative;
  display: block;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`


const Container = styled.div`
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: end;

  img {
    height: 5%;
    width: 5%;
    border-radius: 55%;
  }

`

const Menu = styled.div`
  position: fixed;
  cursor: pointer;
  margin-right: 90%;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 1%;
  justify-content: space-between;
  column-count: auto;
  column-gap: 25px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;

const Quit = styled.div`
  margin-top: 300px;
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  border: solid black;
  background-color: black;
  padding: 0.3px 25px;
  
  h4 {
    font-weight: 95;
  }
`

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 15%;
  margin-top: 35px;
`

const Puan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10%;
    background-color: #353a50;
    padding: 5px 40px;
`

const Main = styled.div``




