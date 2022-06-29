import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardText from "../components/CardText";
import Spinner from "../components/Spinner";

const ViewClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
    const getClient = async () => {
      try {
        const URL = `https://my-json-server.typicode.com/marcosihe/clients-administrator/clients/${id}`;
        let response = await fetch(URL);
        let result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }
      setTimeout( () => {
        setLoading(false);
      }, 1000)
    };
    getClient();
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="md:w-3/4 mx-auto py-5 px-2 bg-white text-white shadow-md rounded-md">
          <h1 className="text-center font-black text-4xl text-blue-900 ">
            {id == client.id ? 'Cliente' : 'Cliente no encontrado'}
          </h1>
          {client.name && <CardText param={"Nombre"} value={client.name} />}
          {client.company && (
            <CardText param={"Empresa"} value={client.company} />
          )}
          {client.email && <CardText param={"E-mail"} value={client.email} />}
          {client.phone && <CardText param={"Celular"} value={client.phone} />}
          {client.notes && <CardText param={"Notas"} value={client.notes} />}
        </div>
      )}
    </>
  );
};

export default ViewClient;
