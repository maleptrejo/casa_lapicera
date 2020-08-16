module.exports = (sequelize, dataTypes) => {
    let alias = `Categories`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        deleted_at: {
            type: dataTypes.DATE
        },
        name: {
            type: dataTypes.STRING
        },
        img_category: {
            type: dataTypes.STRING
        },

    };
    let config = {
        tableName: `categories`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`
    };
    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models) => {
       Category.hasMany(models.Products, {
           as: "products",
           foreignKey: "category_id"
        })

   
    }

    return Category;
}