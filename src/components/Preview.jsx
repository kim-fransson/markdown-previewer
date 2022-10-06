import { marked } from "marked";
import { classNames } from "../utils/class-names";

function Preview({ markdown, className }) {
  return (
    <div
      id="preview"
      className={classNames("w-full p-8 overflow-scroll", className)}
      dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
    />
  );
}

export default Preview;
