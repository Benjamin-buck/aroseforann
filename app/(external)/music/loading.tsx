import { BounceLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex items-center justify-center">
      <BounceLoader color="#fff" />
    </div>
  );
};

export default loading;
