import 'dotenv/config';

import { Server } from 'http';
import Youch from 'youch';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';

// Uncomment this line to enable database access
// --------
// import './database';

import Socket from './socket';

class App {
  constructor() {
    this.app = express();

    this.server = new Server(this.app);

    this.middlewares();
    this.routes();
    this.socket();
    this.exceptionHandler();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }

  socket() {
    this.socket = new Socket(this.server);
  }

  exceptionHandler() {
    this.app.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
