import { QueryResultRow } from 'pg';
import { query } from '../db/connexion';

export abstract class AbstractRepository<T extends QueryResultRow = any> {
  protected tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  async findAll(): Promise<T[]> {
    return query<T>(`SELECT * FROM ${this.tableName}`);
  }

  async findById(id: number | string): Promise<T | null> {
    const rows = await query<T>(`SELECT * FROM ${this.tableName} WHERE id = $1 LIMIT 1`, [id]);
    return rows.length ? rows[0] : null;
  }

  async delete(id: number | string): Promise<void> {
    await query(`DELETE FROM ${this.tableName} WHERE id = $1`, [id]);
  }

  // método abstrato para salvar (cada entidade pode ter sua lógica)
  abstract create(data: Partial<T>): Promise<T>;
}
