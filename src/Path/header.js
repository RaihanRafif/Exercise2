function Header(props){
    return(
        <div>
            <button >SIGN UP</button>
            <button>LOG IN</button>
            <h1>{props.text} </h1>
        </div>
    );
}

export default Header;