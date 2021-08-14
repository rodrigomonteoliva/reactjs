
const CartItemContainer = (props) => {
    //console.log(props)
    const {item1,item2} = props;
    return (
        <>
            <h1>Discos: {item1} {item2} {props.children}</h1>
        </>
    )
}
export default CartItemContainer

