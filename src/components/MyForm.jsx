import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";

const MyForm = () => {
  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "El nombre es muy corto")
      .max(40, "El nombre es muy largo")
      .required("El nombre es obligatorio"),
    company: Yup.string()
      .min(2, "El nombre es muy corto")
      .required("El nombre de la empresa es obligatorio"),
    email: Yup.string()
      .email("Debe ingrear un e-mail válido")
      .required("El e-mail es obligatorio"),
    phone: Yup.number()
      .positive("Número no válido")
      .integer("Número no válido")
      .typeError("El Número no es válido"),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          name: "",
          company: "",
          email: "",
          phone: "",
          notes: "",
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-800">
                  Nombre
                </label>
                <Field
                  id="name"
                  type="text"
                  className="mt-2 p-3 block w-full bg-gray-50"
                  placeholder="Nombre del cliente"
                  name="name"
                />
                {errors.name && touched.name ? (
                  <Alert>{errors.name}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="text-gray-800">
                  Empresa del cliente
                </label>
                <Field
                  id="company"
                  type="text"
                  className="mt-2 p-3 block w-full bg-gray-50"
                  placeholder="Empresa"
                  name="company"
                />
                {errors.company && touched.company ? (
                  <Alert>{errors.company}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-gray-800">
                  E-mail
                </label>
                <Field
                  id="email"
                  type="text"
                  className="mt-2 p-3 block w-full bg-gray-50"
                  placeholder="E-mail"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="text-gray-800">
                  Celular
                </label>
                <Field
                  id="phone"
                  type="text"
                  className="mt-2 p-3 block w-full bg-gray-50"
                  placeholder="Celular"
                  name="phone"
                />
                {errors.phone && touched.phone ? (
                  <Alert>{errors.phone}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="notes" className="text-gray-800">
                  Notas
                </label>
                <Field
                  as="textarea"
                  id="notes"
                  type="text"
                  className="mt-2 p-3 block w-full bg-gray-50 h-40"
                  placeholder="Notas del cliente"
                  name="notes"
                />
              </div>

              <input
                type="submit"
                value="Agregar Cliente"
                className="mt-5 p-3 w-full bg-blue-800 text-white uppercase font-bold hover:bg-blue-600 hover:cursor-pointer text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default MyForm;
