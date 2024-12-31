import GridCell from "./GridCell.jsx";
import "./GridRow.module.scss";

export default function GridRow({ row, rowWidth }) {
  return (
    <div className="interactive-grid-row">
      {row.map((cell, i) => {
        return <GridCell cell={cell} key={i} rowWidth={rowWidth} />;
      })}
    </div>
  );
}
