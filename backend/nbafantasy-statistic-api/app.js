var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { graphqlHTTP } = require('express-graphql');
var app = express();

const expressJSDocSwagger = require('express-jsdoc-swagger');
const swagger=require("./pkg/swagger")
expressJSDocSwagger(app)(swagger.options);

const routers=require("./routers")
const {fantasyClient} = require("./pkg/yahoo-fantasy");
app.use('/api/games', routers.gameRouter);
app.use('/api/yahoo', routers.yahooRouter);
app.use('/api/players', routers.playerRouter);
app.use('/api/oauth', routers.oauthRouter);
app.use('/api/statistic', routers.statisticRouter);


const schema=require("./graphql/schema");
const resolver=require("./graphql/resolver");

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));

app.get("/auth/yahoo", (req, res) => {
      fantasyClient.auth(res);
});

app.get("/auth/yahoo/callback", (req, res) => {
  fantasyClient.authCallback(req, (err) => {
    if (err) {
      return res.redirect("/error");
    }

    return res.redirect("/");
  });
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
