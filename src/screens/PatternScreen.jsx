import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LoadingScreen,
  ErrorScreen,
  PatternOverview,
  HeroImages,
  PatternDetails,
} from "../components";
import {
  fetchOnePattern,
  selectPattern,
} from "../@redux/reducers/Patterns/PatternSlice.js";

export default function PatternScreen() {
  const dispatch = useDispatch();
  const { patternSlug } = useParams();
  const { currentPattern, patternList, loading, error } = useSelector(
    (s) => s.patterns,
  );

  useEffect(() => {
    // Caching solution (needs update eventually)
    // const pattern = patternList.find((pat) => {
    //   return pat.id === Number(patternId);
    // });
    // if (pattern?.fullyLoaded) {
    //   dispatch(selectPattern(pattern));
    // } else {
    dispatch(fetchOnePattern(patternSlug));
    // }
    return () => {
      dispatch(selectPattern(null));
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  if (currentPattern) {
    const images = [currentPattern.leadImage, ...currentPattern.images];
    return (
      <>
        <HeroImages images={images} limit={3} />
        <PatternOverview
          title={currentPattern.title}
          author={currentPattern.author}
          description={currentPattern.description}
          avgRating={4.5}
          ratings={53}
        />
        <PatternDetails
          yarns={currentPattern.yarns}
          needles={currentPattern.needles}
          sizes={currentPattern.sizes}
        />
      </>
    );
  }

  // if (currentPattern?.owned) {
  //   return <FullPattern currentPattern={currentPattern} />;
  // } else if (currentPattern) {
  //   return <PreviewPattern currentPattern={currentPattern} />;
  // }
}
