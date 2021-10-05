// import React from 'react';
import { Typography, Button } from "antd";

import styled from "./index.module.less";
import { ReactComponent as Logo } from "@assets/images/logo.svg";

const { Title, Text } = Typography;

function App() {
  return (
    <div className={styled.home}>
      <Logo width={120} className="logo" />

      <Title level={2} className={styled.title}>
        React & TS & Ant Design Project{" "}
      </Title>
      <Text type="secondary">Ant Design (secondary)</Text>

      <br />
      <footer>
        <Button type="primary">提交按钮</Button>
      </footer>
    </div>
  );
}

export default App;
