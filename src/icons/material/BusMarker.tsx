import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BusMarkerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C7.58 2 4 2.5 4 6V16C4.00225 16.4194 4.09241 16.8336 4.26465 17.216C4.4369 17.5984 4.6874 17.9404 5 18.22V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H7C7.26522 21 7.51957 20.8946 7.70711 20.7071C7.89464 20.5196 8 20.2652 8 20V19H14C13.4021 17.9257 13.06 16.728 13 15.5C13.0089 14.6144 13.2296 13.7439 13.6436 12.961C14.0577 12.1782 14.653 11.5058 15.38 11H6V6H18V10C18.1665 9.98975 18.3335 9.98975 18.5 10C19.0079 10.0016 19.513 10.0757 20 10.22V6C20 2.5 16.42 2 12 2ZM7.5 14C7.79667 14 8.08668 14.088 8.33335 14.2528C8.58003 14.4176 8.77229 14.6519 8.88582 14.926C8.99935 15.2001 9.02906 15.5017 8.97118 15.7926C8.9133 16.0836 8.77044 16.3509 8.56066 16.5607C8.35088 16.7704 8.08361 16.9133 7.79264 16.9712C7.50166 17.0291 7.20006 16.9993 6.92597 16.8858C6.65189 16.7723 6.41762 16.58 6.2528 16.3334C6.08797 16.0867 6 15.7967 6 15.5C6 15.1022 6.15804 14.7206 6.43934 14.4393C6.72064 14.158 7.10218 14 7.5 14ZM18.5 12C17.575 12.0104 16.6908 12.3825 16.0366 13.0366C15.3825 13.6908 15.0104 14.575 15 15.5C15 18.1 18.5 22 18.5 22C18.5 22 22 18.1 22 15.5C21.9896 14.575 21.6175 13.6908 20.9634 13.0366C20.3092 12.3825 19.425 12.0104 18.5 12ZM18.5 16.8C18.1817 16.8 17.8765 16.6736 17.6515 16.4485C17.4264 16.2235 17.3 15.9183 17.3 15.6C17.3 15.2817 17.4264 14.9765 17.6515 14.7515C17.8765 14.5264 18.1817 14.4 18.5 14.4C18.8113 14.4211 19.1045 14.5542 19.3251 14.7749C19.5458 14.9955 19.6789 15.2887 19.7 15.6C19.7071 15.7595 19.6809 15.9187 19.6231 16.0675C19.5653 16.2163 19.4772 16.3514 19.3643 16.4643C19.2514 16.5772 19.1163 16.6653 18.9675 16.7231C18.8187 16.7809 18.6595 16.8071 18.5 16.8Z" />
    </Svg>
  );
};
