const path = require('path')
const fs = require('fs')

const mySql = require('../config/mySqlDB')
const ImagePath = path.normalize(`${__dirname}/../../footballers2907cf3/Pictures/`)
const playerSvc = {}

playerSvc.arena = (req, res) =>{
    mySql.query('select * from footballers', async (err, players) =>{
        if(err){
            throw err
        }else{
            for(let i = 0; i < players.length; i++){
                let avtar = path.join(ImagePath, `${players[i].Name}.png`)
                avtar = path.normalize(avtar)
                try{
                    let bitmap =  await fs.readFileSync(avtar)
                    players[i].Avtar = new Buffer(bitmap).toString('base64')
                }catch(err){
                    let bitmap =  await fs.readFileSync( 'E:/MEAN/footBall/footballers2907cf3/Pictures/Adil Rami.png')
                    players[i].Avtar = new Buffer(bitmap).toString('base64')
                }
            }
           res.send(players)
        }
    })
}

module.exports = playerSvc
