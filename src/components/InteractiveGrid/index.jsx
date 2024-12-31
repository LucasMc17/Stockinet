import GridRow from "./GridRow.jsx";
import "./index.module.scss";

function getRowWidth(row) {
  return row.reduce((a, b) => a + b.width, 0);
}

export default function InteractiveGrid({ gridName, data }) {
  const maxWidth = data.reduce((a, b) => {
    const width = getRowWidth(b);
    return width > a ? width : a;
  }, 1);
  return (
    <div className="interactive-grid-holder">
      <h2>{gridName}</h2>
      <div className="interactive-grid">
        {data.map((row, i) => {
          return <GridRow row={row} key={i} rowWidth={maxWidth} />;
        })}
      </div>
    </div>
  );
}
