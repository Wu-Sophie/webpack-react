import React from 'react'
import {Link} from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="app">
        <section className="body">
          {this.props.children}
        </section>
        <footer>
          <ul className="nav">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/list">商品列表</Link></li>
            <li><Link to="/home">我的</Link></li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default App