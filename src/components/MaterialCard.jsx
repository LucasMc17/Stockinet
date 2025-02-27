import "./MaterialCard.module.scss";

export default function MaterialCard({ children, onClick }) {
  return (
    <div onClick={onClick} className="material-card">
      {children}
    </div>
  );
}
