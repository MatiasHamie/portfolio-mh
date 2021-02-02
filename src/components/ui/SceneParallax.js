import React, { useEffect, useRef } from "react";
import capa1 from "../../assets/img/capa_1.png";
import capa2 from "../../assets/img/capa_2.png";
// import capa3 from "../../assets/img/capa_3.png";

import Parallax from "parallax-js";

const SceneParallax = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneRef.current, {
      relativeInput: true,
      limitX: 10,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div id="scene" ref={sceneRef}>
      <img className="capa1" src={capa1} alt="capa1" data-depth=".2" />
      <img className="capa2" src={capa2} alt="capa2" data-depth=".7" />
      {/* <img className="capa3" src={capa3} alt="capa2" data-depth=".9" /> */}
    </div>
  );
};

export default SceneParallax;
