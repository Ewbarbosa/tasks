import express, { Request, Response, NextFunction} from 'express';

// usar pra realizar tratamento de erros
import 'express-async-errors'

import cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

// tratamento de erros
// lança exceções com try catch sem quebrar a aplicação
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof Error){
        // se error for uma instancia do tipo Error
        return res.status(400).json({
            message: error.message
        })
    }

    // se não for do tipo erro
    return res.status(500).json({
        message: `Internal server error - ${error}`
    })    
});

app.listen(3001, () => {
    console.log(" - - SERVER ON IN PORT 3001 - - ");
});