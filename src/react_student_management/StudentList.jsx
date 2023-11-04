

import React, {useState} from 'react'
import StudentCart from './StudentCart'
import AddForm from './AddForm'
import EditForm from './EditForm'
import './studentList.scss'

export default function StudentList() {
    const [studentList, setStudentList] = useState([
        {
            id: Date.now() * Math.random(),
            studentID: 0,
            name: "studen 0",
            age: 0,
            sex: "nam",
            birthDate: "random birth date",
            birthPlace: "random city",
            address: "random address",
            status: "active",
        }
    ])
    const [addFormControl, setAddFormControl] = useState(false)
    const [editFormControl, setEditFormControl] = useState(false)

    function handleAddStudent(newStudent) {
        setStudentList([...studentList, newStudent])
    }

    let [editStudent, setEditStudent] = useState({});

    function getStudent(student) {
        setEditStudent(editStudent = student)
    }

    function handleEditStudent(editedStudent) {
        setStudentList(studentList.map((student) => {
            if(student.id == editedStudent.id) {
                return editedStudent
            } else {
                return student
            }
        }))
    }
    function handleRemoveStudent(studentID) {
        setStudentList(studentList.filter(student => student.id != studentID))
    }
    function handleLockStudent(studentID) {
        setStudentList(studentList.map((student) => {
            if(student.id == studentID && student.status == "active") {
                return {
                    ...student,
                    status: "locked"
                }
            } if(student.id == studentID && student.status == "locked") {
                return {
                    ...student,
                    status: "active"
                }
            } else {
                return student
            }
        }))
    }

    return (
        <>
            <button onClick={() => {
                setAddFormControl(true)
            }}>Thêm học sinh</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Nơi sinh</th>
                        <th>Địa chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map((student, index) => {
                            return <StudentCart handleRemoveStudent={handleRemoveStudent} setStudentList={setStudentList}
                            handleLockStudent={handleLockStudent} setEditFormControl={setEditFormControl} getStudent={getStudent}
                            key={Date.now() * Math.random()} student={student}  index={index}/>
                        })
                    }
                </tbody>
            </table>
            
            {
                addFormControl && <AddForm setAddFormControl={setAddFormControl} handleAddStudent={handleAddStudent} />
            }
            {
                editFormControl && <EditForm editStudent={editStudent} setEditFormControl={setEditFormControl} handleEditStudent={handleEditStudent} />
            }
        </>
    )
}
