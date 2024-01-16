import React from "react";
import s from './Post.module.css';


export default function Post(props) {
  return (
    <div className={s.itemProfile}>
        <img src='https://img.championat.com/c/900x900/news/big/e/t/poyavilis-pervye-kadry-seriala-avatar-legenda-ob-aange-premera-v-2024-godu_1687041545980927004.jpg' />
        {props.message}
      <div>
        LIke - {props.likeCount}
      </div>
    </div>
  );
};
