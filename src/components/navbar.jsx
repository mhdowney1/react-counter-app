// SHORTCUT: 'imrc'
import React from "react";

// SHORTCUT: 'cc' for a Class

// SHORTCUT: 'sfc' for a Stateless Functional Component
// Object Destructuring: ({ totalCounters })
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Shopping Cart{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
