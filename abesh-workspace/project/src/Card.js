import React, { Component } from 'react';
import axios from 'axios'


class Card extends Component {


    

add = (e) =>{




    if(sessionStorage.getItem('cart')){


        
            
        for (var index = 0; index < JSON.parse(sessionStorage.getItem('cart')).length; index++) {
           
        if( JSON.parse(sessionStorage.getItem('cart'))[index].img===e.img){
          alert('already added')
        window.location.reload()
      }
      else{

        
        alert('added to cart')
const cart= JSON.parse(sessionStorage.getItem('cart'))
cart.push(e)
sessionStorage.setItem('cart',JSON.stringify(cart))
window.location.reload()

      }
      

        }
        
        if(sessionStorage.getItem('cart')==='[]'){
            alert('added to cart')
            const cart= JSON.parse(sessionStorage.getItem('cart'))
            cart.push(e)
            sessionStorage.setItem('cart',JSON.stringify(cart))
            window.location.reload()
        }
    

        
}
else{
    sessionStorage.setItem('cart',JSON.stringify([e]))
    alert('added to cart')
    window.location.reload()
}

}  







remove = (e) =>{
   const a= JSON.parse(sessionStorage.getItem('cart'))
    for (var i =0; i < a.length; i++){
   if (a[i].img === e.img) {
      a.splice(i,1);
      
   }
}
sessionStorage.setItem('cart',JSON.stringify(a))
    window.location.reload()
    alert('removed from cart')
}

    



del =(e)=>{
    axios.delete('http://localhost:2000/api/del/'+e).then(response=>{

    
        alert(response.data)
    
    }).catch(err=>{
    
        alert(err)
    })
    

}


    render(props) {
        return (
            <div className='column'>
            <center>{this.props.caption}</center>
            
            <h4 id='price'>৳{this.props.price}</h4>
            <center>in stock-{this.props.stock}</center>
            
            {this.props.add==='true'?<center><button className='btn-a' onClick={()=>this.add({caption:this.props.caption,price:this.props.price,img:this.props.img})} >add to cart</button></center>:<center><button className='btn-d' onClick={()=>this.remove({caption:this.props.caption,price:this.props.price,img:this.props.img})} >remove from cart</button></center>}
              {this.props.del==='true'?<center><button onClick={()=>this.del(this.props._id)} className='btn-d'>delete</button></center>:<span/>}


              <center><img src={this.props.img} id='product' width="180px" alt={`${this.props.caption}`} /></center>
                
                
                
                
                

            </div>
        );
    }
}

export default Card;
