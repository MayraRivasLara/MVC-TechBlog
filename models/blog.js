const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');
const User = require('./user');

class Blog extends Model {}

Blog.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                key: "id",
                model: "user",
            },
        },
        createdAt: {
            field: "created_at",
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: "updated_at",
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "blog",
    }
);

module.exports = Blog;