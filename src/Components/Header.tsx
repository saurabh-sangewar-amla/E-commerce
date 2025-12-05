import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router";
import useCart from "../hooks/useCart";

interface HeaderProps {
  cartCount?: number;
}

const Header = ({ cartCount }: HeaderProps) => {
  const { totalQuantity } = useCart();

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
  };

  const activeStyle = {
    fontWeight: "700",
    color: "#03fa62ff",
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#fff",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/*Logo */}
      <NavLink to="/" style={linkStyle}>
        MyShop
      </NavLink>

      {/*Nav Menu */}
      <nav
        style={{
          display: "flex",
          gap: "25px",
          fontSize: "16px",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Products
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Contact
        </NavLink>
      </nav>

      {/*Cart */}
      <div style={{ position: "relative", cursor: "pointer" }}>
        <FiShoppingCart size={26} />

        {totalQuantity > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-6px",
              right: "-10px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              fontSize: "12px",
              padding: "2px 6px",
            }}
          >
            {totalQuantity}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
