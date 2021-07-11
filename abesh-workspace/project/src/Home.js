import React, {useState,useEffect} from 'react';
import Card from './Card'
import axios from 'axios'
const Home =() =>  {

    const [data,setData]=useState([])

useEffect(()=>{

axios.get('http://localhost:2000/api/get').then(response=>{

    
    setData(response.data)

}).catch(err=>{

    alert(err)
})


})






        return (
            <div>
                <div className="row">
                {data.map(record=>
              
      <Card 
      img={`${record.img}`}
   price={`${record.price}`}
   caption={`${record.caption}`}
   stock={`${record.stock}`}
   
   del='false'
   add='true'
   />
   

) }
</div>
            </div>
        );
    }


export default Home;