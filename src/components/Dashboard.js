import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export const Dashboard = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
  background-color: #2b2f42;
  position: relative;
  display: block;
  color: white;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

const Menu = styled.div`
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

const Quit = styled.div``;
