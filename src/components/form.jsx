const Form = ({ inputs, data }) => {
  const radioInputs = inputs.filter((i) => i.type === "radio")
  const numberInputs = inputs.filter((i) => i.type !== "radio")
  return (
    <>
    <main>
      <h1>{data.h1}</h1>
      <button>{data.clearBtn}</button>
      <form noValidate className="flex flex-col">
        {numberInputs.map((i, index) => (
          <label key={index} htmlFor={i.name}>
            {i.label}
            <input type={i.type} name={i.name} />
          </label>
        ))}
        {radioInputs.map((i ,index) => (
          <div key={index}>
            <label htmlFor={i.name}>
              <button> {i.button}
            <input type={i.type} />
            </button>
            </label>
          </div>
        ))}
        <button><img src={data.buttonIcon} />
        {data.buttonText}
          </button>
      </form>
      </main>
    </>
  );
};

export default Form;