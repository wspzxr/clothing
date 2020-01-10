 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  adminSchema=new Schema({
     userName:{type:String,required:true},
     passWord:{type:String,required:true},
     rootIds:{type:Array,required:true},
     rootLevel:{type:Number,default:0},
     token: {type:String},
     rootList: {type:Array,reauired:true},
     ctime: { type: Date, default: Date.now }

 })

 let adminsModel=mongoose.model('admins',adminSchema)
 module.exports=adminsModel