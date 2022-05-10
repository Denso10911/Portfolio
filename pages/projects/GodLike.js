import styled from "styled-components";

export default function GodLike() {
  return (
    <Wrapper>
      <TitleAbout>GodLike</TitleAbout>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  padding-top: 55px;
`;

const TitleAbout = styled.h1`
  font-size: 40px;
  margin-bottom: 50px;
`;
