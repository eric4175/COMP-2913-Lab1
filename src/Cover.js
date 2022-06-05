export default function Cover({coverImg, id}) {
    return(
        <img src = {coverImg} alt={id} 
        style={{
            marginRight: "2em", 
            marginLeft: "1em",
            float: "left", 
            width: "50%", 
            height: "50%", 
        }} />
    );   
        
}