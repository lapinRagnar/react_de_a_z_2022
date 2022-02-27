export default function Dot ({color}) {

    const style = {
        height: 50,
        width: 50,
        margin: "0px 10px",
        backgroundColor: color,
        borderRadius: "50%",
        display: "inline-block"
    }
    return (
        
        <span style={style}></span>
    )
}