import React from "react";
import styled from "styled-components";

export default function ThemeToggle({
  mode,
  toggle,
}: {
  mode: string;
  toggle: () => void;
}) {
  return (
    <Wrapper onClick={toggle}>
      {mode === "light" ? <LightBtn /> : <DarkBtn />}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 50px;
  background-color: black;
  padding: 0;
`;

const LightBtn = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: white;
`;

const DarkBtn = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  float: right;
  background-color: white;
`;
