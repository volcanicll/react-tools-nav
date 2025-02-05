interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  features: string[];
  github?: string;
  npm?: string;
  stars?: number;
  weeklyDownloads?: number;
  license?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  tools: Tool[];
}

export const toolsData: Category[] = [
  {
    id: "state-management",
    name: "状态管理",
    description: "React应用程序的状态管理工具",
    tools: [
      {
        id: "redux",
        name: "Redux",
        description: "可预测的状态容器，适用于大型复杂应用",
        url: "https://redux.js.org",
        features: [
          "集中式状态管理",
          "支持中间件（如Redux Thunk/Saga）",
          "强大的开发者工具（如Redux DevTools）",
          "广泛的社区支持",
        ],
      },
      {
        id: "zustand",
        name: "Zustand",
        description: "轻量级状态管理库，简化全局状态共享",
        url: "https://zustand-demo.pmnd.rs",
        features: [
          "极简API（create/store模式）",
          "模块化状态切片",
          "异步操作支持",
          "高性能（比Redux快30%）",
        ],
      },
      {
        id: "recoil",
        name: "Recoil",
        description: "原子化状态管理库，支持细粒度控制",
        url: "https://recoiljs.org",
        features: [
          "原子化状态管理",
          "异步数据流处理",
          "状态依赖追踪",
          "与React Hooks深度集成",
        ],
      },
    ],
  },
  {
    id: "ui-libraries",
    name: "UI组件库",
    description: "React UI组件和设计系统",
    tools: [
      {
        id: "material-ui",
        name: "Material-UI (MUI)",
        description: "基于Material Design的企业级组件库",
        url: "https://mui.com",
        features: [
          "完整的Material Design实现",
          "主题定制与动态样式",
          "可访问性优化（WAI-ARIA标准）",
          "服务端渲染支持",
        ],
      },
      {
        id: "chakra-ui",
        name: "Chakra UI",
        description: "模块化且可访问的现代组件库",
        url: "https://chakra-ui.com",
        features: [
          "开箱即用的响应式设计",
          "深色模式支持",
          "原子化CSS工具（Style Props）",
          "TypeScript优先",
        ],
      },
      {
        id: "ant-design",
        name: "Ant Design",
        description: "企业级中后台设计系统",
        url: "https://ant.design",
        features: [
          "50+预置组件（表格/表单/图表）",
          "国际化与本地化支持",
          "Pro版提供高级模板",
          "阿里巴巴生态支持",
        ],
      },
      {
        id: "react-bootstrap",
        name: "React Bootstrap",
        description: "Bootstrap的React实现版本",
        url: "https://react-bootstrap.github.io",
        features: [
          "无jQuery依赖",
          "按需加载组件",
          "兼容原生Bootstrap主题",
          "社区资源丰富",
        ],
      },
    ],
  },
  {
    id: "routing",
    name: "路由管理",
    description: "React应用程序的路由解决方案",
    tools: [
      {
        id: "react-router",
        name: "React Router",
        description: "声明式路由管理的行业标准",
        url: "https://reactrouter.com",
        features: [
          "嵌套路由与动态路由",
          "路由懒加载支持",
          "路由守卫（通过Loader/Action）",
          "兼容React Server Components",
        ],
      },
    ],
  },
];
export type { Tool, Category };
