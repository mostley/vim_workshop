const fs = require("fs");

describe("Exercises", () => {
  describe.each([["username1"], ["username2"]])("%s", (username) => {
    it.each([["x.txt"]])("%s", (filename) => {
      const data = fs.readFileSync(`./src/${username}/${filename}`, {
        encoding: "utf8",
        flag: "r",
      });
      expect(data).toMatchSnapshot();
    });
  });
});
