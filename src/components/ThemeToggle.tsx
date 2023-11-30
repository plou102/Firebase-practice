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
      <ToggleBtn className={mode} />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.textColor};
  padding: 0;
`;

const ToggleBtn = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  border: ${(props) => props.theme.menuBorder};
  background-color: ${(props) => props.theme.bgColor};

  &.light {
    transform: translateX(0px);
    transition: transform 0.4s;
  }

  &.dark {
    transform: translateX(20px);
    transition: transform 0.4s;
  }
`;
