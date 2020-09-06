import express, {Application} from 'express';
import userRoutes from './routes/user_routes';

const app:Application = express();

app.set('port', 3000);

// Middelwares
app.use(express.json());

app.use(express.urlencoded({extended: false}));

// Routes
app.use('/users', userRoutes);

export default app;