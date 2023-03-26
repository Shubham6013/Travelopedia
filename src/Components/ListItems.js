import Data from "./Data";

function ListItem(props) {
  function HandleClick(i) {
    props.setIndex(i);
  }

  return (
    <div className="ItemsList">
      {Data.map((item, i) => {
        return (
          <div
            className="Item"
            style={{
              color: props.index === i ? "black" : "grey",
              alignItems: "center"
            }}
            onClick={() => HandleClick(i)}
          >
            <i style={{ fontSize: 20, paddingLeft: 18 }} class={item.icon} />
            <p> {item.category} </p>
          </div>
        );
      })}
    </div>
  );
}

export default ListItem;
