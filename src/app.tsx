import { useState } from "react";
import { QuillEditor } from "./components/quill-editor";
import { useQuillEditor } from "./hooks/use-quill-editor";

export const App = () => {
  const [value, setValue] = useState(`
    <h1>Hello, World!</h1>`);
  const { editorRef } = useQuillEditor();

  return (
    <div>
      <QuillEditor
        editorRef={editorRef}
        value={value}
        onTextChange={setValue}
      />
    </div>
  );
};
