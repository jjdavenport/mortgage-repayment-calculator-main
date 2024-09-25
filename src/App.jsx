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
      {submitted ? <Results /> : <Empty />}
      <Footer />
    </>
  );
}

export default App;
