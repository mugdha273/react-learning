export default function Card(props) {
    console.log(props.image)
    return(
        <div className="concept">
            <img src = {props.image}/>
            <h2>{props.title}</h2>
            <p>description = {props.description}</p>
        </div>
    )

}
