import * as React from 'react';
import { Shape } from 'react-konva';
//
import { AREA_FILL, AREA_STROKE } from './constants';

export const PlanArea = (props) => {
  const [fill, setFill] = React.useState('transparent');
  const [stroke, setStroke] = React.useState('transparent');

  const handleMouseEnter = () => {
    setFill(AREA_FILL);
    setStroke(AREA_STROKE);
  };

  const handleMouseLeave = () => {
    setFill('transparent');
    setStroke('transparent');
  };

  return (
    <Shape
      {...props}
      fill={fill}
      stroke={stroke}
      strokeWidth={4}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
