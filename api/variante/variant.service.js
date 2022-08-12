const variantModel = require("./variant.model");

module.exports = {
    createVariant:(data)=>{
        return variantModel.create(data);
    },
    getVariantByIdProductAndIdVariants:(idP, idV)=>{
        return variantModel.findOne({ _id: idV , product: idP});
    }
}