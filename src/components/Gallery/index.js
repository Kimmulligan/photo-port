import React from 'react';
import Photolist from '../Photolist';
import { capitalizeFirstLetter } from '../../utils/helpers'

function Gallery({currentCategory}) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag>">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <Photolist />
    </section>
  );
}

export default Gallery;

// function  Gallery() {
//   const [currentCategory] = useState([
//     {
//       name:"commercial",
//       description:
//       "Photos of grocery stores, food trucks, and other commercial projects",
//     },
//     { name: "portraits", description: "Portraits of people in my life"},
//     {name:  "food", description: "Delicious delicacies"},
//     {
//       name: "landscape", 
//       description: "Fields, farmhouses, waterfalls, and the beauty of nature",
//     },
//   ]);
//   const [currentCategory, setCurrentCategory] = useState(categories[0]);
//   return (
//     <div>
   