import React from 'react';
import style from "../pages/index.module.scss";
import A from "../components/A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
  return (
    <div>
      <Head>
        <meta keywords={'ceil' + keywords}></meta>
        <title>Главная </title>
      </Head>
      <div className={style.navbar}>
        <A href={'/'} text='Главная'/>
        <A href={'/users'} text='Пользователи'/>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainContainer;