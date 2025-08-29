export abstract class AbstractRepository<T> {
  constructor() {}
  async create(): Promise<void> {}
  async get(): Promise<void> {}
  async list(): Promise<void> {}
  async update(): Promise<void> {}
  async delete(): Promise<void> {}
}
