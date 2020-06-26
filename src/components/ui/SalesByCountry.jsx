import React from "react";
import styled from "styled-components";
import { ResponsiveGeoMap } from "@nivo/geo";

import Button from "../Button";
import Progress from "../Progress";
import Features from "../../data/features";

const StyledSalesByCountry = styled.div`
  background-color: white;
  width: 65%;
  border-radius: 5px;

  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1rem;

    .chart {
      width: 45%;
      /* height: 600px; */

      div {
        height: 300px !important;
        svg {
        }
      }

      .option {
        height: auto !important;

        button {
          margin: 0 0.3rem;
          padding: 0.3rem 0.6rem;
          background-color: #7764e4;
          color: white;
        }
      }
    }

    .details {
      width: 45%;

      .content-detail-container {
        margin: 2rem 0;
      }
      .content-detail {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        p {
          margin: 0;
          font-size: 0.8rem;
          font-weight: bold;
        }

        span {
          color: #5e5e75;
          font-size: 0.8rem;
          font-weight: bold;
        }
      }
    }
  }
`;

const SalesByCountry = () => {
  return (
    <StyledSalesByCountry>
      <div className="header">
        <p>Sales by Country</p>
        <Button>View Full Report</Button>
      </div>
      <hr />

      <div className="content">
        <div className="chart">
          <ResponsiveGeoMap
            features={Features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            projectionScale={114}
            projectionTranslation={[0.7, 0.7]}
            projectionRotation={[0, 0, 0]}
            fillColor="#eeeeee"
            borderWidth={0.5}
            borderColor={{ theme: "background" }}
            graticuleLineWidth={2}
            graticuleLineColor="#666666"
          />

          <div className="option">
            <Button>+</Button>
            <Button>-</Button>
          </div>
        </div>
        <div className="details">
          <div className="content-detail-container">
            <div className="content-detail">
              <p>Russia</p>
              <span>$203,000</span>
            </div>
            <Progress color="#7764e4" />
          </div>

          <div className="content-detail-container">
            <div className="content-detail">
              <p>Australia</p>
              <span>$203,000</span>
            </div>
            <Progress color="#32ce97" />
          </div>

          <div className="content-detail-container">
            <div className="content-detail">
              <p>China</p>
              <span>$203,000</span>
            </div>
            <Progress color="#feb969" />
          </div>

          <div className="content-detail-container">
            <div className="content-detail">
              <p>Algeria</p>
              <span>$203,000</span>
            </div>
            <Progress color="#f53c56" />
          </div>

          <div className="content-detail-container">
            <div className="content-detail">
              <p>United States</p>
              <span>$203,000</span>
            </div>
            <Progress color="#fb633f" />
          </div>
        </div>
      </div>
    </StyledSalesByCountry>
  );
};

export default SalesByCountry;
