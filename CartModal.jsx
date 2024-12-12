const CartModal = ({ cart, setCart, closeModal }) => {
  return (
    <>
      <div className="popup-container">
        <div className="popup-details">
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </>
  )
}

export default CartModal
