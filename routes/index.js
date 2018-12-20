var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sitemap', function(req, res, next) {
  res.render('sitemap', { title: '网址地图' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

//
router.get('/pages/agentAlliance/agent_alliance', function(req, res, next) {
  res.render('pages/agentAlliance/agent_alliance', { title: '代理加盟' });
});

router.get('/pages/school/school', function(req, res, next) {
res.render('pages/school/school', { title: '童忆学院' });
});
router.get('/pages/news/news', function(req, res, next) {
  res.render('pages/news/news', { title: '新闻中心' });
});
router.get('/pages/aboutUs/about_us', function(req, res, next) {
  res.render('pages/aboutUs/about_us', { title: '关于我们' });
});

router.get('/pages/login/login', function(req, res, next) {
  res.render('pages/login/login', { title: '登录' });
});

//产品
router.get('/pages/product/class_mange', function(req, res, next) {
  res.render('pages/product/class_mange', { title: '园务管理' });
});
router.get('/pages/product/interactive_home', function(req, res, next) {
res.render('pages/product/interactive_home', { title: '家园互动' });
});
router.get('/pages/product/recruit_student', function(req, res, next) {
res.render('pages/product/recruit_student', { title: '宣传招生' });
});
router.get('/pages/product/safety', function(req, res, next) {
res.render('pages/product/safety', { title: '安全健康' });
});


module.exports = router;