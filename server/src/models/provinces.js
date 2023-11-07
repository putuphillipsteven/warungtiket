module.exports = (sequelize, Sequelize) => {
  const province = sequelize.define(
    "province",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      province: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "provinces",
    }
  );
  province.associate = (models) => {
    province.hasMany(models.event, {
      foreignKey: "provinceId",
    });
  };
  return province;
};
