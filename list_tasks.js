import { useDispatch, useSelector } from 'react-redux';
import { del } from '../reducers/task_slice';

function ListTasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.list);

    const delTask = (name) => {
        dispatch(del(name));
    }

    return (
        <>
        <div className="list-tasks">
            <h3 className="mb-5">Danh sách nhập:</h3>
            {
                tasks.map(function(task){
                    return (
                        <div className="task">
                           <p>{task}<button className='btn-task' onClick={() => delTask(task)}>X</button></p>            
                        </div>
                    );
                })
            }
        </div>
        </>
    );
}

export default ListTasks;