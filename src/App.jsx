import Form from "./components/form";
import Footer from "./components/footer";
import Results from "./components/results";
import Empty from "./components/empty";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [button, setButton] = useState(false);
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitTotal, setSubmitTotal] = useState("");
  const [submitMonthly, setSubmitMonthly] = useState("");

  const validate = () => {
    const blank = "This field is required";
    const error = {};
    if (!amount) error.amount = blank;
    if (!term) error.term = blank;
    if (!rate) error.rate = blank;
    if (!button) error.button = blank;
    setError(error);
    return Object.keys(error).length === 0;
  };

  const clear = () => {
    setAmount("");
    setRate("");
    setTerm("");
    setButton("");
    setError({});
    setSubmitted(false);
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setSubmitMonthly(monthly());
      setSubmitTotal(total());
    } else {
      setSubmitted(false);
    }
  };

  const monthly = () => {
    const total = parseFloat(amount);
    const interestRate = rate / 100;
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    if (button === "repayment") {
      const totalInterest = total * interestRate * term;
      const totalPayment = total + totalInterest;
      const monthlyPayment = totalPayment / (term * 12);
      return monthlyPayment.toFixed(2).replace(regex, ",");
    } else if (button === "interest") {
      const monthlyInterest = (total * interestRate) / 12;
      return monthlyInterest.toFixed(2).replace(regex, ",");
    }
  };

  const total = () => {
    const total = parseFloat(amount);
    const interestRate = rate / 100;
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    if (button === "repayment") {
      const totalInterest = total * interestRate * term;
      const totalPayment = total + totalInterest;
      return totalPayment.toFixed(2).replace(regex, ",");
    } else if (button === "interest") {
      const totalInterest = total * interestRate * term;
      const totalPayment = totalInterest;
      return totalPayment.toFixed(2).replace(regex, ",");
    }
  };

  return (
    <>
      <div className="font-custom text-base">
        <main>
          <Form
            onClick={clear}
            onSubmit={submit}
            amount={amount}
            setAmount={setAmount}
            term={term}
            setTerm={setTerm}
            rate={rate}
            setRate={setRate}
            button={button}
            setButton={setButton}
            error={error}
            setError={setError}
          />
          {submitted ? (
            <Results monthly={() => submitMonthly} total={() => submitTotal} />
          ) : (
            <Empty />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
