import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

const SEO = ({
  title = "React 工具导航",
  description = "发现最好用的 React 工具和库",
  keywords = ["React", "工具", "组件库", "状态管理", "路由"],
}: SEOProps) => {
  const fullTitle =
    title === "React 工具导航" ? title : `${title} | React 工具导航`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
