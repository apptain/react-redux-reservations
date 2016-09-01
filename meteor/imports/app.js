import NotificationsContainer from './containers/app/notificationsContainer'
import OverlaysContainer from  './containers/app/overlaysContainer'

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
