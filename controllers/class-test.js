const ClassTest = require('../model/ClassTest')

const getAll = async (req, res) => {
    try {
        const test = await ClassTest.find()
        test.forEach((item) => {
            item.date = new Date(item.date);
        });
        test.sort((a, b) => a.date - b.date);
        res.status(200).json(test);
    } catch (error) {
        res.status(500).json({ completed: false, msg: 'something went wrong' })
    }
}

const getOne = async (req, res) => {
    try {
        const { id: classTestID } = req.params;
        const test = await ClassTest.findById(classTestID);
        if (!test) {
            return res.status(404).json({ error: 404, msg: `no class test with the id ${classTestID}` })
        }
        res.status(200).json(test);
    } catch (error) {
        console.log(error);
    }
}

const createClassTest = async (req, res) => {
    try {
        const test = await ClassTest.create(req.body)
        res.status(201).json({ test })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateClassTest = async (req, res) => {
    try {
        const { id: classTestID } = req.params;
        const test = await ClassTest.findByIdAndUpdate(classTestID, req.body, { new: true, runValidators: true });
        if (!test) {
            return res.status(404).json({ error: 404, msg: `no classtest with the id ${classTestID}` });
        }
        res.status(200).json(test);
    } catch (error) {
        console.log(error)
    }
}

const deleteClassTest = async (req, res) => {
    try {
        const { id: classTestID } = req.params;
        const test = await ClassTest.findByIdAndDelete(classTestID)
        if (!test) {
            return res.status(404).json({ msg: `no class test with a ID ${classTestID}` })
        }
        res.status(200).json(test);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAll, getOne, createClassTest, updateClassTest, deleteClassTest }
