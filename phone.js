var smartPhone = /** @class */ (function () {
    function smartPhone() {
    }
    smartPhone.prototype.call = function () {
        console.log("The phone is ringing....");
    };
    smartPhone.prototype.text = function () {
        console.log("You have received a message....");
    };
    smartPhone.prototype.storeData = function () {
        console.log("New number has been saved....");
    };
    smartPhone.prototype.takePicture = function () {
        console.log("Photo has been saved....");
    };
    smartPhone.prototype.playMusic = function () {
        console.log("Your bluetooth is ready to pair....");
    };
    return smartPhone;
}());
var phone1 = new smartPhone();
console.log(phone1);
