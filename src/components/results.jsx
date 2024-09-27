const Results = ({ total, monthly }) => {
  return (
    <>
      <section className="md:rounded-bl-xl5 md:~px-3/8 flex flex-1 flex-col gap-8 bg-slate900 px-4 py-8 text-left text-slate100 md:w-1/2 md:justify-start md:rounded-r-3xl md:p-8">
        <article className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Your results</h2>
          <p className="text-slate300">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
        </article>
        <div className="flex flex-col divide-y divide-slate700 rounded-lg border-t-4 border-lime bg-slateBlack p-4">
          <div className="flex flex-col gap-2 pb-3 md:gap-3 md:pb-6">
            <span className="text-slate300">Your monthly repayments</span>
            <span className="text-4xl font-bold text-lime md:text-6xl">
              £{monthly()}
            </span>
          </div>
          <div className="flex flex-col gap-2 pt-3 md:gap-3 md:pt-6">
            <span className="text-slate300">
              Total you'll repay over the term
            </span>
            <span className="text-2xl font-bold md:text-4xl">£{total()}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
