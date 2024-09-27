import icon from "./assets/illustration-empty.svg";

const Empty = () => {
  return (
    <>
      <section className="bg-slate900 flex flex-col items-center justify-center gap-2 p-8 text-center">
        <img className="w-1/2" src={icon} />
        <h3 className="text-slate100 text-2xl font-bold">Results shown here</h3>
        <p className="text-slate300">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </section>
    </>
  );
};

export default Empty;
