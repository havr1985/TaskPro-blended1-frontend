import {ColorRing} from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{
      display: 'grid',
      placeItems: 'center',
      height: '100%',
      transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
     <ColorRing
  visible={true}
  height="68"
  width="68"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={[ 'var(--start-login-button-color)','var(--radio-label-background-color)','var(--radio-label-green-color)','var(--radio-label-pink-color)']}
  />
    </div>
  );
};

export const LoaderApp = () => {
  return (
    <div style={{
      display: 'grid',
      placeItems: 'center',
      height: '100vh',
      transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
     <ColorRing
  visible={true}
  height="68"
  width="68"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={[ 'var(--start-login-button-color)','var(--radio-label-background-color)','var(--radio-label-green-color)','var(--radio-label-pink-color)']}
  />
    </div>
  );
};


