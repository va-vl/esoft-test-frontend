import * as React from 'react';
import { Stage, Layer } from 'react-konva';
//
import { PlanArea } from './Area';
import { PlanImage } from './Image';
import {
  DEFAULT_CANVAS_HEIGHT,
  DEFAULT_CANVAS_WIDTH,
  DEFAULT_SHAPE_COORDINATES,
} from './constants';
import styles from './Drawing.module.scss';

const getSceneFunc = (pointArray) => (context, shape) => {
  context.beginPath();
  context.moveTo(...pointArray[0]);
  for (let i = 1, l = pointArray.length; i < l; i += 1) {
    context.lineTo(...pointArray[i]);
  }
  context.closePath();
  context.fillStrokeShape(shape);
};

export const PlanDrawing = ({ onClick }) => {
  const containerRef = React.useRef(null);
  const [imageState, setImageState] = React.useState({
    width: DEFAULT_CANVAS_WIDTH,
    height: DEFAULT_CANVAS_HEIGHT,
    scaleX: 1,
    scaleY: 1,
  });

  const handleResize = () => {
    if (!containerRef.current) {
      return;
    }
    const { offsetWidth } = containerRef.current;
    const scale = offsetWidth / DEFAULT_CANVAS_WIDTH;
    setImageState({
      width: DEFAULT_CANVAS_WIDTH * scale,
      height: DEFAULT_CANVAS_HEIGHT * scale,
      scaleX: scale,
      scaleY: scale,
    });
  };

  React.useEffect(() => {
    handleResize();
  }, []);

  React.useEffect(() => {
    const runResize = () => {
      handleResize();
    };
    window.addEventListener('resize', runResize);
    return () => {
      window.removeEventListener('resize', runResize);
    };
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <Stage {...imageState}>
        <Layer>
          <PlanImage x={0} y={0} />
        </Layer>
        <Layer>
          {DEFAULT_SHAPE_COORDINATES.map((coordinates, index) => (
            <PlanArea
              key={index}
              sceneFunc={getSceneFunc(coordinates)}
              onClick={() => {
                onClick(index + 1);
              }}
              onTap={() => {
                onClick(index + 1);
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
