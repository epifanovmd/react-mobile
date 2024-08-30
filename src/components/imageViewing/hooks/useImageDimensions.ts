import { useEffect, useState } from "react";
import { Image, ImageURISource } from "react-native";

import { Dimensions } from "../types";
import { createCache } from "../utils";

const CACHE_SIZE = 50;
const imageDimensionsCache = createCache(CACHE_SIZE);

const useImageDimensions = (image: ImageURISource): Dimensions | null => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);

  const getImageDimensions = (_image: ImageURISource): Promise<Dimensions> =>
    new Promise(resolve => {
      if (_image.uri) {
        const cacheKey = _image.uri as string;

        const imageDimensions = imageDimensionsCache.get(cacheKey);

        if (imageDimensions) {
          resolve(imageDimensions);
        } else {
          Image.getSizeWithHeaders(
            _image.uri,
            _image.headers || {},
            (width: number, height: number) => {
              imageDimensionsCache.set(cacheKey, { width, height });
              resolve({ width, height });
            },
            () => {
              resolve({ width: 0, height: 0 });
            },
          );
        }
      } else {
        resolve({ width: 0, height: 0 });
      }
    });

  let isImageUnmounted = false;

  useEffect(() => {
    getImageDimensions(image).then(_dimensions => {
      if (!isImageUnmounted) {
        setDimensions(_dimensions);
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      isImageUnmounted = true;
    };
  }, [image]);

  return dimensions;
};

export default useImageDimensions;
