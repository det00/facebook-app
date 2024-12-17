import "../css/Main.css"

export default ({url, text})=>{
    return (
        <div className="link"onClick={()=> {
            window.location.href=url
        }}>{text}</div>
    )
}