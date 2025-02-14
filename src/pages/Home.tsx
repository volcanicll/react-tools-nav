import { useState } from "react";
import { Typography, Row, Col, Card, Tag } from "antd";
import { Link } from "react-router-dom";
import { toolsData, type Category } from "../data/tools";
import styled from "styled-components";

const { Title, Text } = Typography;

const PixelCard = styled(Card)`
  cursor: pointer;
  transition: all 0.3s ease;
  image-rendering: pixelated;

  &:hover {
    transform: translateY(-5px);
    .nes-container {
      border-color: #209cee;
    }
  }
`;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = toolsData
    .map((category) => ({
      ...category,
      tools: category.tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.tools.length > 0);

  return (
    <div className="nes-container">
      <Title
        level={2}
        className="nes-text is-primary"
        style={{ textAlign: "center" }}
        data-aos="fade-down"
      >
        React 工具导航
      </Title>

      <Row gutter={[24, 24]}>
        {filteredData.map((category) => (
          <Col xs={24} md={12} lg={8} key={category.id}>
            <PixelCard
              className="nes-container"
              data-aos="zoom-in"
              data-aos-delay={`${(parseInt(category.id) + 1) * 100}`}
            >
              <Title level={4} className="nes-text is-primary">
                {category.name}
              </Title>
              <Text className="nes-text">{category.description}</Text>
              <div style={{ marginTop: 16 }}>
                {category.tools.map((tool) => (
                  <Link key={tool.id} to={`/tool/${tool.id}`}>
                    <Tag
                      color="success"
                      className="nes-badge"
                      style={{ marginRight: 8, marginBottom: 8 }}
                    >
                      {tool.name}
                    </Tag>
                  </Link>
                ))}
              </div>
            </PixelCard>
          </Col>
        ))}
      </Row>
    </div>
  );
}
