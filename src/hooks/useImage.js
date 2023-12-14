import { useState, useEffect } from 'react'
import axios from 'axios'

export const useImage = (countryName) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey = '41223762-b5c29360eff2a9446660d1f1e';
        const responsePlace = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${countryName}&image_type=photo`);
        const responseFlag = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${countryName}+flag&image_type=photo`);

        if (responsePlace.data && responsePlace.data.hits && responsePlace.data.hits.length > 0 && responseFlag.data && responseFlag.data.hits && responseFlag.data.hits.length > 0) {
          setImages([responsePlace.data.hits[0], responseFlag.data.hits[0]]);
        }
      } catch (error) {
        console.error('Error fetching images from Pixabay:', error);
      }
    };

    fetchImages();
  }, [countryName]);

  return images;
};