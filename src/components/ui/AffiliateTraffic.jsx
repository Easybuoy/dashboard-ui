import React from "react";
import styled from "styled-components";
import { ResponsiveBar } from "@nivo/bar";

const StyledAffiliateTraffic = styled.div`
  background-color: white;
  width: 45%;
  border-radius: 5px;
  height: 500px;
  padding-bottom: 2rem;
  padding-top: 2rem;

  div {
    height: 400px;
    svg {
      width: 100%;
    }
  }

  .left {
    height: auto;
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
`;
const data = [
  {
    country: "Jun",
    "hot dog": 19,
    "hot dogColor": "hsl(91, 100%, 50%)",
    burger: 36,
    burgerColor: "hsl(166, 70%, 50%)",
    sandwich: 11,
    sandwichColor: "hsl(91, 100%, 50%)",
  },
  {
    country: "Jul",
    "hot dog": 27,
    "hot dogColor": "hsl(91, 100%, 50%)",
    burger: 22,
    burgerColor: "hsl(166, 70%, 50%)",
    sandwich: 39,
    sandwichColor: "hsl(91, 100%, 50%)",
  },
  {
    country: "Aug",
    "hot dog": 26,
    "hot dogColor": "hsl(91, 100%, 50%)",
    burger: 18,
    burgerColor: "hsl(166, 70%, 50%)",
    sandwich: 7,
    sandwichColor: "hsl(91, 100%, 50%)",
  },

  {
    country: "Sep",
    "hot dog": 22,
    "hot dogColor": "hsl(91, 100%, 50%)",
    burger: 11,
    burgerColor: "hsl(166, 70%, 50%)",
    sandwich: 7,
    sandwichColor: "hsl(91, 100%, 50%)",
  },
  {
    country: "Oct",
    "hot dog": 9,
    "hot dogColor": "hsl(91, 100%, 50%)",
    burger: 22,
    burgerColor: "hsl(166, 70%, 50%)",
    sandwich: 45,
    sandwichColor: "hsl(91, 100%, 50%)",
  },
  {
    country: "Nov",
    "hot dog": 26,
    "hot dogColor": "hsl(91, 100%, 50%)",
    burger: 34,
    burgerColor: "hsl(166, 70%, 50%)",
    sandwich: 29,
    sandwichColor: "hsl(91, 100%, 50%)",
  },
];
const AffiliateTraffic = () => {
  return (
    <StyledAffiliateTraffic>
      <div className="left">
        <span>PARTNERS</span>
        <p>Affiliate Traffic</p>
      </div>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.15}
        maxValue={60}
        innerPadding={3}
        groupMode="grouped"
        colors={{ scheme: "category10" }}
        isInteractive={false}
        enableLabel={false}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{ theme: "labels.text.fill" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          // legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </StyledAffiliateTraffic>
  );
};

export default AffiliateTraffic;
