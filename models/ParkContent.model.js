module.exports = (sequelize, DataTypes) => {
  const ParkContent = sequelize.define("ParkContent", {
    parkName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.JSON, // or DataTypes.TEXT if storing as stringified JSON
      allowNull: false,
    },
  });

  return ParkContent;
};
