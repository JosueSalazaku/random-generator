import { Inject, Injectable } from '@nestjs/common';
import { DATABASE } from './../db/database.module';
import * as schema from './../db/schema';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE) private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async getAllUsers() {
    return this.db.select().from(schema.users);
  }

  async getUserById(id: string) {
    return this.db
      .select()
      .from(schema.users)
      .where(eq(schema.users.id, parseInt(id)))
      .limit(1)
      .then((users) => users[0]);
  }
}
