import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import firebase from 'firebase'
import { auth } from '../config/firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setUser } from '../redux/user/action'
import { Spin, Icon } from 'antd'

export default WrapComponent => {
    const withAuthenticated = props => {
        const [load, setLoad] = useState(true)
        useEffect(() => {
            isAuthen()
        }, [])

        const isAuthen = () => {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    props.setUser(user)
                    setLoad(false)
                } else {
                    Router.push('/login')
                }
            });
        }

        const Load = () => (
            <div className="screen">
                <Icon type="loading" style={{ fontSize: 150 }} spin />
                <style jsx>{`
                    .screen {
                        height: 100vh;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `}</style>
            </div>
        )

        return (
            <>
                {load ? <Load/> : <WrapComponent User={props.User} />}

            </>
        )
    }
    const mapStateToProps = state => {
        return {
            User: state.User
        }
    }
    return compose(
        connect(mapStateToProps, { setUser })
    )(withAuthenticated)
}