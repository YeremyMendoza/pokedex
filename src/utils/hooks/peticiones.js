import { useState, useEffect } from "react";

export function useFetchImg(data){
    const [imgSrc, setImgSrc] = useState("");

      useEffect(() => {
          async function fetchImage() {
              try {
                  const response = await fetch(data.sprites.other.dream_world.front_default);
                  if (!response.ok) {
                      throw Error("Horror");
                  }
                  const myBlob = await response.blob();
                  setImgSrc(URL.createObjectURL(myBlob));
              } catch (error) {
                console.error("There has been a problem with your fetch operation:", error);
              }
          }
          data && fetchImage();
      },[data]);
    return [imgSrc];
}

export function useSimpleFetchData(objeto){
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(objeto.url)
        .then(resp => resp.json())
        .then(resp => {
            setData(resp);
        })
    },[objeto]);
    return [data];
}

export function useFetchData(path) {
  const [url, setUrl] = useState(path);
  const [results, setResults] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    let abortController = new AbortController();
    if (url.trim() === "") {
        // No realizar la solicitud si la URL está vacía
        return;
    }
    async function fetchData() {
      try {
        const response = await fetch(url,{signal: abortController.signal});
        const json = await response.json();

        setResults(json);
        setLoad(false);
      } catch (error) {
        if(error.name === "AbortError"){
            console.log("Solicitud cancelada por desmontaje");
        }else{
            console.error("Error fetching data:", error);
            setResults(null);
            setLoad(false);
        }
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return [load, results, setUrl, setLoad];
}
