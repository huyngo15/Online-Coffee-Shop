exports.createUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    res.json({
        message: "Server đã nhận được dữ liệu!",
        data: { email, password, }
    });
};


exports.getUser = (req, res) => {
    res.json({
        message: "Here's the list of users still active in our server",
        user_email: req.body.email
    });
};

// exports.getUser = (req, res) => {
//     const { id, email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ message: "Email and password is a must!" });
//     } else {
//         const users = [];
//         users.push({ id: users.length + 1, email });
//         res.json({
//             message: "Đây là danh sách tất cả các người dùng tại server",
//             data: users
//         })
//     }
// };

exports.updateUser = (req, res) => {
    res.json({
        message: "updateUser"
    });
};

exports.deleteUser = (req, res) => {
    res.json({
        message: "deleteUser"
    });
};


