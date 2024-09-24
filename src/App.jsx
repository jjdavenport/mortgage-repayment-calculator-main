import data from "./components/assets/data.json";
import inputs from "./components/assets/inputs.json";
import Form from "./components/form";
import Footer from "./components/footer";
import Results from "./components/results";
import Empty from "./components/empty";

function App() {
  return (
    <>
      <Form inputs={inputs} data={data} />
      <Empty data={data} />
      <Footer />
    </>
  );
}

export default App;
