const ScamInfoBox = ({ scamKey, writeUp }) => {
  return (
    <main>
    <div>
      <h3>{scamKey}</h3>
      <p>{writeUp}</p>
    </div>
    </main>
  );
};
export default ScamInfoBox;
