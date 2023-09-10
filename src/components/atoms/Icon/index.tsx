import dynamic from 'next/dynamic';
import { IconBaseProps, IconType } from 'react-icons/lib';
import { generateClassNames } from '~/utils/filters';

interface IconProps {
  /** react-icons의 사용할 아이콘 이름 */
  name: string;
  /** react-icons의 svg props */
  iconProps?: IconBaseProps;
  classes?: string;
}

const Icon = ({ name, iconProps, classes }: IconProps) => {
  const iconClasses = generateClassNames('GnSvgIcon', ['root']);
  const lib = name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // 대문자 기준으로 전달받은 문자열 띄어쓰기
    .split(' ')[0] //제일 첫번째 띄어쓰기까지 문자열 자르기
    .toLocaleLowerCase(); // 모든문자 소문자로 변겅

  // @ts-expect-error IconType in here
  const ElementIcon: IconType = dynamic(
    async () =>
      await import(`react-icons/${lib}/index.js`).then(
        (mod: JSX.Element) => mod[name as keyof JSX.Element]
      ),
    { ssr: false }
  );

  return <ElementIcon className={`${iconClasses} ${classes}`} {...iconProps} />;
};

export default Icon;
