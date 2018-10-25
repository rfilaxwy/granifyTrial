module.exports = {
  read:(req,res)=>{
    const db = req.app.get('db');

    db.get_records().then(result=>{
        res.status(200).send(result);
    });
  },

  post:(req,res)=>{
    const db = req.app.get('db');
    const {userName,phoneNumber, userInputOne,userInputTwo, timestamp, timeIn } = req.body;
    db.add_record(userName,phoneNumber, userInputOne,userInputTwo, timestamp).then(result=>{
        db.permenant_timeStamp(timeIn).then(result=>{
            res.status(200)});
        db.get_records().then(result=>{
            res.status(200).send(result); 
        });
    });
  },
  
  delete:(req,res)=>{
    const db = req.app.get('db'); 
    db.select_record(req.params.id).then(result=>{
      if(result.length>0){
        db.delete_record(req.params.id).then(result=>{
            db.get_records().then(result=>{
                res.status(200).send(result);
                });
            })
        } else{
            res.status(200).send("No such id found.")
        }
})},
read_newest:(req,res)=>{
    const db = req.app.get('db');
    db.get_newest().then(result=>{
        res.status(200).send(result)
    })
},
read_length:(req,res)=>{
    const db = req.app.get('db');
    db.get_time_size().then(result=>{
        res.status(200).send(result)
    })
}
}