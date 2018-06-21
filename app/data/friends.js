let friendsjs = {
  fArr : [{
            rname: "steven",
            name: "Steve",
            age: 25,
            sex: "male"
          },
          {
            rname: "mildred",
            name: "Milly",
            age: 27,
            sex: "female"
          }
        ],
fadd : (rname,name,age,sex)=>{
  this.rname = rname;
  this.name = name;
  this.age = age;
  this.sex = sex;
}
};

module.exports = friendsjs;