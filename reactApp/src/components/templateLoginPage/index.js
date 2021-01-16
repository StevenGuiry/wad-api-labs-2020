import React from "react";

const templateLoginPage = ({ children }) => {
    return (
        <>
            <div className="row">
                <div className="col-3">{children}</div>
                <div className="col-3"></div>
                <p> Welcome, please login to view movies!!</p>
            </div>
        </>
    );
};

export default templateLoginPage;