function Comp()
function Comp(props)
{
	const message="Hello Varanasi Software Junction";

	return <p className="vjs">

	<h2>{message}</h2>
	<h2>{props.message}</h2>
	<img src='Varanasi Software Junction Phone Logo.png'/>
	</p>;
}