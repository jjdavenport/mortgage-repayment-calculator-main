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

  const validate = () => {
    const blank = "This field is required";
    const error = {};
    if (!amount) error.amount = blank;
    if (!term) error.term = blank;
    if (!rate) error.rate = blank;
    if (!button) error.button = blank;
    setError(error);
  };

  const clear = () => {
    setAmount("");
    setRate("");
    setTerm("");
    setButton("");
    setError({});
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) {
      return true;
    } else {
      return;
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
      {submit ? <Results /> : <Empty />}
      <Footer />
    </>
  );
}

export default App;
