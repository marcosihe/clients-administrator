import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardText from "../components/CardText";

const ViewClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});

  useEffect(() => {
    const getClient = async () => {
      try {
        const URL = `http://localhost:4000/clients/${id}`;
        let response = await fetch(URL);
        let result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }
    };
    getClient();
  }, []);
  return (
    <div className="md:w-3/4 mx-auto py-5 px-2 bg-white text-white shadow-md rounded-md">
      <h1 className="text-center font-black text-4xl text-blue-900 ">
        Cliente
      </h1>
      <CardText param={"Nombre"} value={client.name} />
      <CardText param={"Empresa"} value={client.company} />
      <CardText param={"E-mail"} value={client.email} />
      {client.phone && <CardText param={"Celular"} value={client.phone} />}
      {client.notes && <CardText param={"Notas"} value={client.notes} />}
    </div>
  );
};

export default ViewClient;
