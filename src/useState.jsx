import React, { useState } from "react";
import fetch from "./fetch";

let counter = 1;

function UseState() {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(undefined);

  const handleClick = async () => {
    counter = 1;
    setIsLoading(true);
    setUrl(undefined);

    const cat = await fetch();

    setUrl(cat.url);
    setIsLoading(false);
    counter = 1;
  };

  if (counter) {
    console.log(`UseState - Render #${counter}`, { isLoading, url });
  }
  counter += 1;

  return (
    <div className="UseState">
      <h4>UseState</h4>

      <div>
        <button disabled={isLoading} onClick={handleClick}>
          {isLoading ? "Loading..." : "Click me!"}
        </button>
      </div>

      {url && (
        <div>
          <img alt={url} src={url} />
        </div>
      )}
    </div>
  );
}

export default UseState;
