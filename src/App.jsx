import data from "./components/assets/data.json";
import inputs from "./components/assets/inputs.json";
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
          <Form inputs={inputs} data={data} />
          <Results data={data} />
          <Empty data={data} />
          <Footer />
        </>
      ) : (
        <>
          <Form inputs={inputs} data={data} />
          <Results data={data} />
          <Empty data={data} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
