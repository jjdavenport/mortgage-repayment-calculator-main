import icon from "./assets/icon-calculator.svg";

const Form = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  const clear = () => {
    setInput("");
  };

  return (
    <>
      <main>
        <h1>Mortgage Calculator</h1>
        <button className="underline" onClick={clear}>
          Clear All
        </button>
        <form noValidate onSubmit={submit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            Mortgage Amount
            <div>
              <span>£</span>
              <input type="number" />
            </div>
          </label>
          <label className="flex flex-col">
            Mortgage Term
            <div className="flex flex-row-reverse">
              <span>years</span>
              <input type="number" />
            </div>
          </label>
          <label className="flex flex-col">
            Interest Rate
            <div className="flex flex-row-reverse">
              <span>%</span>
              <input type="number" />
            </div>
          </label>
          <label className="flex flex-col gap-2">
            Mortgage Type
            <button>Repayment</button>
            <button>Interest Only</button>
          </label>
          <button type="submit">
            <img src={icon} />
            Calculate Repayments
          </button>
        </form>
      </main>
    </>
  );
};

export default Form;
