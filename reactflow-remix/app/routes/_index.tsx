import type { MetaFunction } from "@remix-run/node";

import Flow from "../components/Flow";

import reactFlowStyles from "@xyflow/react/dist/style.css?url";
import style from "../styles/index.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "React Flow - Remix Example" },
    { name: "description", content: "Welcome to Remix & React Flow!" },
  ];
};

export default function Index() {
  return <Flow />;
}

export function links() {
  return [
    { rel: "stylesheet", href: reactFlowStyles },
    { rel: "stylesheet", href: style },
  ];
}
