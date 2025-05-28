import { useParams } from "react-router-dom";
import { scamdata } from "../component/dataforproject";
import ScamInfoBox from "../component/ScamInfoBox";
import { useState } from "react";
import { ReUsableButton } from "../component/utility";
const TrainingProgram = () => {
  const { programName } = useParams();
  const scam = scamdata[programName];
  const [clickCount, setClickCount] = useState(0);
  const handlePositiveClick = () => {
    setClickCount((prev) => prev + 1);
    console.log(clickCount);
  };
  const handleNegativeClick = () => {
    setClickCount((prev) => prev - 1);
    console.log(clickCount);
  };

  if (!scam) {
    return (
      <div className="error">
        You do not possess the ability to break out of the Matrix yet.
      </div>
    );
  }

  return (
    <div className="scamtype">
      <span hidden={clickCount !== 1}>
        <ScamInfoBox scamKey="Type of Scam:" writeUp={scam.scamType} />
      </span>
      <span hidden={clickCount !== 2}>
        <ScamInfoBox
          scamKey="These kids of data on you make this scam easier to accomplish:"
          writeUp={scam.dataPoints}
        />
      </span>
      <span hidden={clickCount !== 3}>
        <ScamInfoBox
          scamKey="The attacker(s) gathered this data from:"
          writeUp={scam.breachType}
        />
      </span>
      <span hidden={clickCount !== 4}>
        <ScamInfoBox
          scamKey="Attacker's main target(s):"
          writeUp={scam.mainTargets}
        />
      </span>
      <span hidden={clickCount !== 5}>
        <ScamInfoBox scamKey="Defend yourself!" writeUp={scam.howToDefend} />
      </span>
      <span hidden={clickCount !== 6}>
        <ScamInfoBox scamKey="More Details:" writeUp={scam.details} />
      </span>
      <span hidden={clickCount !== 7}>
        <ScamInfoBox
          scamKey="Curiosity Killed the cat...."
          writeUp={scam.kindOfCurious}
        />
      </span>
      <span hidden={clickCount !== 8}>
        <ScamInfoBox
          scamKey="I can see you really want to learn, here you go:"
          writeUp={scam.moreDetailsOne}
        />
      </span>
      <span hidden={clickCount !== 9}>
        <ScamInfoBox
          scamKey="You are now a master"
          writeUp={scam.wayTooManyDetails}
        />
      </span>
      <span hidden={clickCount !== 10}>
        <ScamInfoBox
          scamKey="Now for the sad stuff."
          writeUp={scam.theRealDarkness}
        />
      </span>

      <button hidden={!(clickCount > 0)} onClick={handleNegativeClick}>
        Go back, I need more time to read.
      </button>
      <button
        hidden={!(clickCount >= 0 && clickCount <= 7)}
        onClick={handlePositiveClick}
      >
        Learn More
      </button>
      <button
        hidden={!(clickCount >= 7 && clickCount <= 10)}
        onClick={handlePositiveClick}
      >
        The dedication to your craft is admirable
      </button>
      <span hidden={clickCount <= 10}>
        <ReUsableButton path="/Training-Room" name="Take me Back to the Dojo" />
      </span>
    </div>
  );
};

export default TrainingProgram;
