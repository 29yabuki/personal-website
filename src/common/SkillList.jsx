function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Minus icon" />
      <p>{skill}</p>
    </span>
  );
}
  
export default SkillList;