import Knex from 'knex';
import path from 'path';

const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '../../../sql/dev.db')
  },
  useNullAsDefault: true
});

interface Submission {
  id: number,
  title: string,
  text: string,
  username: string,
  created_at: string
}

interface User {
  username: string,
  id: number,
  description: string,
  created_at: string
}

export async function getUsersAndRoles(): Promise<User[]> {
  return await knex
    .from('users',)
    .select('username', 'created_at', 'users.id', 'role_id', 'description')
    .leftJoin('roles', 'roles.id', '=', 'users.role_id');
}

export async function getSubmissionsAndUsers(): Promise<Submission[]> {
  return await knex
    .from('submissions')
    .select('submissions.id', 'title', 'text', 'submissions.created_at', 'user_id', 'username')
    .leftJoin('users', 'users.id', '=', 'submissions.user_id');
}

export async function getSubmissionAndUser(id: string): Promise<Submission> {
  return (await knex
    .from('submissions')
    .select('submissions.id', 'title', 'text', 'submissions.created_at', 'user_id', 'username')
    .leftJoin('users', 'users.id', '=', 'submissions.user_id')
    .where('submissions.id', id))[0];
}