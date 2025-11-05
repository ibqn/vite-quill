import { type RefObject, useEffect, useLayoutEffect, useRef } from "react";
import Quill, { Delta, type EmitterSource, Range } from "quill";

type QuillEditorProps = {
  editorRef: RefObject<Quill | null>;
  value?: Delta;
  onTextChange?: (delta: Delta, oldDelta: Delta, source: EmitterSource) => void;
  onSelectionChange?: (
    range: Range,
    oldRange: Range,
    source: EmitterSource
  ) => void;
  readOnly?: boolean;
};

export const QuillEditor = ({
  editorRef,
  readOnly,
  value,
  onTextChange,
  onSelectionChange,
}: QuillEditorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<Delta>(value);
  const onTextChangeRef = useRef(onTextChange);
  const onSelectionChangeRef = useRef(onSelectionChange);

  useLayoutEffect(() => {
    onTextChangeRef.current = onTextChange;
    onSelectionChangeRef.current = onSelectionChange;
  }, [onTextChange, onSelectionChange]);

  useEffect(() => {
    editorRef.current?.enable(!readOnly);
  }, [readOnly, editorRef]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div")
    );

    const quill = new Quill(editorContainer, {
      theme: readOnly ? "bubble" : "snow",
    });

    editorRef.current = quill;

    if (valueRef.current) {
      quill.setContents(valueRef.current);
    }

    quill.on(Quill.events.TEXT_CHANGE, (...args) => {
      onTextChangeRef.current?.(...args);
    });

    quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
      onSelectionChangeRef.current?.(...args);
    });

    return () => {
      editorRef.current = null;
      container.innerHTML = "";
    };
  }, [editorRef, readOnly]);

  return <div ref={containerRef}></div>;
};
