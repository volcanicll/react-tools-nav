import { Layout as AntLayout } from "antd";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "nes.css/css/nes.min.css";
import styled from "styled-components";

const { Content } = AntLayout;

const PixelContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Press Start 2P", cursive;
  image-rendering: pixelated;

  .nes-container {
    margin: 20px 0;
    padding: 16px;
    background: #ffffff;
    border: 4px solid #000000;
  }

  .pixel-border {
    position: relative;
    border: 4px solid #000;
    border-radius: 0;

    &::after {
      content: "";
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      background: transparent;
      border: 2px solid #fff;
      pointer-events: none;
    }
  }
`;

export default function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <AntLayout
      style={{ minHeight: "100vh", background: "#f0f2f5" }}
      className="pixel-border"
    >
      <Content>
        <PixelContainer data-aos="fade-up">
          <Outlet />
        </PixelContainer>
      </Content>
    </AntLayout>
  );
}
