module.exports = (sequelize, dataTypes) => {
    let alias = `Inks_refills`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       refill_id: {
        type: dataTypes.INTEGER,
    },
    ink_id: {
        type: dataTypes.INTEGER,
    },
       

    };
    let config = {
        tableName: `inks_refills`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        // paranoid: true
    };
    const Inks_refills = sequelize.define(alias, cols, config)

    

    return Inks_refills;
}