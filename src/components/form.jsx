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
  setError,
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

  const click = (value) => {
    setButton(value);
    setError((prev) => ({
      ...prev,
      button: "",
    }));
  };

  const blur = (val, e) => {
    const blank = "This field is required";
    const value = e.target.value;
    setError((prev) => ({
      ...prev,
      [val]: value ? "" : blank,
    }));
  };

  return (
    <>
      <section className="flex flex-col gap-2 p-4">
        <h1 className="text-2xl">Mortgage Calculator</h1>
        <button className="w-fit text-left underline" onClick={onClick}>
          Clear All
        </button>
        <form noValidate onSubmit={onSubmit} className="flex flex-col gap-8">
          <label className="flex flex-col gap-2">
            Mortgage Amount
            <div className="hover:outline-lime focus-within:outline-lime group flex cursor-pointer items-center gap-2 focus-within:outline focus-within:outline-1 hover:outline hover:outline-1">
              <span>£</span>
              <input
                className="cursor-pointer p-1 outline-none"
                onBlur={(e) => blur("amount", e)}
                onChange={(e) => change("amount", e)}
                value={amount}
                type="number"
              />
            </div>
            {error.amount && <span>{error.amount}</span>}
          </label>
          <label className="flex flex-col gap-2">
            Mortgage Term
            <div className="hover:outline-lime focus-within:outline-lime group flex cursor-pointer flex-row items-center focus-within:outline focus-within:outline-1 hover:outline hover:outline-1">
              <input
                className="w-full cursor-pointer p-1 outline-none"
                onBlur={(e) => blur("term", e)}
                onChange={(e) => change("term", e)}
                value={term}
                type="number"
              />
              <span>years</span>
            </div>
            {error.term && <span className="text-red">{error.term}</span>}
          </label>
          <label className="flex flex-col gap-2">
            Interest Rate
            <div className="hover:outline-lime focus-within:outline-lime group flex w-full cursor-pointer flex-row items-center outline-none focus-within:outline focus-within:outline-1 hover:outline hover:outline-1">
              <input
                className="w-full cursor-pointer p-1 outline-none"
                onBlur={(e) => blur("rate", e)}
                onChange={(e) => change("rate", e)}
                value={rate}
                type="number"
              />
              <span>%</span>
            </div>
            {error.rate && <span className="text-red">{error.rate}</span>}
          </label>
          <label className="flex flex-col gap-2">
            Mortgage Type
            <button
              className="outline-slate900 flex items-center gap-2 p-2 outline outline-1"
              type="button"
              onClick={() => click("repayment")}
            >
              <div
                className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-gray-500 ${
                  button === "repayment" ? "bg-lime" : "bg-transparent"
                }`}
              ></div>
              Repayment
            </button>
            <button
              type="button"
              className="outline-slate900 flex items-center gap-2 p-2 outline outline-1"
              onClick={() => click("interest")}
            >
              <div
                className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-gray-500 ${
                  button === "interest" ? "bg-lime" : "bg-transparent"
                }`}
              ></div>
              Interest Only
            </button>
            {error.button && <span className="text-red">{error.button}</span>}
          </label>
          <button
            className="bg-lime flex w-full justify-center gap-2 rounded-full p-2"
            type="submit"
          >
            <img src={icon} />
            Calculate Repayments
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
