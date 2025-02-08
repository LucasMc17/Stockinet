import "./SectionHeader.module.scss";

export default function SectionHeader({ svg, name }) {
  return (
    <header className="section-header">
      {svg()}
      <span>{name}</span>
    </header>
  );
}
