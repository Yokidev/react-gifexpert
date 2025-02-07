
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  // Se ha pasado este codigo a useFetchGifs.js para poder reutilizarlo en otros componentes creando así un custom hook
  // const [images, setimages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setimages(newImages);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []);

  return (
    <>
      <h3>{category}</h3>

      {/* renderizado condicional para mostrar un mensaje de carga mientras se obtienen los datos de la API de Giphy  */}
      {
        isLoading && <p className="animate__animated animate__flash">Cargando...</p>
      }

      <div className="card-grid">
        {images.map((images) => (
          <GifItem
            key={images.id}
            {...images} // con esta linea se envian todas las propiedades de images
          />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

