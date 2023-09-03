
import SliderHome from './slider';
import Products from './products';
import React from 'react';

export default function Home(): React.ReactElement {
  return (
    <div>
      <SliderHome />
      <Products />
    </div>
  )
}