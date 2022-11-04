import React, {memo, useEffect} from 'react'
import {EntireWrapper} from "@/views/entire/style";
import EntireFilter from "@/views/entire/c-cpns/entire-filter";
import EntireRooms from "@/views/entire/c-cpns/entire-rooms";
import EntirePagination from "@/views/entire/c-cpns/entire-pagination";
import {useDispatch} from "react-redux";
import {fetchRoomListAction} from "@/store/modules/entire/actionCreators";
import {changeHeaderConfigAction} from "@/store/modules/main";

const Entire  = memo(() => {
  // 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: false}))
  },[dispatch])
  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire