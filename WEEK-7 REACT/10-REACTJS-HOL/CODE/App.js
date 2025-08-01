import React from "react";

function App() {
  // Office object example
  const office = {
    name: "Sunshine Plaza",
    rent: 55000,
    address: "123 Main St, Downtown"
  };

  // List of office spaces
  const officeSpaces = [
    { id: 1, name: "Sunshine Plaza", rent: 55000, address: "123 Main St, Downtown" },
    { id: 2, name: "Greenwood Towers", rent: 75000, address: "45 Green Ave, Uptown" },
    { id: 3, name: "Lakeside Workhub", rent: 62000, address: "9 Lake Rd, Suburb" },
    { id: 4, name: "City Center Offices", rent: 58000, address: "77 Center Blvd, City" },
  ];

  // Inline style for rent color conditionally
  const getRentColor = (rent) => ({
    color: rent < 60000 ? "red" : "green"
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Heading */}
      <h1>Office Space Rental</h1>

      {/* Office image */}
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        alt="Office Space"
        style={{ width: "400px", borderRadius: "8px", marginBottom: "20px" }}
      />

      {/* Single Office Details */}
      <div style={{ marginBottom: "40px" }}>
        <h2>{office.name}</h2>
        <p>
          Rent: <span style={getRentColor(office.rent)}>₹{office.rent}</span>
        </p>
        <p>Address: {office.address}</p>
      </div>

      {/* List of Offices */}
      <h2>Available Office Spaces</h2>
      <ul>
        {officeSpaces.map(({ id, name, rent, address }) => (
          <li key={id} style={{ marginBottom: "15px" }}>
            <strong>{name}</strong> <br />
            Rent: <span style={getRentColor(rent)}>₹{rent}</span> <br />
            Address: {address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
