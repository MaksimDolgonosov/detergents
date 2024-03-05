import { useSelector } from "react-redux"

export function OrderPage(props) {
    const delivery = useSelector(state => state.user.delivery);
    




    return (
        <div className="order">
            <div className="constainer">
                <h3>Данные для доставки</h3>
                <form className="order__form">
                    {delivery === "9" ? <input type="text" ></input>}
                    <input type="text"></input>
                </form>
            </div>
            {delivery}
        </div>
    )
}

