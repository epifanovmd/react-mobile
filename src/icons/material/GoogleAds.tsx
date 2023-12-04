import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleAdsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.25 1.46985C11.55 1.41985 10.82 1.57985 10.17 1.95985C8.41 2.96985 7.81 5.20985 8.82 6.95985L16.16 19.6598C17.17 21.4198 19.41 21.9998 21.17 20.9998C22.92 19.9998 23.5 17.7498 22.5 15.9998L15.18 3.29985C14.54 2.19985 13.43 1.55985 12.25 1.46985ZM6.82 6.75985L1.5 15.9998C1.17583 16.5555 1.0034 17.1866 1 17.8298C1 18.3118 1.09493 18.789 1.27936 19.2343C1.4638 19.6796 1.73413 20.0841 2.07492 20.4249C2.41571 20.7657 2.82029 21.0361 3.26555 21.2205C3.71082 21.4049 4.18805 21.4998 4.67 21.4998C5.3133 21.4979 5.94478 21.3269 6.50115 21.0039C7.05752 20.681 7.51923 20.2175 7.84 19.6598V19.6698L11 14.1898C9.65 11.8898 8.27 9.59985 7.03 7.22985C6.95 7.07985 6.88 6.91985 6.83 6.75985H6.82ZM6.82 6.75985L16.4 4.99985L6.82 6.75985Z" />
    </Svg>
  );
};
