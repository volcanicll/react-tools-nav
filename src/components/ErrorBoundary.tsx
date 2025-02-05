import React from "react";
import { Typography, Button, Space } from "antd";

const { Title, Text } = Typography;

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", padding: "40px 24px" }}>
          <Space direction="vertical" size="large">
            <Title level={2}>出错了</Title>
            <Text type="secondary">
              {this.state.error?.message || "发生了一个错误，请稍后再试"}
            </Text>
            <Button type="primary" onClick={this.handleReload}>
              刷新页面
            </Button>
          </Space>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
