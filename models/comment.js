const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');
const User = require('./user');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          }, 
        
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[3]
            }
        },

        user_id: {
            type: DataTypes.INTEGER,
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
                model: User,
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