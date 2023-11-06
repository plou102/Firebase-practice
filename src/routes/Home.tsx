import React from "react";
import PostTweetForm from "../components/PostTweetForm";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <PostTweetForm />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
