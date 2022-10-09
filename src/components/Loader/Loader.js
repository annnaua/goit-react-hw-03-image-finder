import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="48"
      width="48"
      radius="6"
      color="#6366f1"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};
