import { useDispatch } from "react-redux";
import { selectCurrentSize } from "../../@redux/reducers/Workspace/WorkspaceSlice";
import SectionHeader from "../SectionHeader.jsx";
import MaterialCard from "../MaterialCard.jsx";
import { Bars, Squares } from "../../icons";
import PatternCard from "../PatternCard.jsx";

export default function ProjectInitiation({ currentProject }) {
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Let's start {currentProject.title}!</h1>
      {/* <PatternCard
        image={currentProject.leadImage}
        title={currentProject.title}
      /> */}
      <h3>First, make sure you have what you need:</h3>
      <SectionHeader svg={Bars} name="Needles" />
      {currentProject.needles.map((needle, i) => (
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
      <SectionHeader svg={Bars} name="Yarn" />
      {currentProject.yarns.map((yarn, i) => (
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
      <h3>Next, let's choose a size to make!</h3>
      <h4>(Don't worry, you can change this later if you want)</h4>
      <SectionHeader svg={Squares} name="Sizes" />
      {currentProject.sizes.map((size, i) => (
        <MaterialCard
          key={i}
          onClick={() => {
            dispatch(
              selectCurrentSize({
                sizeId: size.id,
                projectId: currentProject.project.id,
              }),
            );
          }}
        >
          <h2>{size.name}</h2>
          <p>{size.description}</p>
        </MaterialCard>
      ))}
    </section>
  );
}
