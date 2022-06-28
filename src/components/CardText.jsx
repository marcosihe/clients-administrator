const CardText = ({ param, value }) => {
  return (
    <div className="my-2 bg-gray-100 py-1">
      <p className="text-xl text-gray-600 my-1 mx-4">
        <span className="text-gray-800 uppercase font-bold">{param}: </span>
        {value}
      </p>
    </div>
  );
};

export default CardText;
