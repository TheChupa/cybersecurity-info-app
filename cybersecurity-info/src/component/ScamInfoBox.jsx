const ScamInfoBox = ({ scamKey, writeUp }) => {
  return (
    <div>
      <h3>{scamKey}</h3>
      <p>{writeUp}</p>
    </div>
  );
};
export default ScamInfoBox;
