import Knex from 'knex';
import path from 'path';

const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '../../sql/dummy.db')
  },
  useNullAsDefault: true
});

export async function getUsersAndRoles() {
  return await knex
    .from('users',)
    .select('username', 'created_at', 'users.id', 'role_id', 'description')
    .leftJoin('roles', 'roles.id', '=', 'users.role_id');
}

export async function getUserAndRole(id: string) {
  return await knex
    .from('users')
    .select('username', 'created_at', 'users.id', 'role_id', 'description')
    .leftJoin('roles', 'roles.id', '=', 'users.role_id')
    .where('users.id', id);
}

export async function getSubmissionsAndUsers() {
  return await knex
    .from('submissions')
    .select('submissions.id', 'title', 'text', 'submissions.created_at', 'user_id', 'username')
    .leftJoin('users', 'users.id', '=', 'submissions.user_id');
}

export async function getSubmissionAndUser(id: string) {
  return await knex
    .from('submissions')
    .select('submissions.id', 'title', 'text', 'submissions.created_at', 'user_id', 'username')
    .leftJoin('users', 'users.id', '=', 'submissions.user_id')
    .where('submissions.id', id);
}