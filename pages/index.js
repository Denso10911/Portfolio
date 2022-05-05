import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Title>
        Hi, I'm <TitleFocus>Denys</TitleFocus> <br />
        I'm a front-end developer
      </Title>
      <Link href='/projects'>
        <Btn>View my works</Btn>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;
  transition: all 1s ease;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 500;
`;

const TitleFocus = styled.span`
  font-weight: 700;
`;

const Btn = styled.a`
  display: block;
  width: 200px;
  height: 50px;
  border: 2px solid rgb(60, 1, 107);
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  color: rgb(60, 1, 107);
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    color: white;
    background-color: rgb(60, 1, 107);
  }
`;
