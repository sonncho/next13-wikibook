import React, {
  ChangeEvent,
  DragEvent,
  HTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import styled, { useTheme } from 'styled-components';
import Icon from '~/components/atoms/Icon';
import Typography from '~/components/atoms/Typography';
import { getFilesFromEvent } from '~/utils/filters';

type FileType =
  | 'image/png'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/gif'
  | 'video/mp4'
  | 'video/quicktime'
  | 'application/pdf';

interface DropzoneProps {
  value?: File[];
  name?: string;
  acceptedFileTypes?: FileType[];
  width?: number | string;
  height?: number | string;
  hasError?: boolean;
  onDrop?: (files: File[]) => void;
  onChange?: (files: File[]) => void;
}

interface DropzonRootProps extends HTMLAttributes<HTMLDivElement> {
  $isFocused?: boolean;
  $hasError?: boolean;
  $width: number | string;
  $height: number | string;
}

const DropzoneRoot = styled.div<DropzonRootProps>`
  border: 1px dashed
    ${({ theme, $isFocused, $hasError }) => {
      if ($hasError) return theme.palette.error.main;
      else if ($isFocused) return theme.palette.primary.main;
      else return `rgba(${theme.palette.customColors.main}, 0.22)`;
    }};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  cursor: pointer;
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width)};
  height: ${({ $height }) => (typeof $height === 'number' ? `${$height}px` : $height)};
  transition: border-color 200ms cubic-bezier(0.86, 0, 0.07, 1);
  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const DropzoneContent = styled.div<{ $width: string | number; $height: string | number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width)};
  height: ${({ $height }) => (typeof $height === 'number' ? `${$height}px` : $height)};
  color: ${({ theme }) => `rgba(${theme.palette.customColors.main}, 0.22)`};
`;
const DropzoneInputFile = styled('input')`
  /* display: none; */
`;

const Dropzone = ({
  onDrop,
  onChange,
  value = [],
  name,
  acceptedFileTypes = ['image/jpeg', 'image/jpg', 'image/gif', 'image/png'],
  width = '100%',
  height = 120,
  hasError,
}: DropzoneProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const [isfocused, setIsFocused] = useState<boolean>(false);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);
    const files = value?.concat(
      getFilesFromEvent(e).filter((f) => acceptedFileTypes.includes(f.type as FileType))
    );

    onDrop && onDrop(files);
    onChange && onChange(files);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);

    const files = value?.concat(
      getFilesFromEvent(e).filter((f) => acceptedFileTypes.includes(f.type as FileType))
    );
    if (files.length === 0) {
      return window.alert(`다음 파일 포맷은 지정할 수 없습니다: ${acceptedFileTypes.join(',')}`);
    }

    onDrop && onDrop(files);
    onChange && onChange(files);
  };

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);
  }, []);

  const handleDragEnter = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(true);
  }, []);

  return (
    <>
      <DropzoneRoot
        ref={rootRef}
        className="GnDropzone-root"
        $width={width}
        $height={height}
        $hasError={hasError}
        $isFocused={isfocused}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragEnter={handleDragEnter}
        data-testid="dropzone"
      >
        <DropzoneInputFile
          type="file"
          accept={acceptedFileTypes.join(',')}
          ref={inputRef}
          name={name}
          onChange={handleChange}
          multiple
        />
        <DropzoneContent $width={width} $height={height}>
          <Icon name="AiOutlineCloudUpload" iconProps={{ size: 22 }} />
          <Typography
            $variant={'button'}
            style={{ color: `rgba(${theme.palette.customColors.main}, 0.244)` }}
          >
            Upload
          </Typography>
        </DropzoneContent>
      </DropzoneRoot>
    </>
  );
};

export default Dropzone;
