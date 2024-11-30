import React, { useMemo } from "react";

// Helper function to generate a random color based on user name
const generateColor = (name) => {
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const color = `hsl(${hash % 360}, 70%, 60%)`; // Generate color based on name hash
  return color;
};

const UserAvatar = ({ name, isAvailable }) => {
  const firstLetter = useMemo(() => name.charAt(0).toUpperCase(), [name]);
  const backgroundColor = useMemo(() => generateColor(name), [name]);

  return (
    <div
      style={{
        position: "relative", // Set relative positioning for the parent container
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: backgroundColor,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      {firstLetter}
      <div
        style={{
          position: "absolute", // Absolute positioning for the status indicator
          bottom: "1px",
          right: "1px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: isAvailable ? "#00a854" : "#fcba03",
          border: "1px solid white", // A border to make the dot visible against the avatar
        }}
      />
    </div>
  );
};

export default UserAvatar;
