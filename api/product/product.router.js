const productController = require("./product.controller");
const router = require("express").Router();
const { checkToken } = require("./../../auth/token_Validatin");

router.post("/", productController.createProduct);
router.get("/", checkToken, productController.getAllProducts);
router.get("/:id", checkToken, productController.getProductById);
router.delete("/:id", checkToken, productController.deleteProductById);
router.patch("/:id", checkToken, productController.updateProduct);
router.get("/:id/variants", checkToken, productController.getVariantsByIdProduct);
router.get("/:idP/variants/:idV", checkToken, productController.getVariantByIdProductAndIdVariants);

module.exports = router;
