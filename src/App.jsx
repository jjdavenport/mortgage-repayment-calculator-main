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
    } else {
      setSubmitted(false);
    }
  };

  const monthly = () => {
    const total = parseFloat(amount);
    const interestRate = rate / 100;
    if (button === "repayment") {
      const totalInterest = total * interestRate * term;
      const totalPayment = total + totalInterest;
      const monthlyPayment = totalPayment / (term * 12);
      return parseFloat(monthlyPayment.toFixed(2)).toLocaleString();
    } else if (button === "interest") {
      const monthlyInterest = (total * interestRate) / 12;
      return parseFloat(monthlyInterest.toFixed(2)).toLocaleString();
    }
  };

  const total = () => {
    const total = parseFloat(amount);
    const interestRate = rate / 100;
    if (button === "repayment") {
      const totalInterest = total * interestRate * term;
      const totalPayment = total + totalInterest;
      return parseFloat(totalPayment.toFixed(2)).toLocaleString();
    } else if (button === "interest") {
      const totalInterest = total * interestRate * term;
      const totalPayment = totalInterest;
      return parseFloat(totalPayment.toFixed(2)).toLocaleString();
    }
  };

  return (
    <>
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
      {submitted ? <Results monthly={monthly} total={total} /> : <Empty />}
      <Footer />
    </>
  );
}

export default App;
