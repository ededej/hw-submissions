
/**
 * Created by shelby on 9/15/16.
 */

var facultyAPI = (function(){
    var faculty = [{name:"Prof Bell", section: 2}, {name:"Prof
        LaToza", section:1}];
        return {
            getFaculty : function(i)
            {
                return faculty[i].name + " ("+faculty[i].section +")";
            }
        };
})();
console.log(facultyAPI.getFaculty(0));
export