
class Detail{

    constructor(data){
     this.data=data;
    }
    insertUserDetail(userInput){
        var {name,email,DOB,gender,registrationDate,validity,membershipId,address,city,zipCode,phoneNo,memberType}=userInput
        var obj=[
              {
                  name:name,
                  email:email,
                  DOB:DOB,
                  gender:gender,
                  registrationDate:registrationDate,
                  validity:validity,
                  membershipId:membershipId,
                  address:address,
                  city:city,
                  zipCode:zipCode,
                  phoneNo:phoneNo,
                  memberType:memberType
                }
            ]
        var userDetail=this.data.userDetail;
        var promise=new Promise((resolve,reject)=>{
            userDetail.insertMany(obj) 
            .then((data)=>{
              resolve({"success":data[0]})
             }) 
            .catch((err)=>{ 
              reject({"error":err})
            })
        })
        return promise;

    }
    searchUser(searchText){
        var userDetail=this.data.userDetail;
        var promise=new Promise(async(resolve,reject)=>{
            try{
             var userList= await userDetail.find({
                $or: [
                    { name: { $regex: searchText, $options: 'i' } },
                    { email: { $regex: searchText, $options: 'i' } },
                  ]            })
                resolve({"success":userList});
            }
            catch(err){
                resolve({"error":err});
            }
        })
        return promise;
    }
}

module.exports=Detail;

