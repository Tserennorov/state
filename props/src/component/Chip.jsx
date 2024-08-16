export const Chip = (props) => {
  const { text, logo } = props;

  return (
    <div className="chip">
      <img src={logo} alt="logo" />
      <h6>{text}</h6>
    </div>
  );
};
