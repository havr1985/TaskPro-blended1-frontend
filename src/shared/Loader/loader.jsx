import {ColorRing} from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{
      display: 'grid',
      placeItems: 'center',
      height: '68px',
      width: '68px',
      backgroundColor: 'transparent', 
      transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
     <ColorRing
  visible={true}
  height="48"
  width="48"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#999999', '#999999', '#999999', '#999999', '#999999',]}
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
      zIndex: '1001',
      transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
     <ColorRing
  visible={true}
  height="68"
  width="68"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  
        colors={['#999999', '#999999', '#999999', '#999999', '#999999',]}
  />
    </div>
  );
};


