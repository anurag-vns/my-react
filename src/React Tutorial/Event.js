function Button(){
    function handleClick(){
        alert('You Clicked me!');
    }
    return(
        <button onClick={handleClick}>Click</button>
    );
}
export default Button;
