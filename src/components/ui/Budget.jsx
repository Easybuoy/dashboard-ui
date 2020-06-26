import React from "react";
import styled from "styled-components";
import { ResponsivePieCanvas } from "@nivo/pie";

import Button from "../Button";
const StyledBudget = styled.div`
  background-color: white;
  width: 45%;
  border-radius: 5px;

  .top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-top: 2rem;
    align-items: center;

    .left {
      margin-left: 1rem;
      span {
        font-size: 0.6rem;
        color: #9dabba;
        font-weight: bold;
      }

      p {
        margin: 0.3rem 0;
        color: #344562;
      }
    }

    .right {
      margin-right: 1rem;
    }
  }

  div {
    canvas {
      width: 100%;
      height: 450px !important;
    }
  }
`;

const data = [
  {
    id: "Lagos",
    label: "Lagos",
    value: 122.9,
    color: "#f53c56",
  },
  {
    id: "Kaduna",
    label: "Kaduna",
    value: 96.785,
    color: "red",
  },
  {
    id: "PH",
    label: "PH",
    value: 35.785,
    color: "hsl(96, 70%, 50%)",
  },
  {
    id: "Ibadan",
    label: "Ibadan",
    value: 22.123,
    color: "hsl(320, 70%, 50%)",
  },
];

const Budget = () => {
  return (
    <StyledBudget>
      <div className="top">
        <div className="left">
          <span>OVERVIEW</span>
          <p>Budget</p>
        </div>
        <div className="right">
          <Button>Export Report</Button>
        </div>
      </div>
      <ResponsivePieCanvas
        data={data}
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        pixelRatio={1}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "paired" }}
        borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: "color" }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={false}
        legends={[
          {
            anchor: "right",
            direction: "column",
            translateX: 140,
            itemWidth: 60,
            itemHeight: 14,
            itemsSpacing: 2,
            symbolSize: 14,
            symbolShape: "circle",
          },
        ]}
      />
    </StyledBudget>
  );
};

export default Budget;
