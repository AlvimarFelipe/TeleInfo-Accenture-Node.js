
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';


export interface TrabalhoInstance extends Model{
    id: number;
    Nome: string;
    email:string;
}

export const Trabalho = sequelize.define<TrabalhoInstance>("Trabalho",{
    id:{
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    Nome_trabalho:{
        type:DataTypes.STRING
    },
    Tempo_medio:{
        type:DataTypes.INTEGER
    }
}
,{
    tableName:'trabalho',
    timestamps: false
});