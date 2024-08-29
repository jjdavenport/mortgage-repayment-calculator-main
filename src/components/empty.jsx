const Empty = ({ data }) => {
    return (
        <>
        <section>
            <img src={data.emptyIcon} />
            <span>{data.empty}</span>
            <p>{data.p}</p>
        </section>
        </>
    )
}

export default Empty