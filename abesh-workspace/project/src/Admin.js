import React, {useEffect,useState  } from 'react';
import Card from './Card'
import axios from 'axios'

const Admin =()=> {



    const [data,setData]=useState([])

    const [img,setImg]=useState('')
    const [caption,setCaption]=useState('')
    const [price,setPrice]=useState('')
    const [stock,setStock]=useState('')






    //post data

    const post =()=>{
        axios.post("http://localhost:2000/api/post",{img,caption,price,stock}).then(response=>{
            alert(response.data)
        }).catch(err=>{
            alert(err)
        })
    
    }



useEffect(()=>{

axios.get('http://localhost:2000/api/get').then(response=>{

    
    setData(response.data)

}).catch(err=>{

    alert(err)
})

})

        return (
            <div >
                <center>admin panel</center>
                <div className='card-admin'>
                    <br/>
                   <center>add product</center>
                    <br/><br/>
                    <br/><br/>
                    <center>
<input type='text' id='in' onChange={(e)=>{setCaption(e.target.value)}} placeholder='caption'/><br/><br/>
<input type='text' id='in' onChange={(e)=>{setImg(e.target.value)}} placeholder='img link'/><br/><br/>
<input type='text' id='in' onChange={(e)=>{setPrice(e.target.value)}} placeholder='price'/><br/><br/>
<input type='text' id='in' onChange={(e)=>{setStock(e.target.value)}} placeholder='stock'/><br/><br/>

<button className='btn-a' onClick={post}>add product</button>
</center><br/><br/>

                </div>

                <div className='card-admin'>
               <div className='row'>
                {data.map(record=>
              
      <Card 
      img={`${record.img}`}
   price={`${record.price}`}
   caption={`${record.caption}`}
   _id={`${record._id}`}
   del='true' />
   

) }

                </div>
                
                </div>


            </div>
        );
    
}

export default Admin;