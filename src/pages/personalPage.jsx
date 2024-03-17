import { useSelector } from 'react-redux';
import '../css/personalPage.scss';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { useSetUserDataMutation } from '../query/userApiSlice';
import { setUserData } from '../slices/userSlice';
import { useDispatch } from 'react-redux';


export function PersonalPage() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [tel, setTel] = useState(user.tel);
  const [email] = useState(user.email);

  const [updateUserData] = useSetUserDataMutation();

  const setPersonalData = async () => {
    const userId = await user.id;
    const currentData = await { name, surname, tel }
    updateUserData({userId, currentData});
    dispatch(setUserData(currentData));
  }

  return (
    <div className='container'>
      <h3 style={{ marginTop: "5px" }} className='title'>Личный кабинет</h3>
      <div className="personal">
        <label htmlFor="name">Ваше имя:</label>
        <input type="text" name="name" placeholder={name} value={name} onChange={(e) => setName(e.target.value)}></input>
        <label htmlFor="surname">Ваша фамилия:</label>
        <input type="text" name="surname" placeholder={surname} value={surname} onChange={(e) => setSurname(e.target.value)}></input>
        <label htmlFor="tel">Ваш номер телефона:</label>
        <InputMask required name="tel" mask="+375 99 999 99 99" placeholder={tel ? tel : "Ваш номер телефона"} value={tel} onChange={(e) => setTel(e.target.value)}></InputMask>
        {/* <input type="text" name="name" placeholder={tel} ></input> */}
        <label htmlFor="email">Ваш email:</label>
        <input type="text" name="email" placeholder={email} disabled></input>

        <button onClick={setPersonalData}>Сохранить изменения</button>
      </div>
    </div>
  )
}
