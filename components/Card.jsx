const Card = (props) => {
    return (
        <div className={`card ${props.className}`} onClick={props.onClick}>
            {props.children}
            <style jsx>{`
                .card {
                    background-color: #202125;
                }
            `}</style>
        </div>
    )
}

export default Card