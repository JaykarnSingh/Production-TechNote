const User = require('../models/admin');
const Comment=require('../models/comment');


// Login admin...............................
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  
  if (user.password !== password) {
    return res.status(403).json({ error: 'Invalid  password' });
  }
  
  res.json({
    status: 200,
    message: "success",
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      userRole: user.userRole,
      
    },
  });
}

//admin data get
const getAdminData = async (req, res, next) => {
const user=await User.find();
if (!user) {
  return res.status(401).json({ error: 'not admin data' });
}

if (user) {
  return res.status(200).json(user);
}

}

//comment data........................
const postComment=(req,res,next)=>{
  const user=new Comment(req.body)
  const result=user.save();
  res.send(result);
  }
  //get user data
  const getComment = async (req, res, next) => {
      try {
        const users = await Comment.find();
        if (users.length > 0) {
          res.send(users);
        } else {
          res.send({ result: "no users found" });
        }
      } catch (error) {
        next(error); 
      }
    };



module.exports = {
  loginUser,
  getAdminData,

  postComment,
  getComment
};
