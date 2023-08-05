const ToDo = (props) => {
  return (
    <>
      <div className="list">
        <i
          class="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ToDo;
