export default function Toggle(props: {
  checked: boolean;
  onChange: () => void;
  disabled: boolean;
}) {
  return (
    <div className="flex items-center justify-end flex-1">
      <button
        disabled={props.disabled}
        onClick={props.onChange}
      >
        List
      </button>
      <button
        disabled={props.disabled}
        onClick={props.onChange}
        
      >
        JSON
      </button>
    </div>
  );
}
