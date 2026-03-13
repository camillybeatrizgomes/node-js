import express, { json } from 'express';
import router from './routes/routes';
import cors from 'cors';

function createApp() {
    const app = express();

    app.use(json());
    app.use("/api", router);
    const corsOrigin = {
        origin: "*",
        methods: ["GET"]
    }
    app.use(cors());

    return app;
}

export default createApp;