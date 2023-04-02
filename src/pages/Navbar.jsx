import "../Style/navbarStyle.css";
import "../Style/navbarMedia.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../Redux/search/action";
import { getSearchBtn } from "../Redux/search/action";

export const Navbar = () => {
  const dispatch = useDispatch();
  let match = window.matchMedia("(max-width:770px)").matches;
  const navigate = useNavigate();
  const [on, isOn] = useState(false);
  const [sign, isSign] = useState(false);
  const [inputs, setInputs] = useState("");
  const handleClick = () => {
    isOn(!on);
  };
  const handleSignIn = () => {
    isSign(!sign);
  };

  const handleInput = (e) => {
    let value = "";
    if (e == "Men" || e == "MEN" || e == "Mens" || e == "mens") {
      value = "men";
    } else if (
      e == "Women" ||
      e == "women" ||
      e == "WOMEN" ||
      e == "Womens" ||
      e == "womens"
    ) {
      value = "womens";
    } else if (
      e == "shoe" ||
      e == "SHOE" ||
      e == "SHOES" ||
      e == "Shoes" ||
      e == "Shoe"
    ) {
      value = "shoes";
    } else if (
      e == "jacket" ||
      e == "JACKET" ||
      e == "JACKETS" ||
      e == "Jackets" ||
      e == "Jackets"
    ) {
      value = "jackets";
    } else {
      value = e;
    }

    setInputs(e);
    dispatch(getSearch(value));
  };

  const handleSearchBtn = () => {
    console.log("tikk");

    if (inputs.length > 0 || match) {
      dispatch(getSearchBtn(1));
      navigate("/search");
    }
  };

  return (
    <nav>
      <div className="nav_part_1">
        <div className="nav_top_1">
          <div onClick={handleClick}>{on ? "X" : "|||"}</div>
          <div>
            <p>
              <h1>
                <Link to={"/"}>FSUQ</Link>
              </h1>
            </p>
          </div>
          <div>
            <Link to={"/"}>
              <p style={{ color: "white" }}>WOMEN</p>
            </Link>
          </div>
          <div>
            <Link to={"/men"}>
              <p style={{ color: "white" }}>MEN</p>
            </Link>
          </div>
        </div>
        <div className="nav_top_2">
          <input
            type="text"
            value={inputs}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="Search for items and brands"
          />
          <svg
            onClick={handleSearchBtn}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <div className="nav_top_3">
          <div onClick={handleSignIn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              color={sign && !match ? "rgb(0, 136, 189)" : "white"}
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </div>
          <div>
            <Link to={"/wishlist"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </Link>
          </div>

          <div>
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="nav_part_2">
        <div>
          <div>
            <Link to={"/womenshorts"}>New in</Link>
          </div>
          <div>
            <Link to={"/womenjacket"}>Sale</Link>
          </div>
          <div>
            <Link to={"/womentop"}>Clothing</Link>
          </div>
          <div>
            <Link to={"/womendress"}>Dresses</Link>
          </div>
          <div>
            <Link to={"/womenshoes"}>Shoes</Link>
          </div>
          <div>Summer</div>
          <div>Activewere</div>
          <div>Brands</div>
          <div>Accessories</div>
          <div>
            <Link to={"/womenpants"}>Jeans</Link>
          </div>
          <div>Face</div>
          <div>Topshop</div>
          <div>Marketplace</div>
          <div>Outlet</div>
        </div>
      </div>
      {/* slide */}
      {on ? (
        <div className="slide">
          {" "}
          <Sidebar />{" "}
        </div>
      ) : null}
      {/* contact */}
      <div
        className="signIn_1"
        style={{
          height: sign ? "auto" : "0px",
          display: sign ? "block" : "none",
        }}
      >
        <div>
          <h6>
            <Link to={"/login"}>SIGN IN</Link>
          </h6>
          <h6>
            <Link to={"/login"}>JOIN</Link>
          </h6>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <p>
            <Link to={"/account"}>My Account</Link>{" "}
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-box2"
            viewBox="0 0 16 16"
          >
            <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
          </svg>
          <p>My Order</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-person-gear"
            viewBox="0 0 16 16"
          >
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
          </svg>
          <p>
            <Link to={"/admin"}>Admin</Link>
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <p>My Return</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-question-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
          <p>Contact</p>
        </div>
      </div>
    </nav>
  );
};
