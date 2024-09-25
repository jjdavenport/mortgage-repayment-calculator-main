import icon from "./assets/icon-calculator.svg";

const Form = ({
  onClick,
  onSubmit,
  rate,
  setRate,
  term,
  setTerm,
  amount,
  setAmount,
  error,
  button,
  setButton,
}) => {
  const change = (value, e) => {
    if (value === "amount") {
      setAmount(e.target.value);
    } else if (value === "term") {
      setTerm(e.target.value);
    } else if (value === "rate") {
      setRate(e.target.value);
    } else {
      return;
    }
  };

  return (
    <>
      <main>
        <h1>Mortgage Calculator</h1>
        <button className="underline" onClick={onClick}>
          Clear All
        </button>
        <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            Mortgage Amount
            <div>
              <span>£</span>
              <input
                onChange={(e) => change("amount", e)}
                value={amount}
                type="number"
              />
            </div>
            {error && <span>{error}</span>}
          </label>
          <label className="flex flex-col">
            Mortgage Term
            <div className="flex flex-row-reverse">
              <span>years</span>
              <input
                onChange={(e) => change("term", e)}
                value={term}
                type="number"
              />
            </div>
            {error && <span>{error}</span>}
          </label>
          <label className="flex flex-col">
            Interest Rate
            <div className="flex flex-row-reverse">
              <span>%</span>
              <input
                onChange={(e) => change("rate", e)}
                value={rate}
                type="number"
              />
            </div>
            {error && <span>{error}</span>}
          </label>
          <label className="flex flex-col gap-2">
            Mortgage Type
            <button type="button" onClick={() => setButton("repayment")}>
              Repayment
              <div
                className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-gray-500 ${
                  button === "repayment" ? "bg-blue-500" : "bg-transparent"
                }`}
              ></div>
            </button>
            <button type="button" onClick={() => setButton("interest")}>
              Interest Only
              <div
                className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-gray-500 ${
                  button === "interest" ? "bg-blue-500" : "bg-transparent"
                }`}
              ></div>
            </button>
            {error && <span>{error}</span>}
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
