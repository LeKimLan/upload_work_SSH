

import React, {useContext} from 'react'

export default function EditForm({setEditFormControl, handleEditStudent, editStudent}) {

    return (
        <div className='form_screen'>
            <form className='edit_form' onSubmit={(event) => {
                event.preventDefault();
                handleEditStudent({
                    id: editStudent.id,
                    studentID: event.target.studentID.value,
                    name: event.target.name.value,
                    age: event.target.age.value,
                    sex: event.target.sex.value,
                    birthDate: event.target.birthDate.value,
                    birthPlace: event.target.birthPlace.value,
                    address: event.target.address.value,
                    status: "active",
                })
                setEditFormControl(false)
            }}>
                <h3>Chỉnh sửa thông tin sinh viên</h3>
                <button type='button' className='close_btn' onClick={() => {
                    setEditFormControl(false)
                }}>X</button>
                <div className='input_field'>
                    <div>
                        Mã sinh viên: <input type="text" name='studentID' defaultValue={editStudent.studentID}/>
                    </div>
                    <div>
                        Tên sinh viên: <input type="text" name='name' defaultValue={editStudent.name}/>
                    </div>
                    <div>
                        Tuổi: <input type="number" name='age' defaultValue={editStudent.age}/>
                    </div>
                    <div>
                        Giới tính: 
                        <span>
                            Nam <input type="radio" name="sex" defaultValue='nam' />
                            Nữ <input type="radio" name="sex" defaultValue='nu' />
                        </span>
                    </div>
                    <div>
                        Ngày sinh: <input type="date" name='birthDate' defaultValue={editStudent.birthDate}/>
                    </div>
                    <div>
                        Nơi sinh: <input type="text" name='birthPlace'  defaultValue={editStudent.birthPlace}/>
                    </div>
                    <div>
                        Địa chỉ: <input type="text" name='address' defaultValue={editStudent.address}/>
                    </div>
                </div>
                <button type='submit' className='add_btn'>Chỉnh sửa</button>
            </form>
        </div>
    )
}
