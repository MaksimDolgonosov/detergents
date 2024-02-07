import { useSelector } from "react-redux";

export function useAuth() {
    const { name, email, id, status, basket, history } = useSelector(state => state.user)
    return {
        isAuth: !!email,
        name,
        email,
        id,
        status,
        basket,
        history
    }
}