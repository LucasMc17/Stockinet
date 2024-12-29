import PatternCell from "./PatternCell.jsx";
import "./PatternRow.module.scss";

export default function PatternRow({ row, rowWidth }) {
  return (
    <div className="interactive-pattern-row">
      {row.map((cell, i) => {
        return <PatternCell cell={cell} key={i} rowWidth={rowWidth} />;
      })}
    </div>
  );
}
