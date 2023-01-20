import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import CheckOut from "./CheckOut";
import Login from "./Login";
import { StateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [{user}, dispatch] = StateValue();
  useEffect(() => {
 const unsubscribe=auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

	return ()=>{
		unsubscribe();
	}
  }, []);
  console.log(user);
  return (
    <>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        limit={0}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
