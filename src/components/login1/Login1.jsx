import './Login1.css';
export const Login1 = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className="col-span-4 text-white font-sans font-bold bg-black min-h-screen pl-7">
                <div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
                    <div className="row-span-4 row-start-2 text-4xl">
                        Sign In
                        <div className="pt-10 pr-20">
                            <label className="text-sm font-sans font-medium">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Write your username"
                                className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans" />
                        </div>
                        <div className="pt-2 pr-20">
                            <label className="text-sm font-sans font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Write your password"
                                className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans" />
                            <a href="" className="text-sm font-sans font-medium text-gray-600 underline">
                                Forgot password?
                            </a>
                        </div>
                        {/* <!-- Button --> */}
                        <div className="text-sm font-sans font-medium w-full pr-20 pt-14">
                            <button
                                type="button"
                                className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white">
                                SIGN IN
                            </button>
                        </div>
                    </div>
                    {/* <!-- Text --> */}
                    <a href="" className="text-sm font-sans font-medium text-gray-400 underline">
                        Don´t have an account? Sign up
                    </a>
                </div>
            </div>

            {/* <!-- Second column image --> */}
            <div className="banner col-span-8 text-white font-sans font-bold">
                {/* <!-- Aquí iría algún comentario --> */}
            </div>
        </div>

    )
}
