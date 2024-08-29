const Results = ({ data }) => {
    return (
        <>
        <section>
            <h2>{data.results}</h2>
            <p>{data.resultsP}</p>
            <span>{data.span}</span>
            <span>{data.span2}</span>
        </section>
        </>
    )
}

export default Results