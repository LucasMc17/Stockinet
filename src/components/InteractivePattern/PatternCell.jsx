import "./PatternCell.module.scss";

export default function PatternCell({ cell, rowWidth }) {
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
      <div className="interactive-pattern-cell-symbols">
        <p>{symbolMap[cell.type] || ""}</p>
        <p>{cell.width > 1 && cell.width}</p>
      </div>
      <div
        className="interactive-pattern-cell"
        style={{
          paddingTop: "calc(100% / " + cell.width + ")",
        }}
      ></div>
    </div>
  );
}
