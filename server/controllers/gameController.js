import db from './../models';

const gameController = {};

//BOILERPLATE CODE FROM ANOTHER PROJECT - TO BE CHANGED


gameController.post = (req, res) =>{
    const{
        title,
        text,
        link, 
        userId,
    } = req.body;
    
    //validation either text or link, not both
    const post = new db.Post({
        title,
        text,
        link, 
        _creator: userId,
    });

    post.save().then((newPost) => {
        return res.status(200).json({
            success: true,
            data: newPost
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err,
        });
    })
};

gameController.getAll = (req, res) => {
    db.Post.find({}).populate({
        path: '_creator',
        select: 'username createdAt -_id'
    }).populate({
        path: '_comments',
        select: 'text createdAt _creator',
        match: { 'isDeleted': false }
    }).then((posts) => {
    return res.status(200).json({
            success: true,
            data: posts
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err,
        });
    })
};

export default gameController;