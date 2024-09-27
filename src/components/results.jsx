const Results = ({ total, monthly }) => {
  return (
    <>
      <section className="bg-slate900 text-slate100 flex flex-col justify-center gap-8 px-4 py-8 text-left">
        <article className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Your results</h2>
          <p className="text-slate500">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
        </article>
        <div className="border-lime bg-slateBlack divide-slate700 flex flex-col divide-y rounded-lg border-t-4 p-4">
          <div className="flex flex-col gap-2 pb-3">
            <span className="text-slate300">Your monthly repayments</span>
            <span className="text-lime text-4xl font-bold">£{monthly()}</span>
          </div>
          <div className="flex flex-col gap-2 pt-3">
            <span className="text-slate300">
              Total you'll repay over the term
            </span>
            <span className="text-2xl font-bold">£{total()}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
