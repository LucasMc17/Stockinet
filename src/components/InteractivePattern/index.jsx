import PatternRow from "./PatternRow.jsx";
import "./index.module.scss";

function getRowWidth(row) {
  return row.reduce((a, b) => a + b.width, 0);
}

export default function InteractivePattern({ data }) {
  const maxWidth = data.reduce((a, b) => {
    const width = getRowWidth(b);
    return width > a ? width : a;
  }, 1);
  return (
    <div className="interactive-pattern-holder">
      <div className="interactive-pattern">
        {data.map((row, i) => {
          return <PatternRow row={row} key={i} rowWidth={maxWidth} />;
        })}
      </div>
    </div>
  );
}
