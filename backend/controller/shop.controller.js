import Shop from "../model/shop.model.js";

export const getShop = async (req, res) => {
  try {
    const shop = await Shop.find();
    res.status(200).json(shop);
  } catch (error) {
    console.log("eeeeeeeee", error);
    res.status(500).json(error);
  }
};
