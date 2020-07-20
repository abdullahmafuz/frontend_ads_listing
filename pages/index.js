import React from "react";
import styled from "styled-components";
import {Title, List} from "../styles/index";
import Navbar from '../components/navbar/navbar'

export default function index() {
  return (
      <div>
        <Navbar></Navbar>
  <Title>Mastering Next.js</Title>
  <List>list</List>
      </div>
  );
}
