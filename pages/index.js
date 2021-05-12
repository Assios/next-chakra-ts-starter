import Head from "next/head";
import styled from "styled-components";

const StyledApp = styled.div`
  color: blue;
`;

export default function Home() {
  return <StyledApp>Hi</StyledApp>;
}
