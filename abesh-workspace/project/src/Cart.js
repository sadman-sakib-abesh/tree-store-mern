import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';


class Cart extends Component {
constructor(){
    super()
    this.state={
        name:'',
        phone:'',
        address:'',
        total:''
    }
}


setValue =(e)=>{
this.setState({[e.target.name]:e.target.value})
}



componentWillMount(){
if(!sessionStorage.getItem('cart')){
sessionStorage.setItem('cart','[]')
}
    let a=[]
    let b=0
for(var i=0;i<JSON.parse(sessionStorage.getItem('cart')).length;i++){

    a.push(JSON.parse(sessionStorage.getItem('cart'))[i].price)
}

a.forEach(element=>b=b+parseInt(element))
setTimeout(() => {
    this.setState({total:b})
}, 100);

}




order =()=>{

    const body={
        name:this.state.name,
        address:this.state.address,
        phone:this.state.phone,
        product:sessionStorage.getItem('cart'),
        total:this.state.total
    }
    axios.post("http://localhost:2000/api/mail",body).then(response=>{
        alert(response.data)
    }).catch(err=>{
        alert(err)
    })

}


    render() {
        return (
            <div>
               <center><h3>total ammount-৳{this.state.total}</h3></center>
                <div className='row'>
               {sessionStorage.getItem('cart')?<>{JSON.parse(sessionStorage.getItem('cart')).map(record=><>




   <Card 
      img={`${record.img}`}
   price={`${record.price}`}
   caption={`${record.caption}`}
   del='false'
   add='false'
   />

  

              </>  )
                    
                }</>:<h3>empty cart?!</h3>}
            
            </div>
               
            <center>
                <div className='card-admin'>
                    <br/><br/>
                <input type='text' id='in' onChange={this.setValue} name='name' placeholder='your name'/><br/><br/>
                <input type='text' id='in' onChange={this.setValue} name='address' placeholder='address'/><br/><br/>
                <input type='number' id='in'onChange={this.setValue} name='phone'  placeholder='your contact'/><br/><br/>
                <button className='btn-a' onClick={this.order}>confirm order</button>
                </div>
             </center>
            </div>
        );
    }
}

export default Cart;