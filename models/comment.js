const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');
const Blog = require('./blog');
const User = require('./user');

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            validate: {
                len:[3]
            }
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: "id",
                model: User,
            },
        },

        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: "id",
                model: Blog,
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    }
);

module.exports = Comment;