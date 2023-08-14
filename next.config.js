/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // compiler: {
  //   styledComponents: true,
  // },
  compiler: (() => {
    let compilerConfig = {
      // styledComponents활성화
      styledComponents: true,
    };

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        // 프로덕션 환경에서는 리액트 테스팅 라이브러리에서 사용하는 data-testid속성을 삭제
        ...compilerConfig,
        reactRemoveProperties: { properties: ['^data-testid$'] },
      };
    }
    return compilerConfig;
  })(),
  // 교차출처 리소스 공유에서의 쿠키 전송을 피하기위해 proxy설정
  async rewrites() {
    return [
      {
        // ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhost:8000
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ];
  },
};

module.exports = nextConfig;
