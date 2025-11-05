import { useRef, useState } from "react";
import Quill, { Range } from "quill";
import "quill/dist/quill.snow.css";

export const useQuillEditor = () => {
  const editorRef = useRef<Quill>(null);
  const [range, setRange] = useState<Range | null>(null);

  return {
    editorRef,
    range,
    setRange,
  };
};
