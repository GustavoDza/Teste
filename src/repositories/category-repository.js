const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.getProduct = async () => {
    const result = await Category.find({}, 'category description _id active');
    return result;
}

exports.create = async (data) => {
    const category = Category(data);
    await category.save();
}

exports.put = async (id, data) => {
    await Category.findByIdAndUpdate(id, {
        $set:{
            category: data.category,
            description: data.description,
            active: data.active
        }
    });
}

exports.getById = async (id) => {
    const result = await Category.findOne({_id : id}, "category description active")
    return result;
}

exports.delete = async (id) => {
    await Category.findByIdAndDelete(id)
}