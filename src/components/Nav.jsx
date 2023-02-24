import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="space-x-4">
        <li className=" inline-block text-lg text-white font-medium">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className=" inline-block text-lg text-white font-medium">
          <NavLink to={"/createPost"}>Create</NavLink>
        </li>
        <li className=" inline-block text-lg text-white font-medium">
          <NavLink to={"about"}>About</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
