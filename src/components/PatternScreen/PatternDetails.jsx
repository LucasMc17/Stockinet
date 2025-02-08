import "./PatternDetails.module.scss";
import { Squares, Bars } from "../../icons";
import SectionHeader from "../SectionHeader.jsx";
import MaterialCard from "./MaterialCard.jsx";

export default function PatternDetails({ yarns, needles, sizes }) {
  return (
    <>
      <section className="pattern-detail">
        <SectionHeader svg={Squares} name="Sizes" />
        <div className="material-card-holder">
          {sizes.map((size, i) => (
            <MaterialCard key={i}>
              <h2>{size.name}</h2>
              <p>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </MaterialCard>
          ))}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>{" "}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>{" "}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>{" "}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>{" "}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>{" "}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>{" "}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>{" "}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>{" "}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>{" "}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>{" "}
          <MaterialCard>
            <h2>Lorem</h2>
          </MaterialCard>
        </div>
      </section>
      <section className="pattern-detail">
        <SectionHeader svg={Bars} name="Needles" />
        <div className="material-card-holder">
          {needles.map((needle, i) => (
            <MaterialCard key={i}>
              {needle.customDescription ? (
                <h4>{needle.customDescription}</h4>
              ) : (
                <h4>
                  Size {needle.size} {needle.material} {needle.type} needles
                </h4>
              )}
            </MaterialCard>
          ))}
        </div>
      </section>
      <section className="pattern-detail">
        <SectionHeader svg={Bars} name="Yarn" />
        <div className="material-card-holder">
          {yarns.map((yarn, i) => (
            <MaterialCard key={i}>
              {yarn.customDescription ? (
                <h4>{yarn.customDescription}</h4>
              ) : (
                <h4>
                  Weight {yarn.weight} {yarn.color} yarn, {yarn.yardage} yards
                </h4>
              )}
            </MaterialCard>
          ))}
        </div>
      </section>
    </>
  );
}
