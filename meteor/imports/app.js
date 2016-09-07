import NotificationsContainer from './containers/global/notificationsContainer'
import OverlaysContainer from  './containers/global/overlaysContainer'

const App = React.createClass({
  render() {
    return (
      <div className="app">
          <OverlaysContainer />
          <NotificationsContainer />
        <div className="content">
          { this.props.children }
        </div>
      </div>
    )
  }
})

export default App
