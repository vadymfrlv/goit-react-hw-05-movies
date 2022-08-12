import { memo } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="75"
      width="75"
      radius="9"
      color="rgba(0, 21, 255, 0.7)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName="loader"
      visible={true}
    />
  );
};

export default memo(Loader);
