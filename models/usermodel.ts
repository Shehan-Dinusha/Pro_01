import Sequelize from "sequelize";

import db from "../config/database.js";

const { DataTypes } = Sequelize;

const user = db.define(
  "user",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

// (async()=>{
//     await db.sync();
// })();

db.sync();

export default user;
