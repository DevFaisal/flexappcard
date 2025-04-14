import { Outlet } from "react-router";
import HandleBGVideo from "../provider/HandleBGVideo";

const RootLayout = () => {
  return (
    <div className="">
      <HandleBGVideo>
        <Outlet />
      </HandleBGVideo>
    </div>
  );
};

export default RootLayout;
