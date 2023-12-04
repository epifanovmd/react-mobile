import fs from 'fs';
import path from 'path';
import {promisify} from 'util';

const fsReaddir = promisify(fs.readdir);
const fsWrite = promisify(fs.writeFile);
const fsReadFile = promisify(fs.readFile);
const fsRename = promisify(fs.rename);

const content  = `import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const replaceName: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      replacedRow
    </Svg>
  );
};`

const workDir = path.resolve(path.dirname(''));

const dirs = await fsReaddir(workDir);

const includeDirs = [
  'arrow',
  'calendar',
  'communication',
  'edit',
  'environment',
  'file',
  'interface',
  'media',
  'menu',
  'navigation',
  'shape',
  'system',
  'user',
  'warning',
];
const filterDirs = dirs.filter(item => includeDirs.some(name => name === item));

await Promise.all(filterDirs.map(async (dir) => {
  const currentDir = path.resolve(workDir, dir);
  const files = await fsReaddir(currentDir);

  // формируем React Native компоненты из иконок svg
  await Promise.all(
    files.filter(item => item.includes('.svg')).map(async (fileName) => {
      const fileNamePath = path.resolve(currentDir, fileName);
      const newFileName = fileName.replaceAll('_', '').replaceAll('.svg', '.tsx')
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

  // генерируем index.ts с экспортами всех иконок
  const names =   files.filter(item => item !== 'index.ts').map((fileName) => {
    const name = fileName.replace('.tsx', 'Icon');
    const file = fileName.replace('.tsx', '');

    return `export { ${name} } from './${file}';\n`;
  });

  await fsWrite(`${currentDir}/index.ts`, names.toString().replace(/,/gm, ''));


  // внусим изменения во все фалы иконок если нужно
  // await Promise.all(
  //   files.filter(item => item !== 'index.ts').map(async (fileName) => {
  //
  //     const data = await fsReadFile(path.resolve(currentDir, fileName))
  //     await fsWrite(path.resolve(currentDir, fileName), data.toString()
  //       .replace('stroke="white"', 'stroke={ownProps.fill}'));
  //
  //     return Promise.resolve();
  //   }),
  // )

  return Promise.resolve();
}))
