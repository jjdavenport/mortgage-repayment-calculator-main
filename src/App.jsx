import data from "./components/assets/data.json";
import numberInputs from "./components/assets/number-inputs.json";
import radioInputs from "./components/assets/radio-inputs.json";
import Form from "./components/form";
import Footer from "./components/footer";
import { useMediaQuery } from "react-responsive";
import Results from "./components/results";
import Empty from "./components/empty";

function App() {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      {desktop ? (
        <>
          <Form
            radioInputs={radioInputs}
            numberInputs={numberInputs}
            data={data}
          />
          <Results data={data} />
          <Empty data={data} />
          <Footer />
        </>
      ) : (
        <>
          <Form
            radioInputs={radioInputs}
            numberInputs={numberInputs}
            data={data}
          />
          <Results data={data} />
          <Empty data={data} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
