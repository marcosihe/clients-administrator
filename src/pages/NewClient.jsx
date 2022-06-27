import Form from "../components/Form";

const NewClient = () => {
  return (
    <>
      <div className="font-black text-4xl text-blue-900">Nuevo Cliente</div>
      <p className="mt-3">
        Completa los siguientes campos para registrar unn nuevo cliente
      </p>
      <Form />
    </>
  );
};

export default NewClient;
