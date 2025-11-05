import type { Delta } from "quill"
import { QuillEditor } from "./quill-editor"
import { useQuillEditor } from "../hooks/use-quill-editor"
import { useEffect, useMemo } from "react"
import "quill/dist/quill.bubble.css"

type BubbleEditorProps = {
  value?: string | null
  onChange?: (value: string) => void
}

export const BubbleEditor = ({ value }: BubbleEditorProps) => {
  const { editorRef } = useQuillEditor()

  const delta = useMemo(() => {
    return JSON.parse(value ?? "{}") as Delta
  }, [value])

  useEffect(() => {
    editorRef.current?.setContents(delta)
  }, [delta, editorRef])

  return <QuillEditor editorRef={editorRef} readOnly={true} defaultValue={delta} />
}
