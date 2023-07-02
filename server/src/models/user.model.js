const sql = require("../db/db.connect.user");

const users = require("../db/users.json");
const modelPostAllUsers = (req, res) => {
  const insertUsersQuery = `
      INSERT INTO users (id, name, username, email, phone, website)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

  const insertAddressQuery = `
      INSERT INTO address (id, street, suite, city, zipcode)
      VALUES (?, ?, ?, ?, ?)
    `;

  const insertGeoQuery = `
      INSERT INTO geo (id, lat, lng)
      VALUES (?, ?, ?)
    `;

  const insertCompanyQuery = `
      INSERT INTO company (id, name, catchPhrase, bs)
      VALUES (?, ?, ?, ?)
    `;

  // users.forEach((user) => {
  //   const usersValues = [
  //     user.id,
  //     user.name,
  //     user.username,
  //     user.email,
  //     user.phone,
  //     user.website,
  //   ];
  //   sql.query(insertUsersQuery, usersValues, (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({ message: "Failed to insert users" });
  //     }

  //     const addressValues = [
  //       user.id,
  //       user.address.street,
  //       user.address.suite,
  //       user.address.city,
  //       user.address.zipcode,
  //     ];
  //     sql.query(insertAddressQuery, addressValues, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //         return res.status(500).json({ message: "Failed to insert address" });
  //       }

  //       const geoValues = [user.id, user.address.geo.lat, user.address.geo.lng];
  //       sql.query(insertGeoQuery, geoValues, (err, result) => {
  //         if (err) {
  //           console.log(err);
  //           return res.status(500).json({ message: "Failed to insert geo" });
  //         }
  //       });
  //     });
  //     const companyValues = [
  //       user.id,
  //       user.company.name,
  //       user.company.catchPhrase,
  //       user.company.bs,
  //     ];
  //     sql.query(insertCompanyQuery, companyValues, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //         return res.status(500).json({ message: "Failed to insert company" });
  //       }
  //     });
  //   });
  // });

  console.log("Users data inserted successfully");
  res.status(200).json({ message: "Users data inserted successfully" });
};

const modelGetAllUsers = (req, res) => {
  const selectUser = `select * from users`;
  sql.query(selectUser, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Failed to select users" });
    }
    res.status(200).json(result);
  });
};

const modelDeleteUsers = (id, res) => {
  const deleteCompany = `DELETE FROM company WHERE id = ?`;
  const deleteUser = `DELETE geo, address, users FROM users JOIN geo ON users.id = geo.id JOIN address ON geo.id = address.id WHERE users.id = ?;`;
  sql.query(deleteCompany, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to delete company" });
    }
    sql.query(deleteUser, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Failed to delete users" });
      }
      res.status(200).json({ message: "Delete successfully" });
    });
  });
};

module.exports = { modelPostAllUsers, modelGetAllUsers, modelDeleteUsers };
