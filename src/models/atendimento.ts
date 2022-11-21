
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { Trabalho } from './trabalho';


export interface AtendimentoInstance extends Model{
    id: number;
    Nome: string;
    email:string;
}

export const Atendimento = sequelize.define<AtendimentoInstance>("Atendimento",{
    idAtendimento:{
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    Data:{
        type:DataTypes.STRING
    },
    Hora_inicio:{
        type:DataTypes.TIME
    },
    Hora_fim:{
        type:DataTypes.TIME
    },
    Tempo_execucao:{
        type:DataTypes.INTEGER
    },
    funcionario_ID:{
        type:DataTypes.INTEGER
    },
    cliente_ID:{
        type:DataTypes.INTEGER
    },
    trabalho_ID:{
        type:DataTypes.INTEGER
    }
}
,{
    tableName:'funcionario',
    timestamps: false
});

Funcionario.hasMany(Atendimento, {
    foreignKey: 'funcionario_ID'
  });
  Atendimento.belongsTo(Funcionario);

  Cliente.hasMany(Atendimento, {
    foreignKey: 'cliente_ID'
  });
  Atendimento.belongsTo(Cliente);

  Trabalho.hasMany(Atendimento, {
    foreignKey: 'trabalho_ID'
  });
  Atendimento.belongsTo(Trabalho);