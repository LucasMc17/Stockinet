import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingScreen, ErrorScreen } from "../components";
import {
  fetchAuthor,
  clearAuthor,
} from "../@redux/reducers/Authors/AuthorSlice.js";

export default function AuthorScreen() {
  const dispatch = useDispatch();
  const { authorSlug } = useParams();
  const { currentAuthor, error, loading } = useSelector((s) => s.authors);

  useEffect(() => {
    dispatch(fetchAuthor(authorSlug));
    return () => {
      dispatch(clearAuthor());
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  if (currentAuthor) {
    return <div>{currentAuthor.username}</div>;
  }
}
