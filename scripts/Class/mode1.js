/**
 * Created by JBH on 2015/4/24.
 * after days
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = new Person('Jihann', 22);
console.log(p1.name);
console.log(p1.age);

console.log('---------------------------------------');
Person.prototype.sex = 'boy';
Person.prototype.say = function() {
    console.log('--------------- this is me ---------------');
    console.log('My name is ' + this.name + ", I am " + this.age + " years old this year, is a " + this.sex);
};

var p2 = new Person('ZhangSan', 18);
console.log(p2.name);
console.log(p2.age);
console.log(p2.sex);
console.log(p2.say());
