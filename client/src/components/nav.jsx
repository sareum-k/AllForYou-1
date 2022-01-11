import React from "react";
import style from "./nav.module.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setAccessToken, login, loginModal, setUserinfo } from '../action';

const Nav = () => {
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.loginModalReducer);
  const { isLogin } = useSelector((state) => state.loginReducer);
  // const { accessToken } = useSelector((state) => state.loginReducer);

  const handleLogout = async() => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/users/signout`)
      .then((res) => {
          console.log(res)
          dispatch(setAccessToken(null));
          dispatch(setUserinfo(null))
          dispatch(login(false));
          // window.location.reload('/');
      })
  };
  console.log(isLogin)

  const handleLoginModal = () => {
    dispatch(loginModal(true))
    console.log(isModal)
  }

  return (
    <div className={style.navContainer}>
      <Link to="/">
        <img className={style.logo} src="/image/logo.gif" alt="logo" />
      </Link>
      <ul className={style.list}>
        <li className={style.menu}>
          <Link to="/contents">
            <button className={style.btn}>CONTENTS</button>
          </Link>
        </li>
        <li className={style.menu}>
          <Link to="/foryou">
            <button className={style.btn}>FOR U</button>
          </Link>
        </li>
        <li className={style.menu}>
          <Link to="/mypage">
            <button className={style.btn}>MYPAGE</button>
          </Link>
        </li>
        {isLogin === false ? (
        <li className={style.login}>
          <button className={style.btn} onClick={handleLoginModal}>LOGIN</button>
        </li>
        ) : (
        <li className={style.logout}>
          <button className={style.btn} onClick={handleLogout}>LOGOUT</button>
        </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
