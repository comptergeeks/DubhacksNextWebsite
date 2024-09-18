"use client";

export default function ApiCallButton() {
  async function basicAPICall() {
    try {
      const response = await fetch("/home/api");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("API Response:", result.message);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  return (
    <div>
      <button onClick={basicAPICall}>press me!</button>
    </div>
  );
}
