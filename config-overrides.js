// 配置具体对修改规则
const { override, fixBabelImports,addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions:{
            // 允许修改 css
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' },
        }
    }),
);