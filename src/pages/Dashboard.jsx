import React from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../components/ui/Main";

const StyledDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 2000px;
  margin: 0 auto;
  section {
    width: 95%;
    background-color: #f1f3f9;
    position: relative;
    overflow-y: scroll;
  }
`;

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Sidebar />
      <section>
        <Header />
        <Main />
      </section>
    </StyledDashboard>
  );
};

export default Dashboard;
