import Client from "./Client";

const ClientsTable = ({ clients, handleDelete }) => {
  return (
    <>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <Client key={client.id} client={client} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClientsTable;
