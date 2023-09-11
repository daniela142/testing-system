//Classroom Class
class Classroom {
    constructor(classroomName, teacherObject, studentObjectArray) {
        this.classroomName = classroomName;
        this.teacherObject = teacherObject;
        this.studentObjectArray = studentObjectArray;
    }

    getClassroomName() {
        return this.classroomName;
    }
}