import { useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  const url = new URL(request.url);
  const message = url.searchParams.get("message");
  return message;
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/"
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    console.log(data);
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (error) {
    return error.message;
  }
  // return false
}

export default function Login() {
  // const [status, setStatus] = useState("idle");
  // const [error, setError] = useState(null);
  const message = useLoaderData();
  const error = useActionData();
  const navigation = useNavigation();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setStatus("submitting");
  //   loginUser(formData)
  //     .then((data) => console.log(data))
  //     .catch((err) => setError(err))
  //     .finally(setStatus("idle"));
  //   setError(null);
  // }

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div
            style={{ border: "1px solid #e0dfdc" }}
            className="col-lg-6 offset-3 p-5"
          >
            <Form replace className="form p-5" method="post">
              <div className="mb-3">
                <label htmlFor="">Email Address</label>
                <input type="text" className="form-control" name="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>
              <button
                className="btn btn-lg btn-warning "
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Signing In" : "Log In"}
              </button>
            </Form>

            {message && (
              <div className="alert alert-danger alert-dismissible">
                {message}
              </div>
            )}

            {error && (
              <div className="alert alert-danger alert-dismissible">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
