const Button = (props) => {
    return (
        <button onClick={props.onClick} className={`${props.className} ${props.color}`}>
            {props.children}
            <style jsx>{`
                button {
                    padding: 5px 25px;
                    font-size: 16px;
                    transition: 100ms linear;
                }
                .green {
                    background-color: #01b075;
                    color: #fff;
                    border: 2px solid #01b075;
                }
                .green:hover {
                    background-color: #29cf97;
                    border: 2px solid #29cf97;
                }
                .reverse-green {
                    color: #01b075;
                    background-color: #fff;
                    border: 2px solid #01b075;
                }
                .reverse-green:hover {
                    color: #29cf97;
                    background-color: #fff;
                    border: 2px solid #29cf97;
                }
                .red {
                    background-color: #fd0000;
                    color: #fff;
                    border: 2px solid #fd0000;
                }
                .reverse-red {
                    color: #fd0000;
                    background-color: rgba(0,0,0,0);
                    border: 2px solid #fd0000;
                }
                .reverse-red:hover {
                    color: #fff;
                    background-color: #fd0000;
                }
            `}</style>
        </button>
    )
}

export default Button