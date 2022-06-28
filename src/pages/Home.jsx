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
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      <ClientsTable clients={clients} />
    </>
  );
};

export default Home;
