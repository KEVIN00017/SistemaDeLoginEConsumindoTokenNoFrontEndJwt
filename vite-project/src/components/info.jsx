import "./nav.css"
function Info(props){
    const text=props.text

return(
    <div className="info">
      {
        text.map((item,index)=>{
            return(
                <p key={index}>{item}</p>
            )
        })
      }
    </div>
)
}
export default Info