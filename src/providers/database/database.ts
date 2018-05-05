import { Injectable } from '@angular/core';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import "reflect-metadata";

@Injectable()
export class DatabaseProvider {

  constructor() { }

  // /**
  //  * Cria um banco caso não exista ou pega um banco existente com o nome no parametro
  //  */
  // public getDB() {
  //   return this.sqlite.create({
  //     name: 'Pacientes.db',
  //     location: 'default'
  //   });
  // }
  // /**
  //  * Cria a estrutura inicial do banco de dados
  //  */
  // public createDatabase() {
  //   return this.getDB()
  //     .then((db: SQLiteObject) => {
  //       // Criando as tabelas
  //       this.createTables(db);
  //       // Inserindo dados padrão
  //       this.insertDefaultItems(db);
  //     })
  //     .catch(e => console.log(e));
  // }
  // /**
  //  * Criando as tabelas no banco de dados
  //  * @param db
  //  */
  // private createTables(db: SQLiteObject) {
  //   // Criando as tabelas
  //   db.sqlBatch(['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL,' +
  //     ' nome TEXT,' +
  //     ' datanascimento DATE NOT NULL' +
  //     ', sexo TEXT NOT NULL, ' +
  //     ' peso FLOAT NOT NULL,' +
  //     ' altura FLOAT NOT NULL']
  //   ])
  //     .then(() => console.log('Tabelas criadas'))
  //     .catch(e => console.error('Erro ao criar as tabelas', e));
  // }
  //
  // /**
  //  * Incluindo os dados padrões
  //  * @param db
  //  */
  // private insertDefaultItems(db: SQLiteObject) {
  //   db.executeSql('select COUNT id  from Pacientes', {})
  //     .then((data: any) => {
  //       //Se não existe nenhum registro
  //       if (data.rows.item(0).qtd == 0) {
  //
  //         // Criando as tabelas
  //         db.sqlBatch([
  //           ['insert into Pacientes (name) values (?)', ['Joao']],
  //           ['insert into Pacientes (datanascimento) values (?)', ['22/01/1999']],
  //           ['insert into Pacientes (sexo) values (?)', ['m']],
  //           ['insert into Pacientes (peso) values (?)', ['75,8']],
  //           ['insert into Pacientes (altura) values (?)', ['1,83']]
  //         ])
  //           .then(() => console.log('Dados padrões incluídos'))
  //           .catch(e => console.error('Erro ao incluir dados padrões', e));
  //
  //       }
  //     })
  //     .catch(e => console.error('Erro ao consultar a qtd de categorias', e));
  // }
}
