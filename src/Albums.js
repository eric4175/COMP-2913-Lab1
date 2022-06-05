 export default function Albums({coverImg, id, name}){
    return(
        <div>  
        <img src = {coverImg} alt={id} 
        style={{
            borderRadius: "50%", 
            marginLeft: "1em",
            alignContent: "center",
            width: "15%", 
            height: "15%",
            }} />
        <span>{name}</span>
        </div>
    );
 }