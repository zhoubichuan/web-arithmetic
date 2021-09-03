# 1.发布到master分支
git add -A
git commit -m 'master'
git pull github master
git push github master

# 2.打包
npm run src:build

# 3.进入打包目录
cd dist

# 4.发布到gh-pages分支
git init
git checkout --orphan gh-pages
git add .
git commit -m 'gh-pages'
git remote add origin https://github.com/zhoubichuan/web-arithmetic.git
git push -f github gh-pages

# 5.返回初始目录
cd -
