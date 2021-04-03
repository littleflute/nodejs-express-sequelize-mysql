module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    xd1: {
      type: Sequelize.STRING
    }, 
    xd2: {
      type: Sequelize.STRING
    } 
  });

  return Tutorial;
};
