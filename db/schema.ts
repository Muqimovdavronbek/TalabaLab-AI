import { sqliteTable, text, integer, index, uniqueIndex } from 'drizzle-orm/sqlite-core';
export const subjects = sqliteTable('subjects', {
  id: text('id').primaryKey(), owner: text('owner').notNull(), name: text('name').notNull(),
  description: text('description').notNull().default(''), color: text('color').notNull().default('violet'), createdAt: text('created_at').notNull(),
}, t => [index('subjects_owner').on(t.owner)]);
export const tasks = sqliteTable('tasks', {
  id: text('id').primaryKey(), owner: text('owner').notNull(), title: text('title').notNull(), subject: text('subject').notNull(), input: text('input').notNull(),
  mode: text('mode').notNull().default('explain'), workType: text('work_type').notNull().default('exercise'), variant: text('variant').notNull().default(''), requirements: text('requirements').notNull().default(''),
  dueDate: text('due_date'), status: text('status').notNull().default('draft'), inputVersion: integer('input_version').notNull().default(1), currentVersion: text('current_version'),
  runId: text('run_id'), error: text('error'), createdAt: text('created_at').notNull(), updatedAt: text('updated_at').notNull(),
}, t => [index('tasks_owner_updated').on(t.owner, t.updatedAt)]);
export const versions = sqliteTable('solution_versions', {
  id: text('id').primaryKey(), taskId: text('task_id').notNull().references(() => tasks.id, {onDelete:'cascade'}), owner: text('owner').notNull(),
  inputVersion: integer('input_version').notNull(), revision: integer('revision').notNull(), solution: text('solution').notNull(), evidence: text('evidence').notNull(),
  origin: text('origin').notNull(), createdAt: text('created_at').notNull(),
}, t => [uniqueIndex('versions_task_revision').on(t.taskId, t.revision)]);
export const files = sqliteTable('files', {
  id: text('id').primaryKey(), owner: text('owner').notNull(), taskId: text('task_id').references(() => tasks.id, {onDelete:'cascade'}), name: text('name').notNull(), mime: text('mime').notNull(),
  size: integer('size').notNull(), storageKey: text('storage_key').notNull(), extractedText: text('extracted_text'), createdAt: text('created_at').notNull(),
}, t => [index('files_owner').on(t.owner)]);
export const exportsTable = sqliteTable('exports', {
  id: text('id').primaryKey(), owner: text('owner').notNull(), taskId: text('task_id').notNull().references(() => tasks.id, {onDelete:'cascade'}),
  versionId: text('version_id').notNull().references(() => versions.id, {onDelete:'cascade'}), format: text('format').notNull(), name: text('name').notNull(),
  storageKey: text('storage_key').notNull(), size: integer('size').notNull(), createdAt: text('created_at').notNull(),
}, t => [index('exports_version').on(t.versionId)]);
export const profiles = sqliteTable('profiles', { owner: text('owner').primaryKey(), data: text('data').notNull(), updatedAt: text('updated_at').notNull() });
export const usage = sqliteTable('usage_windows', { id: text('id').primaryKey(), count: integer('count').notNull().default(0) });
