"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert(
        "users",
        [
          {
            id: 1,
            email: "user1@test.com",
            password: "password@1",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 2,
            email: "user2@test.com",
            password: "password@2",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 3,
            email: "user3@test.com",
            password: "password@3",
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "user_infos",
        [
          {
            id: 1,
            user_id: 1,
            name: "user one",
            age: 18,
            address: "address1",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 2,
            user_id: 2,
            name: "user two",
            age: 18,
            address: "address2",
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );
    } catch (err) {
      console.log(err);
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user_infos", null, {});
    await queryInterface.bulkDelete("users", null, {});
    return;
  },
};
