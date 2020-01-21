import { compose } from 'redux'
import withAuthenticated from '../hocs/withAuthenticated'

const App = () => {
    return (
        <div>
            App
        </div>
    )
}

export default compose(
    withAuthenticated
)(App)