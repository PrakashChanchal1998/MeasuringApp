
const Realm=require('realm')

export const Weight = {
    name: "Weight",
    properties: {
        uid: "string",
        weight: "string",
        date: "string"
    },
    primaryKey: "uid",
};

export const addUser = async(data)=>{
    Realm.open({schema:[Weight]})
    .then(realm=>{
        realm.write(()=>{
            const updateData=realm.create(
                'Weight',{
                    uid:data.uid,
                    weight:data.weight,
                    date:data.date,
                }
            )
        }); let newData = realm.objects('Weight');
        console.log(newData)
    }).catch(error=>{console.log(error)})
    console.log('Done');
    //console.log(updateData.name);
    
}
export const DeleteUser=(item)=>{
    Realm.open({schema:[Weight]})
    .then(realm=>{
    realm.write(() => {
       realm.delete(realm.objects('Weight').filter(userObj => userObj.uid == item.uid));
        })
    })
}
export const editUser=(item)=>{
    Realm.open({schema:[Weight]})
    .then(realm=>{
    realm.write(() => {
      var obj= realm.objects('Weight')
      obj.forEach((data,index)=>{
          if(data.uid==item.uid)
          {
            obj[index].uid=item.uid
            obj[index].weight=item.weight
            obj[index].date=item.date 
          }
      })
        
    })
    })
}