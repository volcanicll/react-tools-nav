import { useState, useMemo } from "react";
import {
  Typography,
  Card,
  Space,
  Select,
  Button,
  Row,
  Col,
  Table,
  Tag,
} from "antd";
import { GithubOutlined, LinkOutlined, CloseOutlined } from "@ant-design/icons";
import { toolsData, Tool } from "../data/tools";

const { Title, Text } = Typography;
const { Option } = Select;

const CompareTools = () => {
  const allTools = useMemo(
    () => toolsData.flatMap((category) => category.tools),
    []
  );
  const [selectedTools, setSelectedTools] = useState<Tool[]>([]);

  const handleToolSelect = (value: string) => {
    const tool = allTools.find((t) => t.id === value);
    if (tool && !selectedTools.find((t) => t.id === value)) {
      setSelectedTools((prev) =>
        prev.length >= 3 ? [...prev.slice(1), tool] : [...prev, tool]
      );
    }
  };

  const handleToolRemove = (toolId: string) => {
    setSelectedTools((prev) => prev.filter((t) => t.id !== toolId));
  };

  const columns = [
    {
      title: "特性",
      dataIndex: "feature",
      key: "feature",
      width: 150,
    },
    ...selectedTools.map((tool) => ({
      title: tool.name,
      dataIndex: tool.id,
      key: tool.id,
      render: (text: any) => text,
    })),
  ];

  const dataSource = [
    {
      key: "stars",
      feature: "GitHub Stars",
      ...Object.fromEntries(
        selectedTools.map((tool) => [
          tool.id,
          tool.stars?.toLocaleString() || "未知",
        ])
      ),
    },
    {
      key: "downloads",
      feature: "周下载量",
      ...Object.fromEntries(
        selectedTools.map((tool) => [
          tool.id,
          tool.weeklyDownloads?.toLocaleString() || "未知",
        ])
      ),
    },
    {
      key: "license",
      feature: "开源协议",
      ...Object.fromEntries(
        selectedTools.map((tool) => [tool.id, tool.license || "未知"])
      ),
    },
    {
      key: "links",
      feature: "链接",
      ...Object.fromEntries(
        selectedTools.map((tool) => [
          tool.id,
          <Space direction="vertical" key={tool.id}>
            <Button
              type="link"
              icon={<LinkOutlined />}
              href={tool.url}
              target="_blank"
            >
              官网
            </Button>
            {tool.github && (
              <Button
                type="link"
                icon={<GithubOutlined />}
                href={tool.github}
                target="_blank"
              >
                GitHub
              </Button>
            )}
          </Space>,
        ])
      ),
    },
    {
      key: "features",
      feature: "特性",
      ...Object.fromEntries(
        selectedTools.map((tool) => [
          tool.id,
          <Space direction="vertical" key={tool.id}>
            {tool.features.map((feature, index) => (
              <Tag key={index} color="blue">
                {feature}
              </Tag>
            ))}
          </Space>,
        ])
      ),
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Card>
        <Title level={2}>工具对比</Title>
        <Text>选择最多3个工具进行对比 ({selectedTools.length}/3)</Text>
        <Select
          style={{ width: "100%", marginTop: 16 }}
          placeholder="选择工具"
          onChange={handleToolSelect}
        >
          {toolsData.map((category) =>
            category.tools.map((tool) => (
              <Option key={tool.id} value={tool.id}>
                {tool.name} ({category.name})
              </Option>
            ))
          )}
        </Select>
      </Card>

      <Row gutter={[16, 16]}>
        {selectedTools.map((tool) => (
          <Col xs={24} md={8} key={tool.id}>
            <Card
              title={tool.name}
              extra={
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => handleToolRemove(tool.id)}
                />
              }
            >
              <Text>{tool.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedTools.length > 0 && (
        <Card>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            scroll={{ x: true }}
          />
        </Card>
      )}
    </Space>
  );
};

export default CompareTools;
