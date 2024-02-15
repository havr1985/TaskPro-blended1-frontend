import {ColorRing} from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{
      display: 'grid',
      placeItems: 'center',
      height: '68px',
      width: '68px',
      backgroundColor: 'var(--secondary-background-color)', 
      transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
     <ColorRing
  visible={true}
  height="48"
  width="48"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['var(--plus-button-color)', 'var(--plus-button-color)', 'var(--plus-button-color)', '--plus-button-color)']}
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
      background: 'transparent',
      zIndex: '1100',
      transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
     <ColorRing
  visible={true}
  height="68"
  width="68"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={[ 'var(--welcome-hover-text-color)','var(--start-login-button-color)', 'var(--radio-label-background-color)', 'var(--primary-background-color)',]}
  />
    </div>
  );
};


