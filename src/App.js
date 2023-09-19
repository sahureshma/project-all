import React from 'react';
import Slider from './component/Slider/Slider'

const images = [
 
  { src: 'https://images.pexels.com/photos/7210262/pexels-photo-7210262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ,alt:'dog 1'},
  { src: 'https://images.pexels.com/photos/5255255/pexels-photo-5255255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'dog 2' },
  { src: 'https://images.pexels.com/photos/5255598/pexels-photo-5255598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'dog 3'},
  { src: 'https://images.pexels.com/photos/5255240/pexels-photo-5255240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'dog 4' },
  { src: 'https://images.pexels.com/photos/5749081/pexels-photo-5749081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'dog 5'},
  { src: 'https://images.pexels.com/photos/5255258/pexels-photo-5255258.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'dog 6'},
  
];


function App() {
  return (
    <div className="App">
      <Slider images={images} parallaxIntensity={10} transitionSpeed={0.5}  />
    </div>
  );
}

export default App
