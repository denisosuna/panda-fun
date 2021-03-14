import React from "react";
import useNearScreen from "hooks/useNearScreen";
const TreandingSeaches = React.lazy(()=> import("./TreandingSeaches"))

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "150px"});

  return <div ref={fromRef}>{isNearScreen ? <TreandingSeaches /> : null}</div>;
}
