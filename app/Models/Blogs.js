const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    PostTime: {
        type: Date,
        required: true
    },
    Content: {
        type: String,
        required: true
    },    
    Author: {
        required: true,
        type: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Users',
                required: [true, 'User is required'],
                index: true,
            },
            name: {
                type: String,
                required: [true, 'Username is required']
            },
            image_url: {
                type: String
            }
        }
    }
}, {_id: false})

// Blog Collection

{}
{
    _id: 
    Title:
    PostTime:
    nLikes:
    NumComments:
    Author: {
        UserId:
        ProfilePic:
        Name:
    }
}

// Comment Collection., ** Not neccesssary for now
{
    _id:
    BlogId:
    PostTime:
    Text:
    Author: {
        userId:..
        ..
        
    }
    nLikes:..
}

// Likes Collections. **not to implement right now
{
    _id:
    Reference:
    LikeTime:
    Author: {
        ...
    }
}