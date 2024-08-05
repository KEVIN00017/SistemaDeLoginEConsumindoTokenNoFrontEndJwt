import "./nav.css"
function Menu(props){

    const lk=props.Links



    return(



    
        <ul className="Header">

            {
                lk.map((item,index)=>{
                    return(
                        <li key={index}><h3 >{item}</h3></li>
                    )
                })
            }
        </ul>







    )

}
export default Menu