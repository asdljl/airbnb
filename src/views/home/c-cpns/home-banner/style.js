import styled from "styled-components";
import coverImg from "@/assets/img/cover_01.jpeg"

export const BannerWrapper = styled.div`
  height: 529px;
  // 直接引入的写法
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
  //background: url(${coverImg}) center/cover;
`