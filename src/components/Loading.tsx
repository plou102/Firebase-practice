import React from "react";
import styled from "styled-components";

export default function Loading() {
  return (
    <Wrapper>
      <span />
      <span />
      <span />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #00acee;
    border-radius: 50%;
    animation: loading 1s linear infinite;

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
      margin: 0px 10px;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes loading {
      0%,
      100% {
        opacity: 0;
        transform: scale(0.5);
      }
      50% {
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }
`;
