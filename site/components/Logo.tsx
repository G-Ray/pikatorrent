import React, { useEffect, useState } from "react";

export const Logo = ({ width = 96 }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo.svg" alt="pikatorrent logo" width={width} />;
};
