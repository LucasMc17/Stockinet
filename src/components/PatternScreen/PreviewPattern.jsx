import PatternImages from "./PatternImages.jsx";
import PatternHeader from "./PatternHeader.jsx";
import "./PreviewPattern.module.scss";

export default function PreviewPattern({ currentPattern }) {
  const images = [currentPattern.leadImage, ...currentPattern.images];

  return (
    <section id="pattern">
      <PatternHeader
        title={currentPattern.title}
        author={currentPattern.author}
        difficulty={currentPattern.difficulty}
      />
      <div className="pattern-previewscreen">
        <PatternImages
          images={images}
          description={currentPattern.description}
        />
        <div className="card">
          <h3>What you'll need</h3>
          {/* <ul>
              {currentPattern.materials.map((mat) => (
                <li>
                  {mat.name}
                  {mat.quantity && `: ${mat.quantity}`}
                </li>
              ))}
            </ul> */}
        </div>
      </div>
    </section>
  );
}
