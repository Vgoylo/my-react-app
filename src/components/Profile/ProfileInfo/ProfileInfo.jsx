import React from "react";
import s from './ProfileInfo.module.css';


function ProfileInfo() {
  return (
    <div>
      <div>
        <div>
          <div className={s.image}>
            <img width='80%'src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' alt="this is sould be photo" />
          </div>
          <div className={s.descriptionBlock}>
            av + desc
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo
