import React from "react";

// Joke component that displays the joke's setup and punchline
export default function Joke(props) {
  // State to manage whether the punchline is shown or not
  const [isShown, setIsShown] = React.useState(false);

  // Function to toggle the punchline visibility
  function toggle() {
    setIsShown((prevState) => !prevState);
  }

  return (
    <div>
      {/* Display the setup of the joke if it exists */}
      {props.setup && <h3>{props.setup}</h3>}

      {/* Conditionally display the punchline based on isShown state */}
      {isShown && <p>{props.punchline}</p>}

      {/* Button to toggle between showing and hiding the punchline */}
      <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
      <hr />
    </div>
  );
}
