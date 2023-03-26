import { useState } from "react";

function Card(props) {
  const [fill, setFill] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [show, setShow] = useState(true);

  function HandleClick(name) {
    setFill(!fill);
    props.setBucketList((prev) => [...prev, name]);
    props.setCnt((p) => p + 1);
  }

  return (
    <div className="Card">
      <img className="CardImage" src={props.image[imgIndex]} alt="Image.png" />
      <i
        style={{
          cursor: "pointer",
          position: "absolute",
          top: 20,
          right: 20,
          fontSize: 25,
          borderColor: "white",
          color: "white"
        }}
        onClick={() => HandleClick(props.name)}
        class={fill ? "fa fa-heart" : "fa fa-heart-o"}
      ></i>

      <i
        onMouseIn={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        style={{
          display: show ? "block" : "none",
          cursor: "pointer",
          position: "absolute",
          top: 140,
          left: 20,
          fontSize: 25,
          borderColor: "white",
          color: "white"
        }}
        onClick={() => {
          if (imgIndex - 1 >= 0) setImgIndex(imgIndex - 1);
        }}
        class="fa fa-caret-left"
      ></i>

      <i
        onMouseIn={() => setShow(true)}
        style={{
          display: show ? "block" : "none",
          cursor: "pointer",
          position: "absolute",
          top: 140,
          right: 20,
          fontSize: 25,
          borderColor: "white",
          color: "white"
        }}
        onClick={() => {
          if (imgIndex + 1 < props.image.length) setImgIndex(imgIndex + 1);
        }}
        class="fa fa-caret-right"
      ></i>
      <div style={{ display: "flex", position: "relative", paddingTop: 10 }}>
        <h3 style={{ position: "absolute", left: 0, margin: 5 }}>
          {props.name}
        </h3>
        <p style={{ position: "absolute", right: 5, margin: 5 }}>
          ⭐ {props.rating}
        </p>
      </div>

      <div style={{ position: "relative", top: 30 }}>
        <p style={{ margin: 5 }}>1,444 kilometers away</p>
        <p style={{ margin: 5 }}>16-20 March</p>
        <p style={{ margin: 5 }}>
          <b>₹ {props.price}</b> night
        </p>
      </div>
    </div>
  );
}
export default Card;
