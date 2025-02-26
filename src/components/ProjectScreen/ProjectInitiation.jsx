import { useDispatch } from "react-redux";
import { selectCurrentSize } from "../../@redux/reducers/Workspace/WorkspaceSlice";

export default function ProjectInitiation({ sizes, projectId }) {
  const dispatch = useDispatch();

  return (
    <div>
      {sizes.map((size) => (
        <div
          onClick={() => {
            dispatch(selectCurrentSize({ sizeId: size.id, projectId }));
          }}
        >
          {size.name}
        </div>
      ))}
    </div>
  );
}
