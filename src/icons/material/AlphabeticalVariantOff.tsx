import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlphabeticalVariantOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.2 8.99998L10.2 6.99998H13C13.5304 6.99998 14.0391 7.21069 14.4142 7.58577C14.7893 7.96084 15 8.46955 15 8.99998V10.5C14.9944 10.8459 14.8669 11.1788 14.64 11.44L13 9.79998V8.99998H12.2ZM23 9.99998V8.99998C23 8.46955 22.7893 7.96084 22.4142 7.58577C22.0391 7.21069 21.5304 6.99998 21 6.99998H19C18.4696 6.99998 17.9609 7.21069 17.5858 7.58577C17.2107 7.96084 17 8.46955 17 8.99998V13.8L20.2 17H21C21.5304 17 22.0391 16.7893 22.4142 16.4142C22.7893 16.0391 23 15.5304 23 15V14H21V15H19V8.99998H21V9.99998H23ZM15 14.35L22.11 21.46L20.84 22.73L14.46 16.35C14.2744 16.5529 14.049 16.7153 13.7977 16.8271C13.5465 16.939 13.275 16.9978 13 17H9V10.89L7 8.88998V17H5V13H3V17H1V8.99998C1 8.46955 1.21071 7.96084 1.58579 7.58577C1.96086 7.21069 2.46957 6.99998 3 6.99998H5.12L1.12 2.99998L2.39 1.72998L9 8.33998L11 10.34L11.66 11L15 14.34V14.35ZM5 8.99998H3V11H5V8.99998ZM13 14.89L11.11 13H11V15H13V14.89Z" />
    </Svg>
  );
};
