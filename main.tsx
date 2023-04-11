import React from "react";
import Avatar from "/components/Avatar/index.tsx";
import Spinner from "/components/Spinner/index.tsx";

const Main = () => {
  return (
    <>
      <Avatar url="https://unsplash.com/photos/jzY0KRJopEI" initial="AD" />
      <Avatar initials="TP" />
      <Spinner size={16} />
    </>
  );
};

export default Main;
