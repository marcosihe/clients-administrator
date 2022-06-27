import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-normal text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link
            to="/clients"
            className={`${
              currentUrl === "/clients" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:to-blue-300`}
          >
            Clientes
          </Link>
          <Link
            to="/clients/new"
            className={`${
              currentUrl === "/clients/new" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:to-blue-300`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;