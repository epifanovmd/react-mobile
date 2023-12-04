import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AllergyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.7499 5.33C19.4184 5.33 19.1005 5.4617 18.866 5.69612C18.6316 5.93054 18.4999 6.24848 18.4999 6.58V11.17H17.6699V4.08C17.6699 3.74848 17.5382 3.43054 17.3038 3.19612C17.0694 2.9617 16.7514 2.83 16.4199 2.83C16.0884 2.83 15.7705 2.9617 15.536 3.19612C15.3016 3.43054 15.1699 3.74848 15.1699 4.08V11.17H14.3299V3.25C14.3299 2.91848 14.1982 2.60054 13.9638 2.36612C13.7294 2.1317 13.4114 2 13.0799 2C12.7484 2 12.4305 2.1317 12.196 2.36612C11.9616 2.60054 11.8299 2.91848 11.8299 3.25V11.17H10.9999V5.33C10.9999 4.99848 10.8682 4.68054 10.6338 4.44612C10.3994 4.2117 10.0814 4.08 9.74992 4.08C9.4184 4.08 9.10046 4.2117 8.86604 4.44612C8.63162 4.68054 8.49992 4.99848 8.49992 5.33V15.26L4.90992 13.26C4.75849 13.1701 4.58601 13.1218 4.40992 13.12C4.16685 13.1203 3.93223 13.2092 3.74992 13.37L2.66992 14.37L9.20992 21C9.51754 21.3173 9.88595 21.5694 10.2931 21.7412C10.7003 21.913 11.138 22.001 11.5799 22H17.6699C18.5531 22 19.4001 21.6492 20.0246 21.0247C20.6491 20.4002 20.9999 19.5532 20.9999 18.67V6.58C20.9999 6.24848 20.8682 5.93054 20.6338 5.69612C20.3994 5.4617 20.0814 5.33 19.7499 5.33ZM10.9999 15C10.8021 15 10.6088 14.9414 10.4444 14.8315C10.2799 14.7216 10.1517 14.5654 10.076 14.3827C10.0004 14.2 9.98055 13.9989 10.0191 13.8049C10.0577 13.6109 10.153 13.4327 10.2928 13.2929C10.4327 13.153 10.6109 13.0578 10.8048 13.0192C10.9988 12.9806 11.1999 13.0004 11.3826 13.0761C11.5653 13.1518 11.7215 13.28 11.8314 13.4444C11.9413 13.6089 11.9999 13.8022 11.9999 14C11.9999 14.2652 11.8946 14.5196 11.707 14.7071C11.5195 14.8946 11.2651 15 10.9999 15ZM12.9999 18C12.8021 18 12.6088 17.9414 12.4444 17.8315C12.2799 17.7216 12.1517 17.5654 12.076 17.3827C12.0004 17.2 11.9806 16.9989 12.0191 16.8049C12.0577 16.6109 12.153 16.4327 12.2928 16.2929C12.4327 16.153 12.6109 16.0578 12.8048 16.0192C12.9988 15.9806 13.1999 16.0004 13.3826 16.0761C13.5653 16.1518 13.7215 16.28 13.8314 16.4444C13.9413 16.6089 13.9999 16.8022 13.9999 17C13.9999 17.2652 13.8946 17.5196 13.707 17.7071C13.5195 17.8946 13.2651 18 12.9999 18ZM17.9999 16C17.8021 16 17.6088 15.9414 17.4444 15.8315C17.2799 15.7216 17.1517 15.5654 17.076 15.3827C17.0004 15.2 16.9806 14.9989 17.0191 14.8049C17.0577 14.6109 17.153 14.4327 17.2928 14.2929C17.4327 14.153 17.6108 14.0578 17.8048 14.0192C17.9988 13.9806 18.1999 14.0004 18.3826 14.0761C18.5653 14.1518 18.7215 14.28 18.8314 14.4444C18.9413 14.6089 18.9999 14.8022 18.9999 15C18.9999 15.2652 18.8946 15.5196 18.707 15.7071C18.5195 15.8946 18.2651 16 17.9999 16ZM16.9999 19C16.8021 19 16.6088 18.9414 16.4444 18.8315C16.2799 18.7216 16.1517 18.5654 16.076 18.3827C16.0004 18.2 15.9806 17.9989 16.0191 17.8049C16.0577 17.6109 16.153 17.4327 16.2928 17.2929C16.4327 17.153 16.6108 17.0578 16.8048 17.0192C16.9988 16.9806 17.1999 17.0004 17.3826 17.0761C17.5653 17.1518 17.7215 17.28 17.8314 17.4444C17.9413 17.6089 17.9999 17.8022 17.9999 18C17.9999 18.2652 17.8946 18.5196 17.707 18.7071C17.5195 18.8946 17.2651 19 16.9999 19ZM14.9999 15C14.8021 15 14.6088 14.9414 14.4444 14.8315C14.2799 14.7216 14.1517 14.5654 14.076 14.3827C14.0004 14.2 13.9806 13.9989 14.0191 13.8049C14.0577 13.6109 14.153 13.4327 14.2928 13.2929C14.4327 13.153 14.6109 13.0578 14.8048 13.0192C14.9988 12.9806 15.1999 13.0004 15.3826 13.0761C15.5653 13.1518 15.7215 13.28 15.8314 13.4444C15.9413 13.6089 15.9999 13.8022 15.9999 14C15.9999 14.2652 15.8946 14.5196 15.707 14.7071C15.5195 14.8946 15.2651 15 14.9999 15Z" />
    </Svg>
  );
};
