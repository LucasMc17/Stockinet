import LoadingWheel from "../icons/LoadingWheel.jsx";
import anime from "animejs";
import { useRef, useEffect } from "react";
import "./LoadingScreen.module.scss";

export default function LoadingScreen({ header, text }) {
  const wheel = useRef(null);

  function spin() {
    anime({
      targets: wheel.current,
      rotateZ: "1turn",
      easing: "linear",
      duration: 1000,
      loop: true,
    });
  }

  useEffect(() => {
    spin();
  }, [wheel]);

  return (
    <div className="card loading-screen">
      <div ref={wheel} className="pinwheel">
        <LoadingWheel />
      </div>
    </div>
  );
}
