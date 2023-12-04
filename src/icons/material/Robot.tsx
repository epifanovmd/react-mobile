import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RobotIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.74 13.6 5.39 13 5.73V7H14C15.8565 7 17.637 7.7375 18.9497 9.05025C20.2625 10.363 21 12.1435 21 14H22C22.2652 14 22.5196 14.1054 22.7071 14.2929C22.8946 14.4804 23 14.7348 23 15V18C23 18.2652 22.8946 18.5196 22.7071 18.7071C22.5196 18.8946 22.2652 19 22 19H21V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V19H2C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V15C1 14.7348 1.10536 14.4804 1.29289 14.2929C1.48043 14.1054 1.73478 14 2 14H3C3 12.1435 3.7375 10.363 5.05025 9.05025C6.36301 7.7375 8.14348 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2ZM7.5 13C6.83696 13 6.20107 13.2634 5.73223 13.7322C5.26339 14.2011 5 14.837 5 15.5C5 16.163 5.26339 16.7989 5.73223 17.2678C6.20107 17.7366 6.83696 18 7.5 18C8.16304 18 8.79893 17.7366 9.26777 17.2678C9.73661 16.7989 10 16.163 10 15.5C10 14.837 9.73661 14.2011 9.26777 13.7322C8.79893 13.2634 8.16304 13 7.5 13ZM16.5 13C15.837 13 15.2011 13.2634 14.7322 13.7322C14.2634 14.2011 14 14.837 14 15.5C14 16.163 14.2634 16.7989 14.7322 17.2678C15.2011 17.7366 15.837 18 16.5 18C17.163 18 17.7989 17.7366 18.2678 17.2678C18.7366 16.7989 19 16.163 19 15.5C19 14.837 18.7366 14.2011 18.2678 13.7322C17.7989 13.2634 17.163 13 16.5 13Z" />
    </Svg>
  );
};
