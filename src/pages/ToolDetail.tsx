import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  Row,
  Col,
  Space,
  List,
  Statistic,
  Button,
} from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { toolsData } from "../data/tools";

const { Title, Text } = Typography;

export default function ToolDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 查找工具详情
  const tool = toolsData
    .flatMap((category) => category.tools)
    .find((tool) => tool.id === id);

  if (!tool) {
    return (
      <div className="nes-container" style={{ textAlign: "center" }}>
        <Title level={2} className="nes-text is-error">
          工具未找到
        </Title>
        <Button
          type="primary"
          className="nes-btn"
          onClick={() => navigate("/")}
        >
          返回首页
        </Button>
      </div>
    );
  }

  return (
    <div className="nes-container">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Card>
          <Title level={2} className="nes-text is-primary" data-aos="fade-down">
            {tool.name}
          </Title>
          <Text
            className="nes-text"
            style={{ fontSize: 18, color: "rgba(0, 0, 0, 0.65)" }}
          >
            {tool.description}
          </Text>
        </Card>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card>
              <Statistic
                title="GitHub Stars"
                value={tool.stars?.toLocaleString() || "未知"}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <Statistic
                title="周下载量"
                value={tool.weeklyDownloads?.toLocaleString() || "未知"}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <Statistic title="开源协议" value={tool.license || "未知"} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Button
              type="primary"
              icon={<LinkOutlined />}
              href={tool.url}
              target="_blank"
              block
            >
              官方网站
            </Button>
          </Col>
          {tool.github && (
            <Col xs={24} md={8}>
              <Button
                icon={<GithubOutlined />}
                href={tool.github}
                target="_blank"
                block
              >
                GitHub
              </Button>
            </Col>
          )}
          {tool.npm && (
            <Col xs={24} md={8}>
              <Button
                href={`https://www.npmjs.com/package/${tool.npm}`}
                target="_blank"
                block
              >
                NPM
              </Button>
            </Col>
          )}
        </Row>

        <Card>
          <Title level={3}>主要特性</Title>
          <List
            dataSource={tool.features}
            renderItem={(feature) => (
              <List.Item>
                <Space>
                  <CheckCircleOutlined style={{ color: "#52c41a" }} />
                  <Text>{feature}</Text>
                </Space>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    </div>
  );
}
