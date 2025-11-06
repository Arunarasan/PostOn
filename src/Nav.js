import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  const location = useLocation();

  return (
    <nav
      className="nav"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#1565c0",
        color: "#fff",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        flexWrap: "wrap",
      }}
    >
      {/* Search Form */}
      <form
        className="searchForm"
        onSubmit={(e) => e.preventDefault()}
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <label htmlFor="search" style={{ fontWeight: "500" }}>
          🔍
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            width: "200px",
          }}
        />
      </form>

      {/* Navigation Links */}
      <ul
        id="moves"
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: location.pathname === "/" ? "#ffeb3b" : "#fff",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/post"
            style={{
              color: location.pathname.startsWith("/post") ? "#ffeb3b" : "#fff",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
          >
            Post
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: location.pathname === "/about" ? "#ffeb3b" : "#fff",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
