import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImg="/images/model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImg="/images/model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order online for touchless delivery"
        backgroundImg="/images/model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order online for touchless delivery"
        backgroundImg="/images/model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back gurantee"
        backgroundImg="/images/solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="/images/accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default Home;
