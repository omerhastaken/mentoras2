import React from "react";
import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";

export const Plans = () => {
  return (
    <Container>
      <Title>
        <h1>PLANLARIMIZ</h1>
      </Title>
      <Plan>
        <Lgs>
          <h2>LGS/YKS Paket</h2>
          <br />
          <br />
          <hr />
          <h1>$4.99</h1>
          <h3>Aylık</h3>
          <Tick>
            <DoneIcon />
            <DoneIcon />
            <DoneIcon />
            <DoneIcon />
          </Tick>
          <Buy>
            <h2>Şimdi Satın Al</h2>
          </Buy>
        </Lgs>
        <Pro>
          <h4>EN ÇOK TERCİH EDİLEN</h4>
          <h2>PRO Paket</h2>
          <br />
          <br />
          <hr />
          <h1>$9.99</h1>
          <h3>Aylık</h3>
          <Tick>
            <DoneIcon />
            <DoneIcon />
            <DoneIcon />
            <DoneIcon />
          </Tick>
          <Buy>
            <h2>Şimdi Satın Al</h2>
          </Buy>
        </Pro>
        <Enterprise>
          <h2>Kurumsal Paket</h2>
          <br />
          <br />
          <hr />
          <h1>$9.99</h1>
          <h3>Aylık</h3>
          <Tick>
            <DoneIcon />
            <DoneIcon />
            <DoneIcon />
            <DoneIcon />
          </Tick>
          <Buy>
            <h2>Şimdi Satın Al</h2>
          </Buy>
        </Enterprise>
      </Plan>
    </Container>
  );
};

const Container = styled.div`
  background-image: linear-gradient(#13072e, #3f2182);
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
  hr {
    font-weight: 75;
  }
`;

const Title = styled.div`
  margin-top: 5%;
`;

const Plan = styled.div`
  margin-top: 75px;
  display: flex;
  margin-left: 20%;
  justify-content: space-between;
  align-items: center;
  margin-right: 20%;
`;

const Lgs = styled.div`
  border: solid #2a235a;
  background-color: #2a235a;
  border-radius: 45px;
  padding: 0px 30px;
  h3 {
    font-weight: 85;
  }
`;

const Tick = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pro = styled.div`
  border: solid #2a235a;
  background-color: #2a235a;
  border-radius: 45px;
  padding: 0px 75px;
  h3 {
    font-weight: 85;
  }
`;

const Enterprise = styled.div`
  border: solid #2a235a;
  background-color: #2a235a;
  border-radius: 45px;
  padding: 0px 50px;
  h3 {
    font-weight: 85;
  }
`;

const Buy = styled.div`
  margin-top: 35%;
  border-radius: 45px;
  border: solid #7824f6;
  background-color: #7824f6;
  padding: 5px;
`;
