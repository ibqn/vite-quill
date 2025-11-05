import { useState } from "react"
import { SnowEditor } from "./components/snow-editor"
import { BubbleEditor } from "./components/bubble-editor"

export const App = () => {
  const [value, setValue] = useState<string | null>(
    '{"ops":[{"insert":"Hello, Quill!"}]}'
  )

  return (
    <div>
      <SnowEditor value={value} onChange={setValue} />
      <pre>{value}</pre>
      <div className="">
        <BubbleEditor value={value} />
      </div>
    </div>
  )
}
