module.exports = (sequelize, dataTypes) => {
    let alias = `Images`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        deleted_at: {
            type: dataTypes.DATE
        },
        route: {
            type: dataTypes.STRING
        }
       

    };
    let config = {
        tableName: `images`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        // paranoid: true
    };
    const Image = sequelize.define(alias, cols, config)

    Image.associate = (models) => {
        Image.belongsToMany(models.Products,{
                    as: 'products',
                    through: 'products_images',
                    foreignKey: 'image_id',
                    otherKey:'product_id'
                })
      
        Image.belongsToMany(models.Refills,{
                    as: 'refills',
                    through: 'refills_images',
                    foreignKey: 'image_id',
                    otherKey:'refill_id'
        })
        Image.belongsToMany(models.Supplies,{
            as: 'supplies',
            through: 'supplies_images',
            foreignKey: 'image_id',
            otherKey:'supply_id'
})
   
    }

    return Image;
}