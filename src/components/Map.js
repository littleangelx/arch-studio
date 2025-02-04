"use client";

import { useMediaQuery } from "react-responsive";

const Map = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let imageSize;

  if (isMobile) {
    imageSize = "mobile";
  } else if (isDesktop) {
    imageSize = "desktop";
  } else {
    imageSize = "tablet";
  }

  return (
    <img
      src={`/assets/contact/${imageSize}/image-map.png`}
      alt="Map showing locations of both offices"
      className=""
    />
  );
};

export default Map;
