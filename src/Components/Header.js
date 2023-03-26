import { useState } from "react";
import Data from "./Data";

function Header({ setBucketList, bucketList, cnt }) {
  const [show, setShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function HandleDelete(name) {
    setBucketList(
      bucketList.filter((e) => {
        return e !== name;
      })
    );
  }

  function HandleClick() {
    setSearchShow(!searchShow);
  }

  return (
    <div>
      <div style={{ display: show ? "block" : "none" }} className="Bucket">
        {bucketList.map((e) => (
          <div style={{ display: "flex" }}>
            <p style={{ margin: 4 }}>
              👉&nbsp;{e}&nbsp;{" "}
              <i
                onClick={() => {
                  HandleDelete(e);
                }}
                style={{ cursor: "pointer" }}
                class="fa fa-close"
              ></i>
            </p>
          </div>
        ))}
      </div>
      <div className="Header">
        <img src={require("./logo.png")} alt="Logo" />

        <div className="CenterButton">
          <input
            placeholder="search Destination"
            onChange={handleChange}
            style={{ display: searchShow ? "block" : "none" }}
          />

          <p style={{ display: !searchShow ? "block" : "none" }}>
            Anywhere &nbsp; &nbsp;
          </p>
          <p style={{ display: !searchShow ? "block" : "none" }}>
            {" "}
            Any week &nbsp; &nbsp;
          </p>
          <p style={{ display: !searchShow ? "block" : "none" }}>
            {" "}
            Add guests &nbsp; &nbsp;
          </p>

          <span onClick={HandleClick} className="SearchBox">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <div className="SideButtons" onClick={() => setShow(!show)}>
          <p>Bucket List</p>
          &nbsp;
          <span className="UserBox">
            <i class="fas fa-archive"></i>
          </span>
          <p
            style={{ display: cnt == 0 ? "none" : "block" }}
            className="BucketList"
          >
            {bucketList.length}
          </p>
        </div>
        <div className="cornerButtons">
          <i class="fa fa-regular fa-bars"></i>
          &nbsp; &nbsp;
          <span className="UserBox">
            <i class="fa fa-user"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
