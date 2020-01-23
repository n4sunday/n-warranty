import { compose } from 'redux'
import { connect } from 'react-redux'

const Layout = (props) => {
    const { displayName } = props.User.data

    return (
        <main className="layout">
            <div className="menu">
                <div className="box-list">
                    <section className="list">รายละเอียดประกัน</section>
                    <section className="list">จัดการ</section>
                </div>
                <div className="box-list">
                    <section className="list no">{displayName}</section>
                    <section className="list">ออกจากระบบ</section>
                </div>
            </div>
            <div className="main">
                {props.children}
            </div>

            <style jsx>{`
                .layout {
                    display: flex;
                }
                .menu {
                    background-color: #202125;
                    height: 100vh;
                    width: 240px;
                    min-width: 230px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                }
                .main {
                    background-color: #16171b;
                    width: 100%;
                }
                .box-list {
                    width: 210px;
                    margin: 10px 0;
                }
                .list {
                    user-select: none;
                    cursor: pointer;
                    border-radius: 5px;
                    padding: 10px 20px;
                    color: #fff;
                    font-size: 16px; 
                }
                .list:hover {
                    background-color: #01b075;
                }
                .no:hover {
                    background-color: #202125;
                }
            `}</style>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        User: state.User
    }
}

export default compose(
    connect(mapStateToProps, {})
)(Layout)