import React from "react";
import FlightDetails from "./FlightDetails";

function UserPage() {
  return (
    <div>
      <h1>Welcome, User!</h1>
      <p>You can now book tickets.</p>
      <FlightDetails />
      <button style={{ marginTop: "10px" }}>Book Ticket</button>
    </div>
  );
}

export default UserPage;
