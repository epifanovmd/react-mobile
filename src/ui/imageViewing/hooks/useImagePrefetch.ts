import { useEffect } from "react";
import { Image, ImageURISource } from "react-native";

const useImagePrefetch = (images: ImageURISource[]) => {
  useEffect(() => {
    images.forEach(image => {
      if (image.uri) {
        Image.prefetch(image.uri);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useImagePrefetch;
