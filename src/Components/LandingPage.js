import Data from "./Data";
import ListItem from "./ListItems";
import Card from "./Card/Card";
import { useState } from "react";

function LandingPage({ setBucketList, setCnt }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="LandingPage">
      <ListItem index={index} setIndex={setIndex} />
      <hr />
      <div className="LandingPageCards">
        {Data[index].Locations.map((e) => (
          <Card
            setCnt={setCnt}
            setBucketList={setBucketList}
            image={e.images}
            name={e.name}
            rating={e.rating}
            price={e.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
