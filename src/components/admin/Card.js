
const CardUser = ({title, amount, icon}) => {

    return (
    <div style={{borderRadius:"20px", border:"solid grey 1px", height:"60px", margin:"25px", display:"flex", justifyContent:"space-between"}}>
        <div style={{margin:"10px"}}>
            <h3>{title}</h3>
            <h2>{amount}</h2>
        </div>
        <div style={{margin:"25px"}}>
        {icon}
        </div>
    </div>)
}

export default CardUser