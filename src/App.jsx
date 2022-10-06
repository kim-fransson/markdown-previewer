import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { placeholder } from "./globals";
import { classNames } from "./utils/class-names";

function App() {
  const [markdown, setMarkdown] = useState(placeholder);

  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 min-w-[300px] max-w-7xl m-auto border-4 divide-y-4 md:divide-y-0 md:divide-x-4 my-8">
      <Editor markdown={markdown} setMarkdown={setMarkdown} className="z-10" />
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;
