import Video from '../video/video'

import './test.css'

let Test = (props) => {
  return (
    <div className="content">
      <div className="left"></div>
      <div className="right">
        <Video />
      </div>
    </div>
  )
}

export default Test
