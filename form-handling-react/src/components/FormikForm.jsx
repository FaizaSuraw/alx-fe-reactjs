import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik form submitted:", values);
        alert("Registration successful!");
        resetForm();
      }}
    >
      <Form className="p-4 max-w-md mx-auto border rounded">
        <h2 className="text-xl mb-4">Register with Formik</h2>

        <div className="mb-2">
          <label className="block">Username:</label>
          <Field name="username" type="text" className="border p-2 w-full" />
          <ErrorMessage name="username" component="div" className="text-red-500" />
        </div>

        <div className="mb-2">
          <label className="block">Email:</label>
          <Field name="email" type="email" className="border p-2 w-full" />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div className="mb-2">
          <label className="block">Password:</label>
          <Field name="password" type="password" className="border p-2 w-full" />
          <ErrorMessage name="password" component="div" className="text-red-500" />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}
