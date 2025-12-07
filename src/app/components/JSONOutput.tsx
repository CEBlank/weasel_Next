import { useEffect } from "react";

export default function JSONOutput(props: { json: any }) {

  return (
    <pre className="px-8 sm:px-6 text-black text-sm">
      <code className="language-json">
        {JSON.stringify(props.json, null, 2)}
      </code>
    </pre>
  );
}
