import React from "react";
import Amazon from "./amazon.png";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { StateValue } from "./StateProvider";
import { auth } from "./firebase";
import { toast } from "react-toastify";

const Header = () => {
	const [{basket,user}]=StateValue();

	const login=()=>{
		if(user){
			auth.signOut()
			toast.success('Sign Out Successfully....')
		}
	}


	const val=user?.email.split('@');
	console.log(val);
  return (
<>
    <div className="header">
      <Link to="home">
        <img className="header_logo" src={Amazon} alt="amazon logo" />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user &&"/login"} className="header_link">
          <div onClick={login} className="headerOption">
            <span className="header_one">Hello {' '}<strong style={{fontSize:'15px'}} >{val?.[0]}</strong>,</span>
            <span className="header_two">{user ?'Sign out' :'Sign In'}</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="headerOption">
            <span className="header_one">Returns</span>
            <span className="header_two">& Orders</span>
          </div>
        </Link>

        <Link to='' className="header_link">
          <div  className="headerOption">
            <span className="header_one">Your</span>
            <span className="header_two">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_basket">
            <ShoppingCartIcon />
            <span className="header_two header_count">{basket?.length}</span>
          </div>
        </Link>
      </div>

    </div>


	  <Outlet/>
	  </>
  );
};

export default Header;
