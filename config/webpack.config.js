const path = require('path');
const sass = require('sass');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(PROJECT_ROOT, 'src');
const TEMPLATE_PATH = path.resolve(PROJECT_ROOT, 'public');
const ASSETS_PATH = path.resolve(SRC_PATH, 'assets');

module.exports = (env, argv) => {
  const prod = argv.mode === 'production';

  return {
    devServer: {
      historyApiFallback: false,
      port: 3000,
      hot: true,
    },
    mode: prod ? 'production' : 'development', // mode 설정
    devtool: prod ? 'hidden-source-map' : 'eval', // source map 옵션
    entry: path.resolve(SRC_PATH, 'index.tsx'),
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@src': SRC_PATH,
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          exclude: /node_module/,
          use: 'babel-loader',
        },
        {
          test: /\.s?css?$/,
          exclude: /node_module/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: sass, //dart-sass 적용
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          exclude: /node_module/,
          use: {
            loader: 'url-loader',
            options: {
              name: 'assets/[name].[hash].[ext]',
              fallback: 'file-loader',
              limit: 5000, // 5kb 미만 파일만 data url로 처리
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(TEMPLATE_PATH, 'index.html'), // 템플릿 경로 설정
        templateParameters: {
          // 템플릿에 주입할 파라매터 변수 지정
          env: prod ? '' : '(개발용)',
        },
        favicon: path.resolve(ASSETS_PATH, 'favicon.ico'),
        minify: prod
          ? {
              // 배포 모드시 최적화
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
      }),
      new CleanWebpackPlugin(), // 새로운 빌드시 이전 빌드 결과물 제거
      new MiniCssExtractPlugin({ filename: `[name].css` }), // 빌드 결과에서 스타일 분리
    ],
  };
};
