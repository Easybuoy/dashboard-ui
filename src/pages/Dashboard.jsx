import React from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import Header from '../components/Header'
import Main from "../components/ui/Main";

const StyledDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;

  section {
    width: 94%;
    background-color: #f1f3f9;
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
