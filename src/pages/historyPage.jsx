import '../css/historyPage.scss';

import { useSelector } from "react-redux";
import { useGetUserQuery } from "../query/userApiSlice";
import Spinner from 'react-bootstrap/Spinner';

export function HistoryPage() {
    const userId = useSelector(state => state.user.id);
    const { data: user = { history: [] }, isLoading } = useGetUserQuery(userId);
    const history = user.history;
    // console.lo

    const HistoryItem = (props) => {
        return (
            <li className="history__item"  >
                <div className="history__orderNum">Номер заказа: №{props.id}</div>

                <ul className="history__basket">Товары:
                    {props.items.map(item => {
                        return (
                            <li key={Math.random()}>{item}</li>
                        )
                    })}
                </ul>
                <div className="history__date">Дата заказа: {props.date}</div>
            </li>
        )
    }



    const historyItems = history.map(order => {
        return (
            <HistoryItem key={order.id} items={order.order} date={order.date} id={order.id}/>
        )
    })


    return (
        <div className="container">
            <div className="history">
                <h3 className="title">История заказов</h3>
                {isLoading ? <Spinner /> : null}
                <ul>
                    {historyItems}
                </ul>

            </div>

        </div>

    )
}