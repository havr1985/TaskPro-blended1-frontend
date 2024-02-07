import {ColorRing} from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
     <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={[ 'var(--welcome-background-color)','var(--radio-label-color)','var(--radio-label-green-color)','var(--radio-label-pink-color)' ]}
  />
    </div>
  );
};

