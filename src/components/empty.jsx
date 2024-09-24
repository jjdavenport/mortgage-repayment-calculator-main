import icon from "./assets/illustration-empty.svg";

const Empty = () => {
  return (
    <>
      <section>
        <img src={icon} />
        <span>Results shown here</span>
        <p>
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </section>
    </>
  );
};

export default Empty;
