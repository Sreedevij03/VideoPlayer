import React from 'react'
import ReactPlayer from 'react-player'


function Video({data}) {
//     const listItems = data.map((data)=>
//    {data.video}
//     );
    return (
        <div>
   
   {data.map((data) => {
        return (
          <div>
              <ReactPlayer url={data.video} style={{width:'100%'}} />
           
          </div>
        );
      })}
        </div>
    )
}
export default  Video