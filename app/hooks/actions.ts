import { bindActionCreators } from '@reduxjs/toolkit'
import {todoActions} from '../store/todos/todoSlice'
import { useAppDispatch } from './redux'

const actions = {
  ...todoActions
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}