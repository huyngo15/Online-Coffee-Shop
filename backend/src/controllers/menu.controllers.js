exports.createMenu = (req, res) => {
    const idFood = req.body.idFood;
    const foodName = req.body.foodName;
    const price = req.body.price;

    res.json({
        message: "Menu have just created!",
        data: { idFood, foodName, price }
    });
};
exports.getMenu = (req, res) => {
    res.json({
        message: "Here is our menu: ",
    })
};
exports.updateMenu = (req, res) => {
    res.json({ message: "updated!" });
};

exports.deleteMenu = (req, res) => {
    res.json({ message: "Deleted!" });
};