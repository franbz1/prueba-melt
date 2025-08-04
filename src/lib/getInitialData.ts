import { Task, tasksSchema } from "@/schemas/taskSchema";
import { data } from '@/data/mockData'

export const getInitialData = (): Task[] => {
  const result = tasksSchema.safeParse(data)

  if (!result.success) throw new Error('Error while obtaining the initial data')

  return result.data
}