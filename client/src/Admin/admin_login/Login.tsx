import { useState } from "react";
import { axiosPost } from "../../Services/axiosInterceptor";
    import {
    adminlogIn,
    getAdminAccessTokenFromLocalStorage,
 } from "../../Services/helpers";
import { useAppDispatch, useAppSelector } from "../../Hooks/useRedux";
import { adminLogin } from "../../Store/Features/adminSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FunctionComponent = () => {
  const [serverError, setServerError] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.admin);

  const initialState = {
    email: "",
    password: "",
  };

  const { handleChange, errors, states, validate } = useForm(initialState);

  function handleFocus(event: any) {
    const { name } = event.target;
    setServerError({ ...serverError, [name]: "" });
  }

  async function handleLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    try {
        if (validate()) {
            const response = await axiosPost("admin/login", states);
            if (response.data && response.data.message === "Login Successful") {
                adminlogIn(response.data.accessToken);
                dispatch(adminLogin(getAdminAccessTokenFromLocalStorage()));
                toast.success("Login Successful", {
                  });

                setTimeout(() => {
                   navigate("/admin");
                }, 1500);
            }
        }
    } catch (error: any) {
        console.log(error)
      if (error.response) {
        if (error.response.status === 500) {
          // navigate("servererror");
          console.log(error.response.statusText);
        } else {
          if (
            error.response.data &&
            error.response.data.message === "Account doesnot exist"
          ) {
            console.log(error.response.data.message);
            setServerError({
              ...serverError,
              email: error.response.data.message,
              password: "",
            });
          } else {
            console.log(error.response.data.message);
            setServerError({
              ...serverError,
              password: error.response.data.message,
              email: "",
            });
          }
        }
      }
    }
  }
  return (
    <>
      {
    //   !token ?
       (
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link
              to="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
            >
              <div className="flex w-8 h-8 overflow-hidden">
                <img
                  className="w-full h-full object-cover scale-[1.5] mr-2"
                  src="/images/jakapng.png"
                  alt="logo"
                />
              </div>
              Jaka Nepal
            </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-sm xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form className="space-y-4 md:space-y-6" action="/">
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className={
                        errors.email || serverError.email
                          ? "bg-gray-50 border border-red-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none":
                           "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                      }
                      placeholder="admin@gmail.com"
                      onFocus={(e) => handleFocus(e)}
                      onChange={handleChange}
                    />
                    <span className="text-sm text-red-500">
                      {errors.email || serverError.email}
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className={
                        errors.password || serverError.password
                          ? "bg-gray-50 border border-red-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none":
                           "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                      }
                      onFocus={(e) => handleFocus(e)}
                      onChange={handleChange}
                    />
                    <span className="text-sm text-red-500">
                      {errors.password || serverError.password}
                    </span>
                  </div>
                  <div className="flex">
                    <button
                      type="submit"
                      className="w-fit text-black hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-1.5 text-center mx-auto border-2 hover:border-gray-300 hover:scale-[1.05]"
                      onClick={(e) => handleLogin(e)}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      ) 
      
    //   : (
    //     <Navigate to={"/admin"} />
    //   )
    }
    </>
  );
};

export default Login;