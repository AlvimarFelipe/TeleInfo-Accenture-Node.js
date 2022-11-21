
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';


export interface ClienteInstance extends Model{
    id: number;
    Nome: string;
    email:string;
}

export const Cliente = sequelize.define<ClienteInstance>("Cliente",{
    id:{
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    Nome:{
        type:DataTypes.STRING
    },
    'e-mail':{
        type:DataTypes.STRING
    }
}
,{
    tableName:'cliente',
    timestamps: false
});