import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiabetesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.73 2.29026C14.9213 2.12644 15.1674 2.04083 15.4191 2.05055C15.6707 2.06027 15.9095 2.1646 16.0876 2.3427C16.2657 2.52079 16.37 2.75953 16.3797 3.01121C16.3894 3.26288 16.3038 3.50896 16.14 3.70026L13 6.79026L13.76 7.74026L15.7 12.7403C15.7988 13.0039 15.8193 13.2905 15.759 13.5655C15.6986 13.8405 15.5601 14.0922 15.36 14.2903L12.27 17.3803C11.9827 17.6495 11.6037 17.7994 11.21 17.7994C10.8163 17.7994 10.4373 17.6495 10.15 17.3803L5.55 12.7803C5.41923 12.6492 5.31636 12.4931 5.24761 12.3212C5.17886 12.1493 5.14566 11.9653 5.15 11.7803L4.65 5.34026H5.72C5.859 5.33536 5.9975 5.35951 6.12664 5.41116C6.25578 5.46282 6.37272 5.54085 6.47 5.64026L6.61 5.81026L7.66 9.29026L14.73 2.29026ZM7.66 22.0003L2 16.3603L4.12 14.2403L9.78 19.9003L7.66 22.0003ZM19.5 4.50026C19.5 4.50026 17 7.26026 17 9.00026C17 9.6633 17.2634 10.2992 17.7322 10.768C18.2011 11.2369 18.837 11.5003 19.5 11.5003C20.163 11.5003 20.7989 11.2369 21.2678 10.768C21.7366 10.2992 22 9.6633 22 9.00026C22 7.26026 19.5 4.50026 19.5 4.50026Z" />
    </Svg>
  );
};
