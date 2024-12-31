import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPatternPreview } from "../@redux/reducers/Patterns/PatternSlice";

export default function PatternPreviewScreen() {
  const { patternId } = useParams();
  const dispatch = useDispatch();
  const { currentPattern } = useSelector((s) => s.patterns);

  useEffect(() => {
    dispatch(fetchPatternPreview(patternId));
  }, []);

  console.log(currentPattern);

  return <></>;
}
