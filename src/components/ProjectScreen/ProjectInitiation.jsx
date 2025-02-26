import { useDispatch } from "react-redux";
import { selectCurrentSize } from "../../@redux/reducers/Workspace/WorkspaceSlice";

export default function ProjectInitiation({ sizes }) {
  const dispatch = useDispatch();

  return (
    <div>
      {sizes.map((size) => (
        <div
          onClick={() => {
            dispatch(selectCurrentSize(size.id));
          }}
        >
          {size.name}
        </div>
      ))}
    </div>
  );
}
