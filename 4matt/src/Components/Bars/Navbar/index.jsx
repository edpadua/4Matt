import {NavLink} from "react-router-dom";

import tw from "tailwind-styled-components";



const Nav = tw.nav`
    bg-slate-200
    border-zinc-400
    border-solid
    border-b
    top-0 
    left-0 
    right-0 
    w-full 
    h-20 
    pt-6
`;

const NavContainer = tw.div`
    px-16 
    flex

`;

function Navbar() {
  const activeLink = "font-bold border-b border-blue-400 text-blue-400";

  return (
    <Nav>
      <NavContainer className="px-16 flex">
        <ul className="flex">
          <li className="mr-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Cost optimization dashboard
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to="/applications"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Aplication Spend
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to="/transactions"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Transactions
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to="/licences"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Licences
            </NavLink>
          </li>
        </ul>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
