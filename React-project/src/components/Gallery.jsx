import React from 'react';  


function Gallery() {  
    const images = [  

    ];  


    return (  
        <section className="gallery">  
            {images.map((src, index) => (  
                <img key={index} src={src} alt={`Imagen ${index + 1}`}/>  
            ))}  
        </section>  
    );  
}  


export default Gallery;  