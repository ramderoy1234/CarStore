import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title="World Fastest Car"
        description="Order now get Fastest Delivary"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Rang Rover"
        description="Order now get Fastest Delivary"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Tesla Car"
        description="Order now get Fastest Delivary"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Lowest cost Solar Panels in India"
        description="Refund Money 100%"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />

      <Section
        title="Solar For New Roofs"
        description="Solar Roofs"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />

      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
        
      />
      
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
