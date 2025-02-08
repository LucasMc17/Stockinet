import "./PatternSizeInfo.module.scss";
import { Squares, Bars } from "../../icons";

export default function PatternDetails() {
  return (
    <>
      <section className="pattern-detail">
        <header className="section-header">
          <Squares />
          <span>Sizes</span>
        </header>
      </section>
      <section className="pattern-detail">
        <header className="section-header">
          <Bars />
          <span>Needles</span>
        </header>
      </section>
      <section className="pattern-detail">
        <header className="section-header">
          <Bars />
          <span>Yarn</span>
        </header>
      </section>
    </>
  );
}
