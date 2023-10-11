import { dataType } from "./all.types"

export type TodoListProps = {
  data: {
    id?: number
    text?: string
    completed?: boolean
  }
}

export type NavigationProps = {
  data: dataType[]
}