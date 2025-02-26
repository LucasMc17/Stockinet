import DropDown from "../Inputs/DropDown.jsx";
import { selectCurrentSize } from "../../@redux/reducers/Workspace/WorkspaceSlice.js";
import { useDispatch } from "react-redux";

export default function ProjectHead({ sizes, size }) {
  const dispatch = useDispatch();

  return (
    <section className="card">
      <h2>Pattern Title</h2>
      <DropDown
        name="Size"
        options={sizes.map((size) => ({ name: size.name, value: size.id }))}
        defaultValue={size}
        onSelect={(size) => {
          dispatch(selectCurrentSize(size.value));
        }}
      />
    </section>
  );
}
