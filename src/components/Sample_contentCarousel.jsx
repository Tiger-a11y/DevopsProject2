import React from "react";
import ContentTile from "./ContentTile";
import ContentTileData from "./ContentTileData";

function abc(data) {
  return <ContentTile poster={data.poster} />;
}

function ContentCarousel() {
  const scrollContainer = (direction) => {
    const container = document.getElementById("container");
    if (container) {
      container.scrollLeft += direction === "left" ? -1400 : 1400;
    }
  };

  return (
    <div style={{ marginBottom: 48 }}>
      {/* Title Section */}
      <div
        style={{
          marginLeft: 72,
          marginRight: 72,
          paddingBottom: 16,
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>Movies List</h2>
      </div>

      {/* Carousel Section */}
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "48px auto 48px",
            alignItems: "center",
            overflow: "hidden",
            minWidth: 320,
          }}
        >
          {/* Left Scroll Button */}
          <button
            onClick={() => scrollContainer("left")}
            style={{
              gridColumn: 1,
              cursor: "pointer",
              backgroundColor: "transparent",
              zIndex: 20,
              border: "none",
              padding: 0,
            }}
          >
            Left
          </button>

          {/* Carousel Container */}
          <ul
            id="container"
            style={{
              gridColumn: 2,
              display: "flex",
              flexDirection: "row",
              listStyle: "none",
              overflowX: "scroll",
              scrollBehavior: "smooth",
              padding: "0 72px",
              margin: 0,
              scrollSnapType: "x proximity",
            }}
          >
            {ContentTileData.map((data, index) => (
              <li key={index}>{abc(data)}</li>
            ))}
          </ul>

          {/* Right Scroll Button */}
          <button
            onClick={() => scrollContainer("right")}
            style={{
              gridColumn: 3,
              cursor: "pointer",
              backgroundColor: "transparent",
              zIndex: 20,
              border: "none",
              padding: 0,
            }}
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentCarousel;
