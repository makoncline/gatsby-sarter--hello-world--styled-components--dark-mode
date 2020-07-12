import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

export default function Home() {
  return (
    <Layout>
      <Style>
        <div className="container">
          <h1 className="text--high">Hello world!</h1>
          <p className="text--mid">Hello world!</p>
          <p className="text--low">Hello world!</p>
        </div>
      </Style>
    </Layout>
  );
}

const Style = styled.div``;
