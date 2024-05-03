import '../css/historyPage.scss';

import { useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';
import { useGetHistoryQuery } from '../query/userApiSlice';

export function HistoryPage() {
    const userId = useSelector(state => state.user.id);
    const { data: historyQuery = [], isLoading } = useGetHistoryQuery(userId);

    const history = historyQuery || [];


    const HistoryItem = (props) => {
        return (
            <li className="history__item"  >
                <div className="history__orderNum"><b>Номер заказа: №{props.id}</b></div>

                <ul className="history__basket"><b>Товары:</b>
                    {props.items.split(',').map(item => {
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
            <HistoryItem key={order.id} items={order.orderData} date={order.date} id={order.id} />
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