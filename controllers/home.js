const ItemList = require("../models/itemlist")

module.exports = {
    getIndex : async (req,res) => {
        try {
            const items = await ItemList.find() // find all itmes from models/itemlist
            res.render("index.ejs", {itemList: items}) // render index.ejs, key:value pairs from ItemList)
        } catch (err) {
            if (err) return res.status(500).send(err)
        }
    },
    createItem : async (req,res) => {
        const newItem = new ItemList(
            {
                textinput: req.body.textinput, // textinput comes from index.ejs
                numinput: req.body.numinput
            }
        )
        try {
            await newItem.save() // saves to mongoDB collection
            console.log(newItem)
            res.redirect("/") // reloads homepage after new item saved
        } catch (err) {
            if (err) return res.status(500).send(err)
            res.redirect("/")
        }
    }
}