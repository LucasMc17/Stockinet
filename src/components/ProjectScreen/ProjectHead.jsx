import DropDown from "../Inputs/DropDown.jsx";

export default function ProjectHead({ sizes }) {
  return (
    <section className="card">
      <h2>Pattern Title</h2>
      <DropDown
        name="Size"
        options={[
          {
            name: "Small",
            value: "small",
          },
          {
            name: "Large",
            value: "large",
          },
        ]}
        // onSelect={(selected) => {
        //   setSearchState({ ...searchState, sortBy: selected });
        // }}
      />
    </section>
  );
}
