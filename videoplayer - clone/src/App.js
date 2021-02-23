import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import Video from './Components/video'
import ReactPlayer from 'react-player'

const data =[
  {
    id:1,
    video:"https://www.youtube.com/watch?v=e-ORhEE9VVg",
  },
  {
    id:2,
    video:"https://www.youtube.com/watch?v=09R8_2nJtjg",
  },
  {
    id:3,
    video:"https://www.youtube.com/watch?v=SlPhMPnQ58k",
  },
  

]

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Video data={data}/>
      {/* {data.map((data) => {
        return (
          <div>
              <ReactPlayer url={data.video} style={{width:'100%'}} />
           
          </div>
        );
      })} */}


    </div>
  );
}

export default App;
