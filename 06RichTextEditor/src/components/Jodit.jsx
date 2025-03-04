import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

export default function Jodit({ placeholder, ref }) {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typings...",
      height: 500,
    }),
    [placeholder]
  );

  return (
    <JoditEditor
      ref={ref}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => {
        setContent(newContent);
        console.log(newContent);
      }} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
    />
  );
}
