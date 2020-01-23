import { useState } from 'react'
import Router from 'next/router'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { auth } from '../config/firebase'

const Login = () => {

    //State
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)

    //Function
    const nextLogin = () => {
        setLoad(true)
        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) Router.push('/')
                setLoad(false)

            })
            .catch(error => {
                setLoad(false)
            })
    }

    return (
        <main className="screen">
            <section className="box">
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="email"
                    placeholder="email"
                    className="mb-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    className="mb-30"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bt-login w-100" onClick={nextLogin} loading={load}>
                    Log In
                </button>
            </section>
            <style jsx>{`
                .screen {
                    background-color: #202125;
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .box {
                    background-color: #fff;
                    width: 500px;
                    height: 400px;
                    padding: 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .bt-login {
                    background-color: #01b075;
                    border: none;
                    color: #fff;
                    font-size: 18px;
                    height: 35px;
                }
                .bt-login:hover {
                    background-color: #01a178;
                }
                .bt-login:active {
                    background-color: #01a188;
                }
                @media (max-width: 426px) {
                    .box {
                        width: 425px;
                        height: 100vh;
                    }    
                }
            `}</style>
        </main>
    )
}

export default Login