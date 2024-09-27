import icon from "./assets/icon-calculator.svg";
import Input from "./input";

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
      <section className="flex flex-col gap-6 p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-slate900">
            Mortgage Calculator
          </h1>
          <button
            className="w-fit text-left text-slate700 underline underline-offset-2 transition duration-300 ease-in-out hover:text-slate900"
            onClick={onClick}
          >
            Clear All
          </button>
        </div>
        <form noValidate onSubmit={onSubmit} className="flex flex-col gap-8">
          <Input
            label="Mortgage Amount"
            value={amount}
            onChange={(e) => change("amount", e)}
            onBlur={(e) => blur("amount", e)}
            error={error.amount}
            left="£"
          />
          <Input
            label="Mortgage Term"
            value={term}
            onChange={(e) => change("term", e)}
            onBlur={(e) => blur("term", e)}
            error={error.term}
            right="years"
          />
          <Input
            label="Interest Rate"
            value={rate}
            onChange={(e) => change("rate", e)}
            onBlur={(e) => blur("rate", e)}
            error={error.rate}
            right="%"
          />
          <label className="flex flex-col gap-2 text-slate700">
            Mortgage Type
            <button
              className={`${button === "repayment" ? "bg-lime bg-opacity-20 outline-lime" : "bg-none outline-slate500 hover:outline-lime"} flex items-center gap-4 rounded-sm p-3 text-lg font-bold text-slate900 outline outline-1 transition duration-300 ease-in-out`}
              type="button"
              onClick={() => click("repayment")}
            >
              <div
                className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 ${button === "repayment" ? "border-lime" : "border-gray-500"}`}
              >
                <div
                  className={`flex h-3 w-3 items-center justify-center rounded-full ${button === "repayment" ? "bg-lime" : "bg-transparent"} `}
                ></div>
              </div>
              Repayment
            </button>
            <button
              type="button"
              className={`${button === "interest" ? "bg-lime bg-opacity-20 outline-lime" : "bg-none outline-slate500 hover:outline-lime"} flex items-center gap-4 rounded-sm p-3 text-lg font-bold text-slate900 outline outline-1 transition duration-300 ease-in-out`}
              onClick={() => click("interest")}
            >
              <div
                className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 ${button === "interest" ? "border-lime" : "border-gray-500"}`}
              >
                <div
                  className={`flex h-3 w-3 items-center justify-center rounded-full ${button === "interest" ? "bg-lime" : "bg-transparent"} `}
                ></div>
              </div>
              Interest Only
            </button>
            {error.button && <span className="text-red">{error.button}</span>}
          </label>
          <button
            className="flex w-full transform justify-center gap-2 rounded-full bg-lime p-3 text-lg font-bold text-slate900 duration-300 ease-in-out hover:bg-opacity-40"
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
