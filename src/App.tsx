import { ConfigProvider, theme } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ToolDetail from "./pages/ToolDetail";
import CompareTools from "./pages/CompareTools";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const themeConfig = {
  token: {
    colorPrimary: "#1890ff",
    borderRadius: 6,
    fontFamily: '"Press Start 2P", cursive',
  },
  algorithm: theme.defaultAlgorithm,
};

function App() {
  return (
    <ErrorBoundary>
      <ConfigProvider theme={themeConfig}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="category/:categoryId/tool/:toolId"
                element={<ToolDetail />}
              />
              <Route path="compare" element={<CompareTools />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </ConfigProvider>
    </ErrorBoundary>
  );
}

export default App;
