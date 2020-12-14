import { connect } from 'react-redux';
import { incrementActionCreator, decrementActionCreator, incrementActionAsyncCreator } from '../redux/actions'

import App from '../components/App'

// export default connect(state => {
//         return { count: state.count}
//     },
//     {
//         incrementActionCreator, decrementActionCreator
//     }
// )(App);

export default connect(state =>  ({ count: state.count}),
    {incrementActionCreator, decrementActionCreator, incrementActionAsyncCreator}
)(App);

