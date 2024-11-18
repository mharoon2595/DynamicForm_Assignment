import { useState } from "react";
import { FormSchema } from "./formTypes";
import { JsonEditor } from "./JsonEditor";

function App() {
  const [jsonData, setJsonData] = useState<FormSchema | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onJSONInput(json: string) {
    if (json) {
      try {
        const parsed = JSON.parse(json) as FormSchema;
        setJsonData(parsed);
        setError(null);
      } catch (err) {
        setError("Invalid JSON:" + (err as Error).message);
      }
    } else {
      setError(null);
    }
  }
  return (
    <>
      <JsonEditor onInput={onJSONInput} errorMsg={error} />
    </>
  );
}

export default App;
