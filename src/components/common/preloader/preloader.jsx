import React from 'react'
import { Audio } from 'react-loader-spinner';

const Preloader = (props) => {
  return (
    <div>
      {props.isFetching ?
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        /> : null
      }
    </div>

  )
};

export default Preloader;
