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
  compiler: (() => {
    let compilerConfig = {
      // styledComponents활성화
      styledComponents: true,
    };

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        // 프로덕션 환경에서는 리액트 테스팅 라이브러리에서 사용하는 data-testid속성을 삭제
        reactRemoveProperties: { properties: ['^data-testid$'] },
      };
    }
    return compilerConfig;
  })(),
};

module.exports = nextConfig;
