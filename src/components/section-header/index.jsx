import React, { memo } from 'react'
import PropTypes from "prop-types";
import {HeaderWrapper} from "@/components/section-header/style";

const SectionHeader = memo((props) => {
  const { title, subTitle} = props
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      { subTitle && <div className="subTitle">{subTitle}</div>}
    </HeaderWrapper>
  )
})
SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader