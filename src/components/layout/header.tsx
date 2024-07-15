"use client";

import { Layout, Space, Switch, theme } from "antd";
import CurrentUser from "./current-user";
import { ColorModeContext } from "@contexts/color-mode";
import { useContext } from "react";

const { useToken } = theme;

export function Header() {
  const { token } = useToken();
  const { mode, setMode } = useContext(ColorModeContext);

  const headerStyle: React.CSSProperties = {
    background: token.colorBgElevated,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 24px",
    position: "sticky",
    top: 0,
    zIndex: 999
  }
  
  return (
    <Layout.Header style={headerStyle}>
      <Space align="center" size="middle">
        <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        />
        <CurrentUser/>
      </Space>
    </Layout.Header>
  )
}