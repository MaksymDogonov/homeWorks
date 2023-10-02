import React from "react"
import {Formik} from 'formik';

const TodoList = () => {
    return (
        <main className='main'>
            <h1 className='main_text'> TODO LIST </h1>
            <div className='containet'>
                <div className='row'>
                    <div className='col_form'>
                        <Formik>
                            <form>
                                <div className='form_title'>
                                    <label>Task title</label>
                                    <input type='text' name='title'/>
                                </div>
                                <div className='form_body'>
                                    <label>Task body</label>
                                    <textarea name='title'></textarea>
                                </div>
                                <div className='buttons'>
                                    <div className='form_buttons'>
                                        <input type='submit' className='btn ' value='Create Task!'/>
                                        <input type='reset' value='Reset' className='btn'/>
                                    </div>
                                    <button type='button' className='btn'>Delete All</button>
                                </div>
                            </form>
                        </Formik>
                    </div>
                    <div className='col_tasks'>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default TodoList;
