const fs = require("fs");

const filenames = ["why", "x", "insert", "repetition", "jump", "textobjexts", "repeat"];
const usernamesData = fs.readFileSync("./src/usernames", {
  encoding: "utf8",
  flag: "r",
});
const usernames = usernamesData.split("\n").filter((a) => a);

describe("Exercises", () => {
  let solutions = {};

  beforeAll(() => {
    for (const filename of filenames) {
      const solutionData = fs.readFileSync(`./src/solutions/${filename}_solved.txt`, {
        encoding: "utf8",
        flag: "r",
      });
      solutions[filename] = solutionData;
    }
  });

  describe.each(usernames)("%s", (username) => {
    it.each(filenames)("%s.txt", (filename) => {
      const userExerciseData = fs.readFileSync(`./src/users/${username}/${filename}.txt`, {
        encoding: "utf8",
        flag: "r",
      });
      expect(userExerciseData).toEqual(solutions[filename]);
    });
  });
});
