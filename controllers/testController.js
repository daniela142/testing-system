const asyncHandler = require('../middleware/asyncHandler');
const generateToken = require('../utils/generateToken');
const Test = require('../Classes/Test Class');

class testController{
    addNewQuestion(){
        var name = InputDeviceInfo("Enter: ") 
        var type = InputDeviceInfo("Enter: ")
        var answers = InputDeviceInfo("Enter: ")
        var correct = InputDeviceInfo("Enter: ")
        var rank = InputDeviceInfo("Enter: ")
        var imgaddress = InputDeviceInfo("Enter: ")
        Test.addQuestion(name, type, answers, correct, rank, imgaddress);
    }
}