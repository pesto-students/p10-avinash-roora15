var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach
var Teacher = function() {
    this.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
    }
}
Teacher.prototype = new Person();
var him = new Teacher();

him.initialize("Avinash", 30);
him.teach("Javascript");