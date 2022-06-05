import './App.css';
import Cover from "./Cover";
import Tracks from './Tracks';
import albums from "./data";
import Albums from "./Albums";

let album1 = Object.assign({}, albums[0]);

export default function App() {
  return (
  <div>
    <div>
    <Cover coverImg = {album1.coverImg} id = {album1.id}/>
    <ol>
    { album1.tracks.map((track) => (
      <Tracks tracks = {track}/>
      ))}
    </ol>
    </div>
        
    <div>  
    <h1 style = {{paddingLeft: "0.5em" }}>Select an Album </h1>  
      { albums.map((album) => (
        <Albums coverImg = {album.coverImg} id = {album.id} name = {album.name}/>
        ))}
    </div>
  </div>
  );
}


 