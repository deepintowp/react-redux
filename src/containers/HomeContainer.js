import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart, removeToCart } from "../services/actions/actions";

const mapDispatchToProps = dispatch=>({
    addToCartHandler:(data)=>dispatch(addToCart(data)),
    removeToCartHandler:(data)=>dispatch(removeToCart()),
})

const mapStateToProps = state =>({
   data:state.cartItem
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)