module.exports.function = function notice () { //공지사항
  var http = require('http')
  var result = http.getUrl("http://api.gwangju.go.kr/json/arriveInfo?serviceKey=h%2FJ9wKq1w9TOIZnH2%2BzZ2%2BCrH64IvrDqzVEuYEqYc%2Bs5NkvRb13GlC%2FtsALV8N2Y%2FFpEVEcGFfZmdBR0x3DzmA%3D%3D&BUSSTOP_ID=2873",{format : 'json'})

  return result
} 