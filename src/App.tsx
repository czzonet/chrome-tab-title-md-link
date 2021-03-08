import React, { useEffect, useState } from "react";
import { getWindowTabs } from "./chromeBridge";

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getWindowTabs().then((d) => setList(d));

    return () => {};
  }, []);

  return (
    <div>
      <h1>网页标题的md链接</h1>
      <ol>
        {list.map((d, i) => {
          return <li key={i}>{`[${d.title}](${d.url})`}</li>;
        })}
      </ol>
    </div>
  );
}
