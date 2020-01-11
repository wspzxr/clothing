 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  adminSchema=new Schema({
     title:{type:String,required:true},
     permission:{type:String,required:true},
     arttype:{type:String,required:true},
     settop:{type:String,required:true},
     ctime: { type: Date, default: Date.now }
 })

 let adminsModel=mongoose.model('books',adminSchema)
 module.exports=adminsModel