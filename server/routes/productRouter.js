const router = express.Router();


router.get("/",ensureAuthenticatd ,(req,res) => {
    console.log("-----logged in user detail-----", req.user);
    res.status(200).json([
        {
            name: mobile,
            price: 789000
        },
        {
            name: LED,
            price: 989000
        }
    ])
});

module.exports = router;