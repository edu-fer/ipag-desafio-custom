import { currentPath } from '@utils/current-path';
import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import { Client } from 'pg';

async function runMigrations() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'myuser',
    password: 'mypassword',
    database: 'mydb',
  });

  await client.connect();

  let { __dirname } = currentPath;

  const migrationsDir = path.join(__dirname, 'core', 'db', 'migrations');
  const files = readdirSync(migrationsDir).sort();

  for (const file of files) {
    const sql = readFileSync(path.join(migrationsDir, file), 'utf-8');
    console.log(`➡️ Executando migration: ${file}`);
    await client.query(sql);
  }

  await client.end();
  console.log('✅ Todas as migrations executadas!');
}

runMigrations().catch(err => {
  console.error('Erro ao rodar migrations:', err);
  process.exit(1);
});
