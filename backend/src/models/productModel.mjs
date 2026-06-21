import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please Enter the Product Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Enter the Product Description"],
    },
    price: {

        type: Number,
        required: [true, "Please Enter the Product Price"],
        maxLength: [7, "price must be lesser then 9999999"]
    },
    ratings: {
        type: Number,
        default: 0
    },
    images:[{
            public_id: {
                type: String,
                required: true,
            },
            url:{
                type: String,
                required: true,
            }
    }],
    category:{
        type: String,
        required: [true, "Please Enter the Product Category"]
    },
    inStock:{
        type: Number,
        required: [true, "Please Enter the available Stocks"],
        maxLength: [5, "stock must be lesser then 99999"],
        default: 1
    },
    noOfReviews: {
        type: Number,
        default: 0
    },
    reviews:[{
        name : {
            type: String,
            required:true
        },
        rating: {
            type: Number,
            required: true
        },
        Comment:{
            type: String
        }
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Product", productSchema);