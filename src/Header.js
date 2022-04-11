import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleLogin, handleLogout } from "./redux/features/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { isLogged, name } = useSelector((state) => state.auth);

  const counter = useSelector((state) => state.counter.value);

  return (
    <header>
      <div> {counter} </div>
      {isLogged ? (
        <>
          <strong> Hello {name} </strong>
          <button onClick={() => dispatch(handleLogout())}> logout </button>
        </>
      ) : (
        <button onClick={() => dispatch(handleLogin())}> login </button>
      )}
    </header>
  );
}
