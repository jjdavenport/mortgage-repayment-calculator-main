import { useState } from "react";

const Form = ({ inputs, data }) => {
  const [input, setInput] = useState({
    amount: "",
    term: "",
    rate: "",
    checked: "",
  });

  const [error, setError] = useState({});

  const validate = (input) => {
    let error = {};
    for (let i in input) {
      if (!input[i]) {
        error[i] = "This Field is required";
      }
    }
    return error;
  };

  const clear = () => {
    setError({});
    setInput({
      amount: "",
      term: "",
      rate: "",
      checked: "",
    });
  };

  const change = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    const validationError = validate(input);
    if (Object.keys(validationError).length === 0) {
      setInput({
        amount: "",
        term: "",
        rate: "",
        checked: "",
      });
      setError({});
    }
    setError(validationError);
  };

  return (
    <>
      <main>
        <h1>{data.h1}</h1>
        <button onClick={clear}>{data.clearBtn}</button>
        <form noValidate onSubmit={submit} className="flex flex-col gap-4">
          {inputs.map(
            (i, index) =>
              i.input && (
                <label key={index} htmlFor={i.name}>
                  {i.label}
                  <div
                    className={`${i.position === "left" ? "flex-row" : "flex-row-reverse"} flex`}
                  >
                    <span
                      className={`${error[i.name] ? "bg-red-500" : "bg-white"}`}
                    >
                      {i.units}
                    </span>
                    <input
                      onChange={change}
                      type={i.type}
                      value={input[i.name]}
                      name={i.name}
                    />
                  </div>
                  {error[i.name] && <p>{error[i.name]}</p>}
                </label>
              ),
          )}
          {inputs
            .filter((i) => !i.input)
            .map(
              (i, index) =>
                i.options && (
                  <label key={index} className="flex flex-col">
                    {i.label}
                    {i.options.map((i, index) => (
                      <button key={index} type={i.buttonType}>
                        <input
                          type={i.type}
                          name={i.name}
                          value={i.value}
                          checked={input[i.name] === i.value}
                          onChange={change}
                        />
                        {i.button}
                      </button>
                    ))}
                    {error[i.options[0].name] && (
                      <p>{error[i.options[0].name]}</p>
                    )}
                  </label>
                ),
            )}
          <button type="submit">
            <img src={data.btnIcon} />
            {data.btnText}
          </button>
        </form>
      </main>
    </>
  );
};

export default Form;
