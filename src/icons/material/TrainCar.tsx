import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrainCarIcon: FC<FlexSvgProps> = ({
  height = 24,
  width = 24,
  scale,
  opacity,
  translateY,
  translateX,
  color = '#ffffff',
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  ...rest
}) => {
  const { style, ownProps } = useFlexProps(rest);

  return (
    <Svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      scale={scale}
      opacity={opacity}
      translateY={translateY}
      translateX={translateX}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      style={style}
      {...ownProps}
      fill={ownProps?.fill || color || '#ffffff'}
    >
      <Path d="M12 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V15C2 15.7956 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18L4 19V20H5L7 17.97L9 18V13H4V6H13V8H15V7C15 6.20435 14.6839 5.44129 14.1213 4.87868C13.5587 4.31607 12.7956 4 12 4ZM5 14C5.26522 14 5.51957 14.1054 5.70711 14.2929C5.89464 14.4804 6 14.7348 6 15C6 15.2652 5.89464 15.5196 5.70711 15.7071C5.51957 15.8946 5.26522 16 5 16C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15C4 14.7348 4.10536 14.4804 4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14ZM20.57 9.66C20.43 9.26 20.05 9 19.6 9H12.41C11.95 9 11.58 9.26 11.43 9.66L10 13.77V19.28C10 19.66 10.32 20 10.7 20H11.32C11.7 20 12 19.62 12 19.24V18H20V19.24C20 19.62 20.31 20 20.69 20H21.3C21.68 20 22 19.66 22 19.28V17.91V13.77L20.57 9.66ZM12.41 10H19.6L20.63 13H11.38L12.41 10ZM12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15C11 14.7348 11.1054 14.4804 11.2929 14.2929C11.4804 14.1054 11.7348 14 12 14C12.2652 14 12.5196 14.1054 12.7071 14.2929C12.8946 14.4804 13 14.7348 13 15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16ZM20 16C19.7348 16 19.4804 15.8946 19.2929 15.7071C19.1054 15.5196 19 15.2652 19 15C19 14.7348 19.1054 14.4804 19.2929 14.2929C19.4804 14.1054 19.7348 14 20 14C20.2652 14 20.5196 14.1054 20.7071 14.2929C20.8946 14.4804 21 14.7348 21 15C21 15.2652 20.8946 15.5196 20.7071 15.7071C20.5196 15.8946 20.2652 16 20 16Z" />
    </Svg>
  );
};
