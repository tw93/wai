export default {
  manifest_version: 3,
  name: '歪脖子新标签页',
  description: '一款可以预防颈椎病的新标签页扩展',
  version: process.env.npm_package_version,
  author: 'Huan Luo <dukeluo@outlook.com> (https://shaiwang.life)',
  homepage_url: 'https://github.com/DukeLuo/wai',
  chrome_url_overrides: {
    newtab: 'index.html',
  },
  icons: {
    '16': 'icons/logo16.png',
    '32': 'icons/logo32.png',
    '48': 'icons/logo48.png',
    '64': 'icons/logo64.png',
    '128': 'icons/logo128.png',
  },
  permissions: ['storage'],
  browser_specific_settings: {
    gecko: {
      id: '{8ff02995-1ecd-4d77-9b1c-f4994f9ae70f}',
    },
  },
}
