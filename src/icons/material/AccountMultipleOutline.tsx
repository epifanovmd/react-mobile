import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountMultipleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.07 10.41C13.6774 9.56125 14.0041 8.54371 14.0041 7.49999C14.0041 6.45628 13.6774 5.43873 13.07 4.58999C13.6385 4.20195 14.3117 3.99616 15 3.99999C15.9283 3.99999 16.8185 4.36874 17.4749 5.02512C18.1313 5.6815 18.5 6.57173 18.5 7.49999C18.5 8.42825 18.1313 9.31849 17.4749 9.97486C16.8185 10.6312 15.9283 11 15 11C14.3117 11.0038 13.6385 10.798 13.07 10.41ZM5.5 7.49999C5.5 6.80776 5.70527 6.13107 6.08986 5.5555C6.47444 4.97992 7.02107 4.53132 7.66061 4.26641C8.30015 4.00151 9.00388 3.93219 9.68282 4.06724C10.3617 4.20229 10.9854 4.53563 11.4749 5.02512C11.9644 5.5146 12.2977 6.13824 12.4327 6.81718C12.5678 7.49611 12.4985 8.19984 12.2336 8.83938C11.9687 9.47892 11.5201 10.0256 10.9445 10.4101C10.3689 10.7947 9.69223 11 9 11C8.07174 11 7.1815 10.6312 6.52513 9.97486C5.86875 9.31849 5.5 8.42825 5.5 7.49999ZM7.5 7.49999C7.5 7.79666 7.58797 8.08667 7.7528 8.33335C7.91762 8.58002 8.15189 8.77228 8.42597 8.88581C8.70006 8.99934 9.00166 9.02905 9.29264 8.97117C9.58361 8.91329 9.85088 8.77043 10.0607 8.56065C10.2704 8.35087 10.4133 8.0836 10.4712 7.79263C10.5291 7.50166 10.4994 7.20006 10.3858 6.92597C10.2723 6.65188 10.08 6.41761 9.83335 6.25279C9.58668 6.08797 9.29667 5.99999 9 5.99999C8.60218 5.99999 8.22064 6.15803 7.93934 6.43933C7.65804 6.72064 7.5 7.10217 7.5 7.49999ZM16 17V19H2V17C2 17 2 13 9 13C16 13 16 17 16 17ZM14 17C13.86 16.22 12.67 15 9 15C5.33 15 4.07 16.31 4 17H14ZM15.95 13C16.5629 13.4767 17.064 14.0818 17.4182 14.7729C17.7723 15.4639 17.9709 16.2241 18 17V19H22V17C22 17 22 13.37 15.94 13H15.95Z" />
    </Svg>
  );
};
