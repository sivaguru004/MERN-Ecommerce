import userModels from "../models/userModels.mjs";


export const registerUser = async (req, res)=>{
    try{
        const {name, password, email} = req.body;

        const user = await userModels.create({
            name, email, password,
            avatar: {public_id: "this is duplicate", url: "https://dummyurl.com"},
        })

        res.status(201).send({success:true, user})
    }catch(err){
        if(err.name==='CastError'){
            return res.status(404).send({success:false, msg:`This is invalid resource ${err.path}`})
        }
        res.status(500).send({success:false, msg:err.message})
    }
}