
import { Model, DataTypes } from 'sequelize';
import { sequelizes } from '../instances/mysql';


export interface TrabalhoInstance extends Model{
    id: number;
    Nome: string;
    email:string;
}

export const Trabalho = sequelizes.define<TrabalhoInstance>("Trabalho",{
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