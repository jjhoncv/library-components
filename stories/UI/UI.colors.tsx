import * as React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../src/ui'

const Box = styled.div`
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.h2`
  color: #333;
  font-weight: 300;
  margin: 0 0 15px 0;
`;

const BoxColor = styled.div`
  align-items: center;
  background: ${props => props['data-background']};
  color: ${props => props['data-color'] || '#FFF'};
  display: flex;
  height: 150px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 15px;
  width: 150px;
  box-sizing: border-box;
  border-radius: 50%;
`;

const BoxItem = styled.div`
  margin: 0 60px 30px 0;
  width: 150px;
`;

const BoxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 20px 0;
`;

const Text = styled.div`
  text-align: center;
  font-size: 15px;
  text-transform: uppercase;
  margin: ${props => props['data-margin']};
`;

const App = () => (
  <Box>
    <Title>Colores</Title>
    <BoxGroup>
      {Object.keys(COLORS).map((color, key) => (
        <BoxItem key={key}>
          <BoxColor data-background={COLORS[color]}/>
          <Text>{COLORS[color]}</Text>
          <Text data-margin="10px 0 0 0" style={{fontWeight: 'bold'}}>{color}</Text>
        </BoxItem>
      ))}
    </BoxGroup>
  </Box>
)

export default () => {
  return <App />
}

