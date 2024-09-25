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
  const [error, setError] = useState(false);

  const check = (input) => {
    if (input === "") {
      setError("blank");
    } else {
      setError("");
    }
  };

  const clear = () => {
    setAmount("");
    setRate("");
    setTerm("");
    setButton("");
  };

  const submit = (e) => {
    e.preventDefault();
    check();
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
      />
      <Empty />
      <Footer />
    </>
  );
}

export default App;
