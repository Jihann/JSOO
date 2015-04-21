/**
 * Created by JBH on 2015/4/21.
 */
var Constant = (function() {
    var VERSION = 10.2; //定义一个常量
    //定义一个对象
    var map = {
        COUNTRY: 'China',
        LANGUAGE: 'Chinese'
    };
    //给对象添加静态方法
   return {
       getConstants : function() {
             return VERSION;
       },
       getHone : function(name) {
            return map[name];
       }
   }
})();

//访问常量
var version = Constant.getConstants();
console.log(version);
console.log(Constant.VERSION);//undefined

var language = Constant.getHone('LANGUAGE');
console.log(language);