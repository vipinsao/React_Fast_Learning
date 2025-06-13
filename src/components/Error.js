//extra error findings know more
import { useRouteError } from "react-router";

const Error = () => {
  //it returns a Error object
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops....</h1>
      <h2>Something went wrong please try agian later</h2>
      {/* <p>{err.error.message}</p> */}
    </div>
  );
};

export default Error;
