import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth([]);

  return (
    <div className="service-container">
      {services?.map((element, index) => {
        return (
          <div key={index}>
            <div className="service-element">
              <p>{element.description}</p>
              <p>{element.service}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
