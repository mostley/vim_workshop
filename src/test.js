const fs = require("fs");

const usernamesData = fs.readFileSync("./src/usernames", {
  encoding: "utf8",
  flag: "r",
});
const usernames = usernamesData.split("\n").filter((a) => a);
const filenames = ["x.txt"];

describe("Exercises", () => {
  describe.each(usernames)("%s", (username) => {
    it.each(filenames)("%s", (filename) => {
      const data = fs.readFileSync(`./src/users/${username}/${filename}`, {
        encoding: "utf8",
        flag: "r",
      });
      expect(data).toMatchSnapshot();
    });
  });
});
