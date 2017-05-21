var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = 'about';
	locals.page.title = 'About Techpreneurs';

	locals.organizers = [
		{ name: 'Craig Sharkie', image: '/images/organizers/sharkie_400_round.png', twitter: 'twalve', title: 'Founder, MC, Coordinator', profile: '/member/sharkie' },
		{ name: 'Jed Watson', image: '/images/organizers/jedwatson_400_round.png', twitter: 'jedwatson', title: 'Community coordinator', profile: '/member/jed-watson' },
		{ name: 'John van der Loo', image: '/images/organizers/johnvanderloo_400_round.png', twitter: 'geekyjohn', title: 'Atlassian coordinator', profile: '/member/john-van-der-loo' }
	]

	view.render('site/about');

}
