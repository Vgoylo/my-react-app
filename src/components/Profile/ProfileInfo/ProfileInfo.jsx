import React from "react";
import s from '../MyPost/Post/Post.module.css';
import Preloader from "../../common/preloader/preloader";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <div>
          <div >
            <img width='780px' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' alt="this is sould be photo" />
          </div>
          <div className={s.itemProfile}>
            <img src={props.profile.photos.small} />

            <div>
              {`My name ${props.profile.fullName}`}
            </div>

            <div>
              {props.profile.aboutMe}
            </div>

            <div className={s.itemProfile}>
              { props.profile.lookingForAJob ? <img src='https://img.championat.com/c/900x900/news/big/e/t/poyavilis-pervye-kadry-seriala-avatar-legenda-ob-aange-premera-v-2024-godu_1687041545980927004.jpg' /> : props.profile.lookingForAJobDescription }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo
