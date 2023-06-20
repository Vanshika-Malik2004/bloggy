import { useState } from "react";
import "./App.css";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const SignOutUser = async () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <nav>
        <Link to="/">HOME</Link>
        {!isAuth ? (
          <Link to="/login">LOGIN</Link>
        ) : (
          <>
            <button onClick={SignOutUser}>LogOut</button>
            <Link to="createpost">CREATE POST</Link>
          </>
        )}
      </nav>
      <Routes>
        <Route exact path="/" element={<Home isAuth={isAuth} />}></Route>
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />}
        />
        <Route
          path="createpost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
