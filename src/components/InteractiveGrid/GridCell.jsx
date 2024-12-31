import "./GridCell.module.scss";

export default function GridCell({ cell, rowWidth }) {
  const symbolMap = {
      K: "",
      P: "-",
    },
    baseWidth = 100 / rowWidth;
  let width = baseWidth;
  if (cell.width) {
    width = width * cell.width;
  }

  return (
    <div
      className="cell-holder"
      style={{
        width: width + "%",
      }}
    >
      <div className="interactive-grid-cell-symbols">
        <p>{symbolMap[cell.type] || ""}</p>
        <p>{cell.width > 1 && cell.width}</p>
      </div>
      <div
        className="interactive-grid-cell"
        style={{
          paddingTop: "calc(100% / " + cell.width + ")",
        }}
      ></div>
    </div>
  );
}
