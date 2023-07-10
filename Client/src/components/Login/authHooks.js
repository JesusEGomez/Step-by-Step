import { useEffect, useState } from "react";
import { getAllUsers, fetchUsers, addNewUsers } from "../../features/users.slice";
import { useDispatch, useSelector } from 'react-redux';

function authHooks() {
    const [form, setForm] = useState({ user: "", pass: "", isAdmin: false })

    const [registerUser, setRegisterUser] = useState({
        name: "",
        lastname: "",
        user: "",
        mail: "",
        phone: "",
        isAdmin: false,
        pass: ""
    })

    console.info(registerUser)

    const users = useSelector(getAllUsers)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const handleSubmit = (e) => {
        const user = users.find((u) => u.user === form.user);
        e.preventDefault()

        if (!user) {
            alert('Este usuario no esta registrado en Step by Step');
        }

        if (user && user.pass === form.pass && user.isAdmin === form.isAdmin) {
            alert('Usuario válido');
        } else {
            alert('Usuario Invalido');
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleChangeCheck = (e) => {
        const { name, checked } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: checked
        }));
    }

    // -----------------------------#-----------------------------

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        const user = users.find((u) => u.user === registerUser.user);

        if (user.user === registerUser.user) {
            console.log("Este usuario ya esta registrado. Intenta con otro.")
        }
        if (user.phone === registerUser.phone) {
            console.log("Este numero de telefono ya esta registrado. Intenta con otro.")
        }

        if (user.mail === registerUser.mail) {
            console.log("Este correo electronico ya esta registrado . Intenta con otro.")

        }
    }

    const handleChangeRegister = (e) => {
        const { name, value } = e.target;
        setRegisterUser((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangeCheckRegister = (e) => {
        const { name, checked } = e.target;
        setRegisterUser((prevState) => ({
            ...prevState,
            [name]: checked
        }))
    }

    return {
        form,
        users,
        handleSubmit,
        handleChange,
        handleChangeCheck,
        // ----------------
        registerUser,
        handleSubmitRegister,
        handleChangeRegister,
        handleChangeCheckRegister,
    };
}


export default authHooks;
