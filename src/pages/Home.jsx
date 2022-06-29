import { useState, useEffect } from "react";
import ClientsTable from "../components/ClientsTable";

const Home = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      try {
        const URL = "http://localhost:4000/clients";
        let response = await fetch(URL);
        let result = await response.json();
        setClients(result);
      } catch (error) {
        console.log(error);
      }
    };
    getClients();
  }, []);

  const handleDelete = async id => {
    if(confirm('¿Desea eleminar este cliente?')){
      try {
        const URL = `http://localhost:4000/clients/${id}`;
        let response = await fetch(URL, {
          method: "DELETE"
        });
        await response.json();
        setClients(clients.filter(client => client.id !== id))
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      <ClientsTable clients={clients} handleDelete={handleDelete} />
    </>
  );
};

export default Home;
