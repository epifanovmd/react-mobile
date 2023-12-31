import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableHeadersEyeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 6V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H9V11H21V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H3C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6ZM3 6H7V9H3V6ZM7 19H3V16H7V19ZM7 14H3V11H7V14ZM9 9V6H13V9H9ZM19 9H15V6H19V9ZM17 16C17.1978 16 17.3911 16.0586 17.5556 16.1685C17.72 16.2784 17.8482 16.4346 17.9239 16.6173C17.9996 16.8 18.0194 17.0011 17.9808 17.1951C17.9422 17.3891 17.847 17.5673 17.7071 17.7071C17.5673 17.847 17.3891 17.9422 17.1951 17.9808C17.0011 18.0194 16.8 17.9996 16.6173 17.9239C16.4346 17.8482 16.2784 17.72 16.1685 17.5556C16.0586 17.3911 16 17.1978 16 17C16 16.7348 16.1054 16.4804 16.2929 16.2929C16.4804 16.1054 16.7348 16 17 16ZM17 13C18.2847 12.9933 19.5422 13.3705 20.6112 14.0832C21.6802 14.7958 22.512 15.8115 23 17C22.5064 18.1846 21.6733 19.1965 20.6056 19.9083C19.5378 20.6202 18.2833 21 17 21C15.7167 21 14.4622 20.6202 13.3944 19.9083C12.3267 19.1965 11.4936 18.1846 11 17C11.488 15.8115 12.3198 14.7958 13.3888 14.0832C14.4578 13.3705 15.7153 12.9933 17 13ZM17 14.5C16.5055 14.5 16.0222 14.6466 15.6111 14.9213C15.2 15.196 14.8795 15.5865 14.6903 16.0433C14.5011 16.5001 14.4516 17.0028 14.548 17.4877C14.6445 17.9727 14.8826 18.4181 15.2322 18.7678C15.5819 19.1174 16.0273 19.3555 16.5123 19.452C16.9972 19.5484 17.4999 19.4989 17.9567 19.3097C18.4135 19.1205 18.804 18.8 19.0787 18.3889C19.3534 17.9778 19.5 17.4945 19.5 17C19.5 16.337 19.2366 15.7011 18.7678 15.2322C18.2989 14.7634 17.663 14.5 17 14.5Z" />
    </Svg>
  );
};
