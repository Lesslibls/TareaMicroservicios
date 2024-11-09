// se realizan las importaciones;
import 'dotenv/config';
import * as Joi from 'joi';

// Cómo lucirán las variables de entorno
interface EnvVars {  // Asegúrate de que sea 'EnvVars' y no 'Envvars'
    PORT: number;
}

// Se configura el validador de esquema
const envsSchema = Joi.object({
    PORT: Joi.number().required(),
}).unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value as EnvVars;

export const envs = {
    port: envVars.PORT,
};
