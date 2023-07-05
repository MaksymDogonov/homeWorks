"use strict";
(function () {
  function Student(firstName, surname, yearOfBirthday) {
    this.firstName = firstName;
    this.surname = surname;
    this.yearOfBirthday = yearOfBirthday;

    this.attendance = Array(10);
    this.scores = Array(10);
    this.currentLesson = 0;

    Student.prototype.getAge = () => {
      return 2023 - this.yearOfBirthday;
    };

    Student.prototype.setAttd = (flag, score = true) => {
      if (this.currentLesson === 10) throw new Error("You can add 10 items");
      this.attendance[this.currentLesson] = flag;
      score ? (this.currentLesson += 1) : null;
    };

    Student.prototype.present = (mark = null) => {
      this.setAttd(true, mark === null);
      if (mark !== null) {
        this.mark(mark);
        this.currentLesson += 1;
      }
    };
    Student.prototype.absent = () => {
      this.setAttd(false);
    };

    Student.prototype.mark = (score = null, lessonIndex) => {
      if (this.currentLesson === 10) throw new Error("You can add 10 items");
      if (lessonIndex > 9) throw new Error("You can add 10 items");
      if (score > 10) throw new Error("Mark can be from 0 to 10");
      if (typeof lessonIndex === "number") {
        this.scores[lessonIndex] = score;
        return;
      }
      this.scores[this.currentLesson] = score;
    };

    Student.prototype.scoreCalc = () => {
      const result = this.scores.reduce(
        (acc, item) => {
          if (item !== null && typeof item === "number") {
            acc.score += item;
            acc.attd += 1;
            return acc;
          }
        },
        {
          score: 0,
          attd: 0,
        }
      );

      return +(result.score / result.attd).toFixed(1);
    };

    Student.prototype.summaryCalc = () => {
      const result = this.attendance.reduce((acc, item) => {
        if (item) acc += 1;
        return acc;
      }, 0);

      return result / this.currentLesson;
    };

    Student.prototype.summary = () => {
      const score = this.scoreCalc();
      const attd = this.summaryCalc();
      console.log(score, attd);

      if (score >= 9 && attd >= 0.9) return "Ути какой молодчинка!";
      if (score < 9 || attd < 0.9) return "Норм, но можно лучше";
      if (score < 9 && attd < 0.9) return "Редиска!";
    };
  }

  const res = new Student("Max", "Dogonov", 1996);
  res.present(10);
  res.present(9);
  res.present(8);
  res.present(8);
  res.absent();
  res.absent();
  res.absent();
  res.absent();
  res.absent();
  res.absent();

  console.log(res.summary());
})();
