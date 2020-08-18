module.exports = (sequelize, dataTypes) => {
    let alias = `Professions`;
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
       

    };
    let config = {
        tableName: `professions`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`
    };
    const Profession = sequelize.define(alias, cols, config)

    Profession.associate = (models) => {
        Profession.belongsToMany(models.Products,{
                    as: 'products',
                    through: 'products_professions',
                    foreignKey: 'profession_id',
                    otherKey:'product_id'
                })

   
    }

    return Profession;
}