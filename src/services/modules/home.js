import JLRequest from ".."
export function getHomeGoodPriceData(){
  return JLRequest.get({
    url: "/home/goodprice"
  })
}