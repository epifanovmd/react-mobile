import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandballIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.83 10.43C17.2172 11.5261 18.133 13.1108 18.39 14.86C18.6722 16.4635 18.3555 18.1148 17.5 19.5L15.78 18.5C16.2154 17.7389 16.443 16.8768 16.44 16C16.4185 14.9434 16.0767 13.9182 15.46 13.06L9.18 23.93L7.44 22.95L10.44 17.75L8.71 16.76L7.21 19.34L5.5 18.36L10.63 9.45C9.60798 8.35061 8.96642 6.95181 8.8 5.46C8.60779 3.94829 8.92069 2.41544 9.69 1.1L11.43 2.13C11.0931 2.69065 10.8733 3.31378 10.7839 3.96175C10.6945 4.60971 10.7374 5.26907 10.91 5.9C11.0633 6.53651 11.3468 7.13436 11.7427 7.65585C12.1386 8.17735 12.6382 8.61118 13.21 8.93L15.83 10.43ZM16 5C15.6044 5 15.2178 5.1173 14.8889 5.33706C14.56 5.55682 14.3036 5.86918 14.1522 6.23463C14.0009 6.60009 13.9613 7.00222 14.0384 7.39018C14.1156 7.77814 14.3061 8.13451 14.5858 8.41421C14.8655 8.69392 15.2219 8.8844 15.6098 8.96157C15.9978 9.03874 16.3999 8.99913 16.7654 8.84776C17.1308 8.69638 17.4432 8.44004 17.6629 8.11114C17.8827 7.78224 18 7.39556 18 7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5ZM13.5 1C13.2033 1 12.9133 1.08797 12.6666 1.2528C12.42 1.41762 12.2277 1.65189 12.1142 1.92597C12.0006 2.20006 11.9709 2.50166 12.0288 2.79264C12.0867 3.08361 12.2296 3.35088 12.4393 3.56066C12.6491 3.77044 12.9164 3.9133 13.2074 3.97118C13.4983 4.02906 13.7999 3.99935 14.074 3.88582C14.3481 3.77229 14.5824 3.58003 14.7472 3.33336C14.912 3.08668 15 2.79667 15 2.5C15 2.10218 14.842 1.72064 14.5607 1.43934C14.2794 1.15804 13.8978 1 13.5 1Z" />
    </Svg>
  );
};
