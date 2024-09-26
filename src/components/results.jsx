const Results = ({ total, monthly }) => {
  return (
    <>
      <section className="bg-slate900 flex flex-col justify-center gap-2 p-4 text-left text-white">
        <h2>Your results</h2>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
        <div className="flex flex-col gap-2 rounded-lg bg-black p-2">
          <div className="flex flex-col gap-2">
            <span>Your monthly repayments</span>
            <span>{monthly()}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>Total you'll repay over the term</span>
            <span>{total()}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
