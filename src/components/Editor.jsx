import { classNames } from "../utils/class-names";

function Editor({ markdown, setMarkdown, className }) {
  return (
    <textarea
      name="editor"
      id="editor"
      className={classNames(
        "resize-none w-full p-8 pt-16 focus:outline-none focus:border-4 focus:border-blue-900 focus:shadow-lg",
        className
      )}
      defaultValue={markdown}
      onChange={(event) => setMarkdown(event.target.value)}
    ></textarea>
  );
}

export default Editor;
