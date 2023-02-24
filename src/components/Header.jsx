import { Link } from "react-router-dom";
const Header = ({ title }) => {
  return (
    <>
      <Link to={"/"}>
        <h2 className="font-bold text-3xl text-white">{title}</h2>
      </Link>
    </>
  );
};

export default Header;
