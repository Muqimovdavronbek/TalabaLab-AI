CREATE TABLE `exports` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`task_id` text NOT NULL,
	`version_id` text NOT NULL,
	`format` text NOT NULL,
	`name` text NOT NULL,
	`storage_key` text NOT NULL,
	`size` integer NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`version_id`) REFERENCES `solution_versions`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `exports_version` ON `exports` (`version_id`);--> statement-breakpoint
CREATE TABLE `files` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`task_id` text,
	`name` text NOT NULL,
	`mime` text NOT NULL,
	`size` integer NOT NULL,
	`storage_key` text NOT NULL,
	`extracted_text` text,
	`created_at` text NOT NULL,
	FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `files_owner` ON `files` (`owner`);--> statement-breakpoint
CREATE TABLE `profiles` (
	`owner` text PRIMARY KEY NOT NULL,
	`data` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `subjects` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`name` text NOT NULL,
	`description` text DEFAULT '' NOT NULL,
	`color` text DEFAULT 'violet' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `subjects_owner` ON `subjects` (`owner`);--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`title` text NOT NULL,
	`subject` text NOT NULL,
	`input` text NOT NULL,
	`mode` text DEFAULT 'explain' NOT NULL,
	`work_type` text DEFAULT 'exercise' NOT NULL,
	`variant` text DEFAULT '' NOT NULL,
	`requirements` text DEFAULT '' NOT NULL,
	`due_date` text,
	`status` text DEFAULT 'draft' NOT NULL,
	`input_version` integer DEFAULT 1 NOT NULL,
	`current_version` text,
	`run_id` text,
	`error` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `tasks_owner_updated` ON `tasks` (`owner`,`updated_at`);--> statement-breakpoint
CREATE TABLE `usage_windows` (
	`id` text PRIMARY KEY NOT NULL,
	`count` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `solution_versions` (
	`id` text PRIMARY KEY NOT NULL,
	`task_id` text NOT NULL,
	`owner` text NOT NULL,
	`input_version` integer NOT NULL,
	`revision` integer NOT NULL,
	`solution` text NOT NULL,
	`evidence` text NOT NULL,
	`origin` text NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `versions_task_revision` ON `solution_versions` (`task_id`,`revision`);