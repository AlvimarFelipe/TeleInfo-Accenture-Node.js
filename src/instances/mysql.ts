import { Sequelize } from 'sequelize';

const nomebanco ='db_accenture'
const Usuario = ''
const Senha =''
const Porta ='3306'



export const sequelizes = new Sequelize(
    nomebanco,
    Usuario,
    Senha,
    {
        dialect: 'mysql',
        port: parseInt(Porta),
    }
);


