import { useState } from "react";

const Input = ({
  label,
  value,
  onChange,
  onBlur,
  error,
  left,
  right,
  type = "number",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label className="flex flex-col gap-2 text-slate700">
      {label}
      <div
        className={`group flex cursor-pointer items-center rounded-sm outline outline-1 ${
          error
            ? "outline-red"
            : isFocused
              ? "outline-lime"
              : "outline-slate500 hover:outline-slate900"
        } transition duration-300 ease-in-out`}
      >
        {left && (
          <span
            className={`p-3 text-lg font-bold transition duration-300 ${
              error
                ? "bg-red text-white"
                : isFocused
                  ? "bg-lime text-slate-900"
                  : "group-hover:bg-slate200 bg-slate100 text-slate700"
            }`}
          >
            {left}
          </span>
        )}
        <input
          className="w-full cursor-pointer p-2 text-lg font-bold text-slate900 caret-slate900 outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur(e);
          }}
          onChange={onChange}
          value={value}
          type={type}
        />
        {right && (
          <span
            className={`p-3 text-lg font-bold transition duration-300 ${
              error
                ? "bg-red text-white"
                : isFocused
                  ? "bg-lime text-slate-900"
                  : "group-hover:bg-slate200 bg-slate100 text-slate700"
            }`}
          >
            {right}
          </span>
        )}
      </div>
      <div className="h-1">
        {error && <span className="text-red">{error}</span>}
      </div>
    </label>
  );
};

export default Input;
