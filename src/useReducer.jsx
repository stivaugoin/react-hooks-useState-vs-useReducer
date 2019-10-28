import React, { useReducer } from "react";
import fetch from "./fetch";

function reducer(state, action) {
  switch (action.type) {
    case "startFetching":
      return {
        ...state,
        isLoading: true,
        url: undefined
      };
    case "stopFetching":
      return {
        ...state,
        isLoading: false,
        url: action.payload
      };
    default:
      return state;
  }
}

let counter = 0;

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    url: undefined
  });
  const { isLoading, url } = state;

  const handleClick = async () => {
    dispatch({ type: "startFetching" });

    const cat = await fetch();

    dispatch({ type: "stopFetching", payload: cat.url });
    counter = 0;
  };

  if (counter) {
    console.log(`UseReducer - Render #${counter}`);
  }
  counter += 1;

  return (
    <div className="UseReducer">
      <h4>UseReducer</h4>

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

export default UseReducer;
