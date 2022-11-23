
import { Model, DataTypes } from 'sequelize';
import { sequelizes } from '../instances/mysql';
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { Trabalho } from './trabalho';


export interface AtendimentoInstance extends Model{
    idAtendimento: number;
    Data: string;
    DataAno: string;
    Hora_inicio: number;
    Hora_fim: number;
    Tempo_execucao: number;
    funcionario_ID: number;
    cliente_ID: number;
    trabalho_ID: number;
}

export const Atendimento = sequelizes.define<AtendimentoInstance>("Atendimento",{
    idAtendimento:{
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    Data:{
        type:DataTypes.STRING
    },
    DataAno:{
        type:DataTypes.VIRTUAL,
        get() {
            
            return 'ano';
        }
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
    tableName:'atendimento',
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