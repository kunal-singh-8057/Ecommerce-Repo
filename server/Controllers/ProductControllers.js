const ProductModels = require("../Models/ProductModels");

const addproducts = async(req,res)=>{
    const products = await ProductModels.create(req.body)

    res.status(201).json({
        success:true,
        products
    })
}


const viewproducts = async(req,res)=>{
     await ProductModels.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
}


const viewcategoryproducts = async(req,res)=>{
    
    const qcategorie = req.query.categories
    let products;

    if(qcategorie)
    {
        products = await ProductModels.find({categories:{
            $in:[qcategorie]
        }})

        res.status(201).json({
            success:true,
            products
        })
    }


}


const viewproductsbyid = async(req,res)=>{
    const id = req.params.id;
    await ProductModels.findById(id)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
}


const deleteproducts = async(req,res)=>{
    const id = req.params.id
    await ProductModels.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))

}


module.exports = {addproducts,viewproducts,viewcategoryproducts,viewproductsbyid,deleteproducts}