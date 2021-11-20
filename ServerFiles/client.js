const io=require("socket.io-client")

let socket=null

function InitConnection(callBack){
  socket=io("https://stg.walrusmoney.com")
  socket.on('connect',function(){
    console.log("Socket connected")})
  socket.on('error',()=>console.log("Error while trying to connect"))
  socket.on('tickerArray',function(response){
    callBack(response)
  })
}

// returns an array of JSON's
async function fetchCoinInfo(coinArr){
  if(!socket){
    console.log("Null socket")
  }
  let resArr=[]
  socket.on('subscribe',data=>{
    resArr.push(data.body)
    return resArr
  })

  for(let coin of coinArr){
    socket.emit('subscribe',{body:{coinName:coin}})
  }

}

InitConnection()
