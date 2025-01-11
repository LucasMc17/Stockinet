import { ChevronDown, ChevronUp } from "../../icons";
import "./DropDown.module.scss";
import { useState, useRef, useEffect } from "react";
import { useDetectClickAway } from "../../hooks";
import anime from "animejs";

export default function DropDown({
  name,
  options,
  defaultIndex = 0,
  onSelect,
}) {
  const [selected, setSelected] = useState(options[defaultIndex]);
  const [open, setOpen] = useState(false);
  const ref = useRef(),
    animRef = useRef();

  // 23px per number of lines OR 500px, whatever is less
  const maxHeight = 23 * options.length;

  useEffect(() => {
    if (open) {
      anime({
        targets: animRef.current,
        maxHeight: `${maxHeight > 500 ? 500 : maxHeight}px`,
        easing: "linear",
        duration: 100,
      });
    } else {
      anime({
        targets: animRef.current,
        maxHeight: "0px",
        easing: "linear",
        duration: 100,
      });
    }
  }, [open]);

  function toggleOpen() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  useDetectClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <div className="drop-down" ref={ref}>
      <div className="dd-box" onClick={toggleOpen}>
        <div className="dd-label-box">
          <small>{name}</small>
          <span>{selected.name}</span>
        </div>
        {open ? <ChevronDown /> : <ChevronUp />}
      </div>
      <menu className={`dd-menu ${!open && ""}`} ref={animRef}>
        <ul>
          {options.map((op) => (
            <li
              onClick={() => {
                setSelected(op);
                if (typeof onSelect === "function") {
                  onSelect(op);
                }
                setOpen(false);
              }}
            >
              {op.name}
            </li>
          ))}
        </ul>
      </menu>
    </div>
  );
}
