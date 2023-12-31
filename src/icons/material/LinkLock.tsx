import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LinkLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 16V15.5C23 14.837 22.7366 14.2011 22.2678 13.7322C21.7989 13.2634 21.163 13 20.5 13C19.837 13 19.2011 13.2634 18.7322 13.7322C18.2634 14.2011 18 14.837 18 15.5V16C17.7348 16 17.4804 16.1054 17.2929 16.2929C17.1054 16.4804 17 16.7348 17 17V21C17 21.2652 17.1054 21.5196 17.2929 21.7071C17.4804 21.8946 17.7348 22 18 22H23C23.2652 22 23.5196 21.8946 23.7071 21.7071C23.8946 21.5196 24 21.2652 24 21V17C24 16.7348 23.8946 16.4804 23.7071 16.2929C23.5196 16.1054 23.2652 16 23 16ZM22 16H19V15.5C19 15.1022 19.158 14.7206 19.4393 14.4393C19.7206 14.158 20.1022 14 20.5 14C20.8978 14 21.2794 14.158 21.5607 14.4393C21.842 14.7206 22 15.1022 22 15.5V16ZM7 8.9H11V7H7C5.67392 7 4.40215 7.52678 3.46447 8.46447C2.52678 9.40215 2 10.6739 2 12C2 13.3261 2.52678 14.5979 3.46447 15.5355C4.40215 16.4732 5.67392 17 7 17H11V15.1H7C6.17783 15.1 5.38933 14.7734 4.80797 14.192C4.22661 13.6107 3.9 12.8222 3.9 12C3.9 11.1778 4.22661 10.3893 4.80797 9.80797C5.38933 9.22661 6.17783 8.9 7 8.9ZM8 11V13H16V11H8ZM13 15.1V17H15V15.1H13ZM17 7H13V8.9H17C17.6484 8.8973 18.2813 9.09865 18.8089 9.47554C19.3365 9.85243 19.7323 10.3858 19.94 11C20.1265 10.9898 20.3135 10.9898 20.5 11H21.9C21.6695 9.87064 21.0558 8.8556 20.1629 8.12669C19.27 7.39778 18.1527 6.99976 17 7Z" />
    </Svg>
  );
};
