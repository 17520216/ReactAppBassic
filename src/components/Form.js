import React, { useState } from 'react'

const Form = () => {



    const [valueForm, setValueForm] = useState({
        email: "",
        password: "",
    });


    const [error, setError] = useState({});


    const onSubmit = (ev) => {
        let err = {}
        if (!valueForm.email) {
            err.email = "please enter your email"
        } else {
            delete err.email
        }

        if (!valueForm.password) {
            err.password = "please enter your password"
        } else {
            delete err.password
        }
        setError(err);

        if (Object.keys(err).length === 0) {
            console.log('🚀----> Here form');
            console.log('🚀valueForm---->', valueForm);
        }
    }

    const changePassword = (ev) => {
        setError({ ...error, password: "" });
        setValueForm({ ...valueForm, password: ev.target.value });
    }

    const changeEmail = (ev) => {
        setError({ ...error, email: "" });
        setValueForm({ email: ev.target.value, password: valueForm.password });

    }


    return (
        <div className="container mx-auto px-4 h-full pt-[100px]">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h6 className="text-blueGray-500 text-sm font-bold">
                                    Sign in with
                                </h6>
                            </div>
                            <div className="btn-wrapper text-center">
                                <button
                                    className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Google
                                </button>
                                <button
                                    className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    FaceBook
                                </button>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="text-blueGray-400 text-center mb-3 font-bold">
                                <small>Or sign in with credentials</small>
                            </div>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Email
                                </label>
                                <input
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    type="text"
                                    placeholder="Nhập tên đăng nhập"
                                    id="email"
                                    value={valueForm.email}
                                    onChange={changeEmail}
                                />
                                {error.email && <p className="text-red-300 my-[6px]">{error.email}</p>}

                            </div>

                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Password
                                </label>
                                <input
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    value={valueForm.password}
                                    onChange={changePassword}
                                />
                                {error.password && <p className="text-red-300 my-[6px]">{error.password}</p>}
                            </div>

                            <div className="text-center mt-6">
                                <button
                                    className="bg-blueGray-800 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    type="submit"
                                    onClick={onSubmit}
                                >
                                    Sign In
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form