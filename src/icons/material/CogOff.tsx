import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CogOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1201 21.4605L2.40012 1.73047L1.12012 3.00047L4.00012 5.87047L2.34012 8.73047C2.21012 8.95047 2.27012 9.22047 2.46012 9.37047L4.57012 11.0005C4.53012 11.3405 4.50012 11.6705 4.50012 12.0005C4.50012 12.3305 4.53012 12.6505 4.57012 12.9705L2.46012 14.6305C2.27012 14.7805 2.21012 15.0505 2.34012 15.2705L4.34012 18.7305C4.46012 18.9505 4.73012 19.0305 4.95012 18.9505L7.44012 17.9405C7.96012 18.3405 8.50012 18.6805 9.13012 18.9305L9.50012 21.5805C9.54012 21.8205 9.75012 22.0005 10.0001 22.0005H14.0001C14.2501 22.0005 14.4601 21.8205 14.5001 21.5805L14.8701 18.9305C15.3801 18.7205 15.8301 18.4505 16.2601 18.1405L20.8501 22.7305L22.1201 21.4605ZM12.0001 15.5005C10.0701 15.5005 8.50012 13.9305 8.50012 12.0005C8.50012 11.5005 8.62012 11.0805 8.79012 10.6705L13.3301 15.2105C12.9201 15.3905 12.5001 15.5005 12.0001 15.5005ZM11.7401 8.53047L8.56012 5.35047C8.75012 5.25047 8.93012 5.15047 9.13012 5.07047L9.50012 2.42047C9.54012 2.18047 9.75012 2.00047 10.0001 2.00047H14.0001C14.2501 2.00047 14.4601 2.18047 14.5001 2.42047L14.8701 5.07047C15.5001 5.32047 16.0401 5.66047 16.5601 6.05047L19.0501 5.05047C19.2701 4.96047 19.5401 5.05047 19.6601 5.27047L21.6601 8.73047C21.7801 8.95047 21.7301 9.22047 21.5401 9.37047L19.4301 11.0005C19.4701 11.3405 19.5001 11.6705 19.5001 12.0005C19.5001 12.3305 19.4701 12.6505 19.4301 12.9705L21.5401 14.6305C21.7301 14.7805 21.7801 15.0505 21.6601 15.2705L20.5001 17.2905L15.4701 12.2605C15.5001 12.1805 15.5001 12.0905 15.5001 12.0005C15.5001 10.0705 13.9301 8.50047 12.0001 8.50047C11.9101 8.50047 11.8301 8.50047 11.7401 8.53047Z" />
    </Svg>
  );
};
