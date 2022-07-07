import React, { useState } from "react";
import txt from "../src/txt";
import txtxt from "../src/txtxt";
export default function App() {
  const [show, setShow] = useState(txt);

  const txt1 = txt;
  const txt2 = txtxt;

  return (
    <div>
      <br />
      <br />

      <div>
        <button
          onClick={() => {
            setShow(txt1);
          }}
        >
          TEXT ONE
        </button>
        <button
          onClick={() => {
            setShow(txt2);
          }}
        >
          TEXT TWO
        </button>
      </div>
      <br />
      <br />

      <div>
        <text>{show}</text>
      </div>
    </div>
  );
}
