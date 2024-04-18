import './modal.scss';


export const Modal = ({ active }) => {
    console.log(active)
    return (
        <div className={active ? "modal__wrapper_active" : "modal__wrapper"}>
            <div className="modal__content">
                Спасибо за заказ! Мы постараемся доставить его поскорее!
            </div>
        </div>
    )
}