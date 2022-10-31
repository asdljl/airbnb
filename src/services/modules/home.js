import JLRequest from ".."
export function getHomeGoodPriceData(){
  return JLRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return JLRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return JLRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return JLRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
  return JLRequest.get({
    url: "/home/longfor"
  })
}
export function getHomePlusData() {
  return JLRequest.get({
    url: "/home/plus"
  })
}