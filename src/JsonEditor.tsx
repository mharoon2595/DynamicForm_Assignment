import { useEffect, useState } from "react";
// import {  L as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

interface CompProps {
  onInput: (json: string) => void;
  errorMsg: string | null;
}

export function JsonEditor({ onInput, errorMsg }: CompProps) {
  const [json, setJson] = useState<string>("");

  useEffect(() => {
    onInput(json);
  }, [json, onInput]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">JSON Editor</h2>
      <SyntaxHighlighter
        language="json"
        style={tomorrowNightEighties}
        customStyle={{ height: "400px" }}
      >
        {json}
      </SyntaxHighlighter>
      <textarea
        className="w-full h-40 mt-2 p-2 border rounded"
        value={json}
        onChange={(e) => setJson(e.target.value)}
        placeholder="Enter your JSON schema here..."
      />
      {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
    </div>
  );
}
