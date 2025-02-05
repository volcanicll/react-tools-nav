import { Typography, Button, Space } from "antd";
import { Link as RouterLink } from "react-router-dom";

const { Title, Text } = Typography;

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px 24px" }}>
      <Space direction="vertical" size="large">
        <Title
          level={1}
          style={{
            background: "linear-gradient(to right, #1890ff, #096dd9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </Title>
        <Text style={{ fontSize: 18 }}>页面未找到</Text>
        <RouterLink to="/">
          <Button type="primary">返回首页</Button>
        </RouterLink>
      </Space>
    </div>
  );
};

export default NotFound;
