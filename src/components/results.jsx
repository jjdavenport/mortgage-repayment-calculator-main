const Results = ({ total, monthly }) => {
  return (
    <>
      <section className="flex flex-col">
        <h2>Your results</h2>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
        <span>Your monthly repayments</span>
        <span>{monthly()}</span>
        <span>Total you'll repay over the term</span>
        <span>{total()}</span>
      </section>
    </>
  );
};

export default Results;
