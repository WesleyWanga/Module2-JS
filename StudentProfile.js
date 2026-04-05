function createStudentProfile(){
    function getStudentName(){
        return "Wesley";
    }
    function getAge(){
        return 30;
    }
    function getCountry(){
        return "Kenya";
    }
    function getFavoriteLanguage(){
        return "JavaScript"
    }
    function getSchoolName(){
        return "Moringa School";
    }
    return (getStudentName()+ " is " + getAge()+ " years old, comes from " + getCountry() + " and is learning "+ getFavoriteLanguage()+ " at " + getSchoolName())
}
let profile=createStudentProfile();
console.log(profile);