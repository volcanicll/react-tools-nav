import { useParams } from "react-router-dom";
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

const ToolDetail = () => {
  const { categoryId, toolId } = useParams();
  const category = toolsData.find((c) => c.id === categoryId);
  const tool = category?.tools.find((t) => t.id === toolId);

  if (!tool) {
    return (
      <div className="nes-container">
        <Title level={1}>工具未找到</Title>
      </div>
    );
  }

  return (
    <div className="nes-container">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Card>
          <Title level={1}>{tool.name}</Title>
          <Text style={{ fontSize: 18, color: "rgba(0, 0, 0, 0.65)" }}>
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
};

export default ToolDetail;
