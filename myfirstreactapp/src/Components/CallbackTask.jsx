import React, { useEffect } from "react";

export default function App() {
  // 1. Simple Callback
  function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }

  // 2. Callback with Delay
  function delayedMessage(message, delay, callback) {
    setTimeout(() => {
      console.log(message);
      callback && callback();
    }, delay);
  }

  // 3. Callback Hell Example
  function step1(callback) {
    setTimeout(() => {
      console.log("Step 1 complete");
      callback();
    }, 1000);
  }

  function step2(callback) {
    setTimeout(() => {
      console.log("Step 2 complete");
      callback();
    }, 1000);
  }

  function step3(callback) {
    setTimeout(() => {
      console.log("Step 3 complete");
      callback();
    }, 1000);
  }

  useEffect(() => {
    // --- Test Simple Callback ---
    greet("Alice", () => console.log("Greeting complete!"));

    // --- Test Callback with Delay ---
    delayedMessage("First message after 1s", 1000, () => {
      delayedMessage("Second message after 2s", 2000, () => {
        delayedMessage("Third message after 0.5s", 500, () => {
          console.log("All delayed messages done!");
        });
      });
    });

    // --- Test Callback Hell ---
    step1(() => {
      step2(() => {
        step3(() => {
          console.log("All steps done (callback hell demo)");
        });
      });
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Callback Examples</h1>
      <p>Open the console to see the output 👇</p>
    </div>
  );
}
