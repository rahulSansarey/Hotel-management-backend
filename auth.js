const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const employeeVal = require("./models/employee");

passport.use(
  new LocalStrategy(async (USERNAME, password, done) => {
    try {
    
      const user = await employeeVal.findOne({ username: USERNAME });

      if (!user) {
        return done(null, false, { message: "Inavlid username" });
      }

      const isPasswordMatched = user.password === password ? true : false;
      if (isPasswordMatched) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;
