import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";
import postModule from "../../Profile/MyPost/Post/Post.module.css";


const DialogItim = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div>
      <div className={postModule.item}>
        <img src='https://img.championat.com/c/900x900/news/big/e/t/poyavilis-pervye-kadry-seriala-avatar-legenda-ob-aange-premera-v-2024-godu_1687041545980927004.jpg' />
      </div>
      <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default DialogItim
