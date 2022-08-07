import React from "react";
import { useSelector, shallowEqual } from "react-redux";
function Pre() {
  const { load } = useSelector((state) => state.loader, shallowEqual);
  
  return <div id={load ? "preloader" : "preloader-none"}>loading</div>;
}

export default Pre;
