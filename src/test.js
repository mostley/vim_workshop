const fs = require("fs");

const usernames = ["username1", "username2"];
const filenames = ["x.txt"];

describe("Exercises", () => {
  describe.each(usernames)("%s", (username) => {
    it.each(filenames)("%s", (filename) => {
      const data = fs.readFileSync(`./src/${username}/${filename}`, {
        encoding: "utf8",
        flag: "r",
      });
      expect(data).toMatchSnapshot();
    });
  });
});
