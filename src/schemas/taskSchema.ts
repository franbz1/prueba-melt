import z from "zod";

export const statusTasks = ['pending', 'in_progress', 'done'] as const

export const taskSchema = z.object({
  text: z.string().min(1),
  status: z.enum(statusTasks)
})

export const tasksSchema = z.array(taskSchema)

export type Task = z.infer<typeof taskSchema>