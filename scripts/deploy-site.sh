# 清理历史文件
rm -r -f ren-cli-site
# clone 静态站点仓库
git clone git@github.com:MrLaoRen/ren-cli-site.git
# 更新静态站点内容
rm -r ./ren-cli-site/site
mv ./site/* ./ren-cli-site
cd ./ren-cli-site
git add .
git commit -m 'feat: update ren-cli-site-content'
git push origin master
cd ..
# 清理临时文件目录
rm -r -f site ren-cli-site