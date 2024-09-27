import icon from "./assets/illustration-empty.svg";

const Empty = () => {
  return (
    <>
      <section className="md:rounded-bl-xl5 flex flex-col items-center justify-center gap-2 bg-slate900 p-8 text-center md:w-1/2 md:rounded-r-3xl">
        <img className="w-1/2" src={icon} />
        <h3 className="text-2xl font-bold text-slate100">Results shown here</h3>
        <p className="text-slate300">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </section>
    </>
  );
};

export default Empty;
