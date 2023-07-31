import { classInput, classForm, classLabelInput, classSingleDiv } from './style.js';
import authHooks from './authHooks.js';
import logo from '../../assets/logo.png';
import { addNewUsers } from '../../features/users.slice.js';
import { useDispatch } from 'react-redux';

function Register({ handleLoginOrRegister }) {
    const { handleSubmitRegister, handleChangeRegister, handleChangeCheckRegister } = authHooks();
    const dispatch = useDispatch()

    return (
        <form className={classForm} onSubmit={handleSubmitRegister}>
            <img src={logo} alt="step by step" className="w-[30%] h-24 rounded mx-auto" />
            <div className={classLabelInput}>
                <label htmlFor="name">Nombre:</label>
                <label htmlFor="name">Apellido:</label>

                <input className={classInput} onChange={handleChangeRegister} type="text" name="name" id="name" placeholder='ej: Pollo' />
                <input className={classInput} onChange={handleChangeRegister} type="text" name="lastname" id="lastname" placeholder='ej: Rosti' />
            </div>

            <div className={classLabelInput}>
                <label htmlFor="name">Usuario:</label>
                <label htmlFor="name">Numero de tel:</label>

                <input className={classInput} onChange={handleChangeRegister} type="text" name="user" id="user" placeholder='ej: polloRosti' />
                <input className={classInput} onChange={handleChangeRegister} type="text" name="phone" id="phone" placeholder='+54 381381381' />
            </div>

            <div className={classSingleDiv}>
                <label htmlFor="name">Correo electronico:</label>
                <input className={classInput} onChange={handleChangeRegister} type="text" name="mail" id="mail" placeholder='pollorosti@mail.com' />
            </div>

            <div className={classLabelInput}>
                <label htmlFor="pass">Contraseña:</label>
                <label htmlFor="repass">Repita la contraseña:</label>

                <input className={classInput} onChange={handleChangeRegister} type="text" name="pass" id="pass" placeholder='********' />
                <input className={classInput} type="text" name="repass" id="repass" placeholder='********' />
            </div>

            <div className={classSingleDiv}>
                <input type="checkbox" onChange={handleChangeCheckRegister} name="isAdmin" id="isAdmin" />
                <label className='ml-2' htmlFor="isAdmin">¿Quieres ser administrador?</label>
            </div>

            <button type='submit' onClick={() => dispatch(addNewUsers())}>Crear cuenta</button>
            <button onClick={handleLoginOrRegister} type='button'>Ya tiene una cuenta?</button>
        </form>
    )
}

export default Register;