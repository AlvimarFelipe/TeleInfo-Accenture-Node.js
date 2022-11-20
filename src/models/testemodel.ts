
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';


export interface FuncionarioInstance extends Model{
    id: number;
    Nome: string;
    email:string;
}

export const Funcionario = sequelize.define<FuncionarioInstance>("Funcionario",{
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
    tableName:'funcionario',
    timestamps: false
});