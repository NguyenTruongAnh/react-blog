const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

// UPDATE
router.put('/:id', async (req, res) => {
    /** Khi tiến hành cập nhật thông tin cần chú ý:
     *  + Kiểm tra xem id được put lên để chỉnh sửa có giống với id trên thanh url ko
     *  đề phòng trường hợp người dùng nhập một id ngẫu nhiên nào đó trên thanh url
     */
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const userUpdated = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{new:true});

            res.status(200).json(userUpdated);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json('You can only update your account');
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    /** Khi tiến hành cập nhật thông tin cần chú ý:
     *  + Kiểm tra xem id được put lên để chỉnh sửa có giống với id trên thanh url ko
     *  đề phòng trường hợp người dùng nhập một id ngẫu nhiên nào đó trên thanh url
     */
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
    
                res.status(200).json("User has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(500).json(err)
        }
       
    } else {
        res.status(401).json('You can update only your account');
    }
})

// GET
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;

        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
