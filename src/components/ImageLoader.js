import React, { useEffect, useState } from 'react'

const ImageLoader = ({url, alt, classname}) => {
  const [finalURL, setFinalURL] = useState('https://i.postimg.cc/yWqdSKFj/hero.png')

  useEffect(() => {
    checkImageUrl(url)
  }, [url])

  function checkImageUrl(imageUrl) {
    // Create an image object from the given URL
    var image = new Image();
    image.src = imageUrl;
  
    // Set the onError event to handle invalid URLs
    image.onerror = function() {
      // The URL is invalid, so return the default image URL
      setFinalURL('https://i.postimg.cc/yWqdSKFj/hero.png');
    }
  
    // The URL is valid, so return the original URL
    setFinalURL(imageUrl);
  }

  return (
    <img src={finalURL} alt={alt} className={classname}/>
  )
}

export default ImageLoader