//Classroom Class
class Classroom {
    constructor(classroomName, courseDescription, teacherObject, studentObjectArray, testObjectArray) {
        this.classroomName = classroomName;
        this.courseDescription = courseDescription;
        this.teacherObject = teacherObject;
        this.studentObjectArray = studentObjectArray;
        this.testObjectArray = testObjectArray;
    }

    getClassroomName() {
        return this.classroomName;
    }
}