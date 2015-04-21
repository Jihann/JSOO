/**
 * Created by JBH on 2015/4/21.
 */

//采用闭包模拟常量
var Constant = (function() {
   //定义私有变量
    var constants = {
        VERSION: 10.2
    };

    //构造函数,函数字面量
    var constructor = function() {
    };

    //定义一个静态方法
    constructor.getConstants = function(name) {
        return constants[name];
    };

    return constructor;
})();

//访问常量
var version = Constant.getConstants('VERSION');
console.log(version);
