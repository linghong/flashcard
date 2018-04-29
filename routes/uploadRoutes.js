const AWS = require ('aws-sdk');
const keys =require('../config/keys');
const uuid = require('uuid/v1');
const requireLogin = require('../middlewares/requireLogin');

const s3 = new AWS.S3({
	accessKeyId: keys.accessKeyID,
	secertAccessKey: keys.secretAccessKey
});

module.exports = app =>{
	app.get('/api/upload', requireLogin, (req, res)=>{
		const key = `${req.user.id}/${uuid()}.jpeg`;

		s3.getSignedUrl(
			'putObject', 
			{
				Bucket: 'lc-avatar1',
				ContentType: 'jpeg',
				Key: key
			}, 
			(err, url)=>res.send({key,url})
		);
	});
}