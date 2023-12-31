import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CigarOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.73L18.1101 20H18.0001V19.89L17.0001 18.89V20H12.0001V18.73C12.3001 18.56 12.5501 18.31 12.7301 18C13.2801 17.05 12.9601 15.83 12.0001 15.27V14H12.1101L1.11011 2.99998L2.39011 1.72998L22.1101 21.46L20.8401 22.73ZM14.5001 9.69998H16.0001C17.0701 9.65998 17.9601 10.5 18.0001 11.56C18.0001 11.61 18.0001 11.65 18.0001 11.7V13H19.5001V11.36C19.4201 9.52998 17.8801 8.11998 16.0501 8.19998H16.0001H14.5001C13.4501 8.11998 12.6501 7.24998 12.6501 6.19998C12.6701 5.21998 13.5001 4.42998 14.4601 4.44998H14.5001V2.99998C12.6501 2.99998 11.1501 4.49998 11.1501 6.34998C11.1501 8.19998 12.6501 9.69998 14.5001 9.69998ZM20.5001 10.7V10.77V13H22.0001V10.76C22.0001 8.61998 20.7801 6.65998 18.8501 5.72998H18.8201C19.5801 4.99998 19.9001 3.99998 19.8001 2.99998H18.3201C18.3401 3.10998 18.3501 3.22998 18.3501 3.34998C18.3501 4.36998 17.5001 5.19998 16.5001 5.19998V6.69998C18.7101 6.69998 20.5001 8.49998 20.5001 10.7ZM9.27011 16C9.45011 15.7 9.70011 15.45 10.0001 15.27V14H5.00011C4.21011 14 3.44011 14.32 2.88011 14.88C1.71011 16.05 1.71011 17.95 2.88011 19.12C3.45011 19.68 4.21011 20 5.00011 20H10.0001V18.73C9.05011 18.18 8.72011 16.95 9.27011 16ZM18.0001 14.8L19.5001 16.3V14H18.0001V14.8ZM20.5001 17.3L22.0001 18.8V14H20.5001V17.3ZM11.0001 16C10.4501 16 10.0001 16.45 10.0001 17C10.0001 17.55 10.4501 18 11.0001 18C11.5501 18 12.0001 17.55 12.0001 17C12.0001 16.45 11.5501 16 11.0001 16Z" />
    </Svg>
  );
};
