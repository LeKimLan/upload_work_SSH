

import React from 'react'

export default function AddForm({setAddFormControl, handleAddStudent}) {
    return (
        <div className='form_screen'>
            <form className='add_form' onSubmit={(event) => {
                event.preventDefault();
                handleAddStudent({
                    id: Date.now() * Math.random(),
                    studentID: event.target.studentID.value,
                    name: event.target.name.value,
                    age: event.target.age.value,
                    sex: event.target.sex.value,
                    birthDate: event.target.birthDate.value,
                    birthPlace: event.target.birthPlace.value,
                    address: event.target.address.value,
                    status: "active",
                })
                setAddFormControl(false)
            }}>
                <h3>Nhập thông tin sinh viên mới</h3>
                <button className='close_btn' onClick={() => {
                    setAddFormControl(false)
                }}>X</button>
                <div className='input_field'>
                    <div>
                        Mã sinh viên: <input type="text" name='studentID'/>
                    </div>
                    <div>
                        Tên sinh viên: <input type="text" name='name'/>
                    </div>
                    <div>
                        Tuổi: <input type="number" name='age'/>
                    </div>
                    <div>
                        Giới tính: 
                        <span>
                            Nam <input type="radio" name="sex" value='nam' defaultChecked/>
                            Nữ <input type="radio" name="sex" value='nu' />
                        </span>
                    </div>
                    <div>
                        Ngày sinh: <input type="date" name='birthDate'/>
                    </div>
                    <div>
                        Nơi sinh: <input type="text" name='birthPlace' />
                    </div>
                    <div>
                        Địa chỉ: <input type="text" name='address'/>
                    </div>
                </div>
                <button type='submit' className='add_btn'>Thêm</button>
            </form>
        </div>
           
    )
}
