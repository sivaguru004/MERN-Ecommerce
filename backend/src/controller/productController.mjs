import Product from "../models/productModel.mjs"
import ApiFunctionality from "../utils/apiFunctionality.mjs";

// create Product
export const createProduct = async(req, res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(201).send({
            success: true,
            product
        })
    }catch(err){
        if(err.name==='CastError'){
            return res.status(404).send({success:false, msg:`This is invalid resource ${err.path}`})
        }
        res.status(500).send({success:false, msg:err.message})
    }
}


// get all products
export const getAllProducts = async(req, res)=>{
    try{
    const apiFunctionality = new ApiFunctionality(Product.find(), req.query).search().filter();
    const products = await apiFunctionality.query

    res.status(200).send({success:true, products})
    }catch(err){
        if(err.name==='CastError'){
            return res.status(404).send({success:false, msg:`This is invalid resource ${err.path}`})
        }
        res.status(500).send({success:false, msg:err.message})
    }
}

// update product
export const updateProduct = async(req, res)=>{
    const id = req.params.id;
    try{
        const product = await Product.findById(id);
        if (!product){
            return res.status(404).send({success:false, msg:"Product Not Found"})
        }

        const udtProduct = await Product.findByIdAndUpdate(id, req.body, {
            new:true,
            runValidators: true
        });

        res.send({success:true, udtProduct})
    }catch(err){
        if(err.name==='CastError'){
            return res.status(404).send({success:false, msg:`This is invalid resource ${err.path}`})
        }
        res.status(500).send({success:false, msg:err.message})
    }
}

// get single product by id
export const getProductById = async(req, res)=>{
    const id = req.params.id;
    try{
        const product = await Product.findById(id);
        if (product){
            return res.send({success:true, product})
        }else{
            return res.status(404).send({success: false, msg:"Product Not Found"})
        }
    }catch(err){
        if(err.name==='CastError'){
            return res.status(404).send({success:false, msg:`This is invalid resource ${err.path}`})
        }
        res.status(500).send({success:false, msg:err.message})
    }
}

// delete product by id
export const deleteProductById = async(req, res)=>{
    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product){
            return res.status(404).send({success:false, msg:"Product Not Found"})
        }

        const dltProduct = await Product.findByIdAndDelete(id);

        res.send({success:true, msg:"Product deleted Successfully"})
    }catch(err){
        if(err.name==='CastError'){
            return res.status(404).send({success:false, msg:`This is invalid resource ${err.path}`})
        }
        res.status(500).send({success:false, msg:err.message})
    }
}