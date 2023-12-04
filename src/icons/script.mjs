import fs from 'fs';
import path from 'path';
import {promisify} from 'util';

const fsReaddir = promisify(fs.readdir);
const fsWrite = promisify(fs.writeFile);
const fsReadFile = promisify(fs.readFile);
const fsRename = promisify(fs.rename);

function camelize(str) {
  return str.replaceAll('-', ' ').replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return match.toUpperCase();
  });
}

const content  = `import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const replaceName: FC<FlexSvgProps> = ({height = 24, width = 24, scale, opacity, translateY, translateX, color = '#ffffff', fontSize, fontFamily, fontStyle, fontWeight, letterSpacing, ...rest}) => {
  const { style, ownProps } = useFlexProps(rest);

  return (
    <Svg viewBox="0 0 24 24" height={height} width={width} scale={scale} opacity={opacity} translateY={translateY} translateX={translateX} color={color} fontSize={fontSize} fontFamily={fontFamily} fontStyle={fontStyle} fontWeight={fontWeight} letterSpacing={letterSpacing} style={style} {...ownProps} fill={ownProps?.fill || color || '#ffffff'}>
      replacedRow
    </Svg>
  );
};`

const workDir = path.resolve(path.dirname(''));

const dirs = await fsReaddir(workDir);

const includeDirs = [
  'material',
];
const filterDirs = dirs.filter(item => includeDirs.some(name => name === item));

await Promise.all(filterDirs.map(async (dir) => {
  const currentDir = path.resolve(workDir, dir);
  const files = await fsReaddir(currentDir);

  // формируем React Native компоненты из иконок svg
  await Promise.all(
    files.filter(item => item.includes('.svg')).map(async (fileName) => {
      const fileNamePath = path.resolve(currentDir, fileName);
      const newFileName = camelize(fileName.replaceAll('.svg', '')) + '.tsx';
      const newFileNamePath = path.resolve(currentDir, newFileName);

      await fsRename(fileNamePath, newFileNamePath);

      const data = await fsReadFile(newFileNamePath);

      const parseRow = data.toString()
        .replace(/(<svg.*>)|(<\/svg>)/gm, '')
        .replace(/(\n+)/gm, '\n')
        .replace(/<path/gm, '<Path');
      const finalValue = content.replace('replacedRow', parseRow).replace('replaceName', newFileName.replace('.tsx', 'Icon'));

      await fsWrite(newFileNamePath, finalValue);

      return Promise.resolve();
    }),
  );

  const newFiles = await fsReaddir(currentDir);

  // генерируем index.ts с экспортами всех иконок
  const names =   newFiles.filter(item => item !== 'index.ts').map((fileName) => {
    const name = fileName.replace('.tsx', 'Icon');
    const file = fileName.replace('.tsx', '');

    return `export { ${name} } from './${file}';\n`;
  });

  await fsWrite(`${currentDir}/index.ts`, names.toString().replace(/,/gm, ''));


  // внусим изменения во все фалы иконок если нужно
  await Promise.all(
    newFiles.filter(item => item !== 'index.ts').map(async (fileName) => {

      const data = await fsReadFile(path.resolve(currentDir, fileName))
      await fsWrite(path.resolve(currentDir, fileName), data.toString()
        .replace('fill="black"', ""));

      return Promise.resolve();
    }),
  )

  return Promise.resolve();
}))
