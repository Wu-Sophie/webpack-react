import React from 'react'

class GoodItme extends React.Component {
  constructor (props) {
    super(props)
  }


  render () {
    const {node, onClick} = this.props
    return (
      <div className="project-item" onClick={() => onClick(node._id)}>
        <div className="cover-box">
          <img className="cover" src={node.basicInfo.coverUrl} alt=''/>
          {node.categoryType === 2 && <img class="playIcon"  src="/src/assets/imgs/icon play 2x_72x72.png" alt=""/>}
        </div>
        <div className='info'>
          <h4 className="title">{node.basicInfo.title}</h4>
          {node.hasAnalysis && 
            <span className="tag hasAnalysis">有解析</span>
          }
          {node.hasAudio && 
            <span className="tag hasAudio">带音频</span>
          }
        </div>
        <div className="arrow">
          <img className='icon' src="/src/assets/imgs/arrowr-right-gray.png"/>
        </div>
      </div>
    )
  }
}

export default GoodItme