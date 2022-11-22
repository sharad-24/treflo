import { connect } from 'react-redux'
import { pizzaList } from '../action/index'
import App from '../App'
const mapStateToProps = state => ({
  pizza: state.id
})
const mapDispatchToProps = dispatch => ({
  pizzaList: () => dispatch(pizzaList())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)