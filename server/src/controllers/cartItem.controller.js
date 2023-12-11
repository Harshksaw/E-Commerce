const cartItemService=require("../services/cartItem.service.js")
async function updateCartItem(req, res) {
    
    const user = req.user;
    
    try {
        const updatedCartItem=await cartItemService.updateCartItem(user._id,req.params.id,req.body);

      return res.status(200).send(updatedCartItem);
    } catch (err) {
        console.log("error",err.message)
      return res.status(500).json({ error: err.message });
    }
}

async function removeCartItem(req, res) {
    
    const user = req.user;
    
    console.log(user._id,"userId");

    try {
        await cartItemService.removeCartItem(user._id,req.params.id)

      return res.status(200).send({message:"item removed",status:true});
    } catch (err) {
        console.log("error",err.message)
      return res.status(500).json({ error: err.message });
    }
}

module.exports={updateCartItem,removeCartItem};