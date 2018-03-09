const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { saveInput, retrieveAll } = require('../../database');

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use(bodyparser.json());
  app.use(cors());

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  app.get('/', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });

  app.post('/save', (req, res) => {
    saveInput(req.body.value)
      .then((response) => {
        res.send(`successfull data insertion! ${response.name}`);
      })
      .catch((err) => res.send(err));
  });

  app.get('/retrieve', (req, res) => {
    retrieveAll()
      .then((response) => {
        res.send(response);
      });
  });
};
