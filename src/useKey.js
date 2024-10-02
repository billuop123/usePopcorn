export useKey function(key){

    useEffect(
        function () {
          setIsLoading(true);
          async function getMovieDetails() {
            const res = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
            );
            const data = await res.json();
            setMovie(data);
            setIsLoading(false);
          }
          getMovieDetails();
        },
        [selectedId]
      );
};
