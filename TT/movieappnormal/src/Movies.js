import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie } = useGlobalContext();

  return (
    <>
    <h1>Maulik</h1>
     { movie.map ((currentMovie) => {
      return (
        <div>
        </div>
      );
     })}  
    </>
  );
};

export default Movies;