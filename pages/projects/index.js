import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function Projects() {
  return (
    <Wrapper>
      <TitleAbout>My projects</TitleAbout>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
`;

const TitleAbout = styled.h1`
  font-size: 40px;
  margin-bottom: 50px;
`;
