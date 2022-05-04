import { Image } from 'react-konva';
import useImage from 'use-image';
//
import floorPlan from '@assets/floor-plan.png';

export const PlanImage = (props) => {
  const [image] = useImage(floorPlan);
  return <Image image={image} {...props} />;
};
