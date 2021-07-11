const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const nodemailer=require('nodemailer')


const app=express();
app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
  const {MongoClient,ObjectId}=require("mongodb");
  const url='env'

  MongoClient.connect(url,{ useUnifiedTopology: true },(error,db)=>{
  
  if(error){
    console.log(error);
  }
  else{
   



  // perform actions on the collection object
  
  
console.log("connected");
var dbo=db.db("ammu")
var key=dbo.collection('card')

//workspace start


//get api to home page
app.get('/api/get',(req,res)=>{

key.find({}).toArray((err,data)=>{
  
    if(err){
console.log(err)

    }else{
        res.send(data)
    }




})
})

//get  api to home page


//api admin

app.post('/api/post',(req,res)=>{

  key.insertOne(req.body,(err)=>{
    
      if(err){
  console.log(err)
  
      }else{
          res.send('product added to store front')
          console.log('added')
      }

  
  })
  })






//api admin close

//api admin close







//api admin close

app.delete('/api/del/:_id',(req,res)=>{

  key.deleteOne({_id:ObjectId(req.params['_id'])},(err)=>{
    
      if(err){
  console.log(err)
  
      }else{
          res.send('product deleted from store front')

          console.log('deleted')
      }

  
  })
  })



app.post('/api/mail',(req,res)=>{

  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: ,
      pass:
    }
  });
  
  var mailOptions = {
    from:,
    to:,
    subject:'tree order',
    html:'you got an sell order,<br/>products list-'+req.body.product+'<br/>buyers name-'+req.body.name+'<br/>phone-'+req.body.phone+'<br/>address-'+req.body.address+'<br/>total-'+req.body.total
  };
  
  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log(err)
    } else {
      res.send("we will call you to confirm order!!")
    }
  });



})






//workspace close
  }
});
  




app.listen(process.env.PORT || 2000,(err)=>{
if(err){
console.log(err)
}else{
    console.log("server running successfully!!! port 2000")
}

})
