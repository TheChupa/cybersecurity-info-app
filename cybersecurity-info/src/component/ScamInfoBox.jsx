const ScamInfoBox = ({ scamKey, writeUp }) => {
  return (
    <main>
    <div className="info-card">
      <h3>{scamKey}</h3>
      <h6>{writeUp}</h6>
    </div>
    </main>
  );
};
export default ScamInfoBox;
