import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import MobileHeader from "./Components/MobileHeader";
import "./styles.css";
import useViewport from "./Components/viewpoint";
import Login from "./Components/Login";

export default function App() {
  const [bucketList, setBucketList] = useState([]);
  const [cnt, setCnt] = useState(0);

  const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;
    return width < breakpoint ? (
      <MobileHeader
        setBucketList={setBucketList}
        bucketList={bucketList}
        cnt={cnt}
      />
    ) : (
      <Header setBucketList={setBucketList} bucketList={bucketList} cnt={cnt} />
    );
  };

  return (
    <div>
      <Login />
      <MyComponent />
      {/* <Header setBucketList={setBucketList} bucketList={bucketList} cnt={cnt} /> */}
      <hr />
      <LandingPage setBucketList={setBucketList} setCnt={setCnt} />
      <Footer />
    </div>
  );
}
