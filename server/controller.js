module.exports = {
    read:(req,res)=>{
        const db = req.app.get('db');
        db.get_records().then(result=>{
            res.status(200).send(result);
        })
    },
    post:(req,res)=>{
        // backEnd can generate uniqure ten digit id for each record 
        // and send it in the respons. 
        const db = req.app.get('db');
        const {userInput, userName,phoneNumber } = req.body;
        db.add_record(userInput,userName,phoneNumber).then(result=>{
            db.get_records().then(result=>{
               res.status(200).send(result); 
            }) 
        })
    },
    delete:(req,res)=>{
        const db = req.app.get('db');
        db.delete_record(req.params.id).then(result=>{
            db.get_records().then(result=>{
                res.status(200).send(result)
            })
        })
    }
}