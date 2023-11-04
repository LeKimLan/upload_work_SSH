

import React, {useState, createContext, useEffect} from 'react'

export default function StudentCart({student, index, handleRemoveStudent, handleLockStudent, setEditFormControl, getStudent}) {
    useEffect(() => {
        console.log('mở/khóa student', student)
    }, [student])

    return (
        <>
            <tr>
                <td>{student.studentID}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.sex == 'nam' ? "Nam" : "Nữ"}</td>
                <td>{student.birthDate}</td>
                <td>{student.birthPlace}</td>
                <td>{student.address}</td>
                <td>
                    <button type='button' onClick={() => {
                        setEditFormControl(true)
                        getStudent(student)
                    }}>Chỉnh sửa</button>
                    <button type='button' style={{backgroundColor: (student.status == "active" ? "green" : "red")}} onClick={() => {
                        handleLockStudent(student.id)
                    
                    }}>Khóa tài khoản</button>
                    <button type='button' onClick={() => {
                        handleRemoveStudent(student.id)
                    }}>Xóa</button>
                </td>
            </tr>

        </>
    )
}
