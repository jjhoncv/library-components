import * as React from 'react';
import styled from 'styled-components';
import { FONTS } from '../../src/ui';

interface Props {
    font?: string;
}

const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Wrapper = styled.div`
    width: 400px;
    text-align: left;
    font-family: ${(props: Props) => props.font};
    margin: 20px;
    p {
        line-height: 30px;
    }
`;

const Code = styled.code`
  display: inline-block;
  margin-top: 20px;
  font-size: 15px;
  text-transform: uppercase;
  border: 1px solid black;
  padding: 4px;
  border-radius: 4px;
`;

const Title = styled.h2`
    margin: 20px 0;
    font-family: ${(props: Props) => props.font};
    text-transform: capitalize;
`;

const Font = ({ name, variable }) => (
    <Wrapper font={name}>
        <Title font={name}>{name}</Title>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <Code>{variable}</Code>
    </Wrapper>
)

const App = () => (
    <Box>
        {Object.keys(FONTS).map((font, key) => (
          <Font key={key} name={FONTS[font]} variable={font}/>
        ))}
    </Box>
)
export default ()=> {
    return <App />
}
