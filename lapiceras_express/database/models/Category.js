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
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        // paranoid: true
    };
    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models) => {
       Category.hasMany(models.Products, {
           as: "products",
           foreignKey: "category_id"
        })
        Category.hasMany(models.Supplies, {
            as: "supplies",
            foreignKey: "category_id",
            onDelete: 'CASCADE',
            
         })
         Category.hasMany(models.Refills, {
            as: "refills",
            foreignKey: "category_id",
            onDelete: 'CASCADE',
            
         })

   
    }

    return Category;
}