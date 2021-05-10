import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function DefaultLayout({ component: Component, ...rest }) {
    return (
        <div>
            <Route {...rest} render={matchProps => (
                <div className="DefaultLayout">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="Header">Header</div>
                    <Component {...matchProps} />
                    <div className="Footer">Footer</div>
                </div>
            )} />
        </div>
    )
}

export default DefaultLayout
