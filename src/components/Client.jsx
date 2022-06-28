import { useNavigate } from 'react-router-dom'

const Client = ({client, handleEliminar}) => {
    const navigate = useNavigate()

    const { name, company, email, phone, notes, id} = client

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3">{name}</td>
            <td className="p-3">
                <p><span className="text-gray-800 uppercase font-bold">Email: </span> {email} </p>
                <p><span className="text-gray-800 uppercase font-bold">Tel: </span> {phone} </p>
            </td>
            <td className="p-3">{company}</td>
            <td className="p-3">

                <button 
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-400 block w-full text-white p-2 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clients/${id}`)}
                >Ver</button>

                <button 
                    type="button"
                    className="bg-blue-500 hover:bg-blue-400 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                    onClick={() => navigate(`/clients/edit/${id}`)}
                >Editar</button>

                <button 
                    type="button"
                    className="bg-red-500 hover:bg-red-400 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                    
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Client