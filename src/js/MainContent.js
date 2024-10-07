import React from "react";
import Joke from "./Joke";
import jokesData from "./jokes";

// MainContent component to render all the jokes
export default function MainContent() {
  // Map over the jokesData array and return a Joke component for each joke
  const jokeElements = jokesData.map((joke) => {
    // Each Joke component gets a unique key, setup, and punchline from the data
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });

  // Return the list of Joke components inside a div
  return <div>{jokeElements}</div>;
}
