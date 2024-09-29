export default function Square(props) {
    return (
        <div 
        onClick={props.onClick}
        style={{
        outline: "2px solid black",
        color: "#FFFFFF",
        width : "100px",
        height : "100px",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",


        }}>
               {props.value}
        </div>
    )
}