const userModel=require("../models/userModels");


const createData= async function(req, res){
    let data=req.body
    let saveddata = userModel.create(data)
    res.send({msg:saveddata})

}


const data=async function (req, res) {
    let data2=req.body
    let  finddata= await userModel.find(data2);
res.send({msg:finddata})
}



const Updatedata=async function(req, res){

    let userId=req.body

    let updateUsers= await userModel.findOneAndUpdate({id:userId}, userData,{new:True})
    res.send({status:Updatedata,data:updateUsers})
}

const deletdata=async function(req, res){
    let userId = req.params.userId

    let deletedata=  await userModel.find({id:userId},{$set:{isdeleted:true}})

    res.send({msg:deletdata});
}


module.exports.createData=createData;
module.exports.Updatedata=userData;
module.exports.deletdata=deletdata;
module.exports.data=data;


