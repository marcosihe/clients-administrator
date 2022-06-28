import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import MyForm from "../components/MyForm";

const EditClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
    const getClient = async () => {
      try {
        const URL = `http://localhost:4000/clients/${id}`;
        let response = await fetch(URL);
        let result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getClient();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        Utiliza el siguiente formulario para modificar los datos del cliente
      </p>
      {loading ? (
        <Spinner />
      ) : (
        <MyForm client={client} formType={"Editar Cliente"} />
      )}
    </>
  );
};

export default EditClient;
