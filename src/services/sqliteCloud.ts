import { CloudSqlite } from 'sqlitecloud-sdk';

// Configuração do banco de dados SQLiteCloud.io
const cloudSqlite = new CloudSqlite({
    apiKey: 'SUA_API_KEY', // Substitua pela sua chave de API do SQLiteCloud.io
});

// Obtenha uma referência ao banco de dados SQLite
const db = cloudSqlite.getDatabase('NOME_DO_BANCO_DE_DADOS');

export default db;
