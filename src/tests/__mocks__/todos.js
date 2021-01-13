import { v4 } from 'uuid';
import { TODO_STATUS } from '../../utils/constants';

export const todos = [
    {
        id: v4(),
        description: 'Test Todo 1',
        startDate: new Date(),
        endDate: new Date(),
        status: TODO_STATUS.COMPLETE
    },
    {
        id: v4(),
        description: 'Test Todo 2',
        startDate: new Date(),
        endDate: new Date(),
        status: TODO_STATUS.INCOMPLETE
    }
]

export const todo = {
    id: v4(),
    description: 'Test Todo 3',
    startDate: new Date(),
    endDate: new Date(),
    status: TODO_STATUS.COMPLETE
}