import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: white;
  color: black;
  font-size: 1em;
  margin: 10px 0;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  cursor:pointer;
`;
export default function Button({ title }) {
  return <Btn>{title}</Btn>;
}
