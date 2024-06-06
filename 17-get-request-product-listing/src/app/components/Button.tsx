export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {props.btnName}
      </button>
    </div>
  );
}
