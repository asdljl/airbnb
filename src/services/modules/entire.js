import JLRequest from "../index"

export function getEntireRoomList(offset=0,size=20){
  return JLRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}