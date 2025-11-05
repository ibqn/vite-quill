import { useState } from "react"
import { SnowEditor } from "./components/snow-editor"
import { BubbleEditor } from "./components/bubble-editor"

export const App = () => {
  const [value, setValue] = useState<string | null>('{"ops":[{"insert":"Hello, Quill!"}]}')

  return (
    <div className="flex flex-col gap-4 p-4">
      <SnowEditor value={value} onChange={setValue} />
      <pre>{value}</pre>
      <div className="my-4 border border-gray-300">
        <BubbleEditor value={value} />
      </div>
    </div>
  )
}
