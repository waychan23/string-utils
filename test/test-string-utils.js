"use strict";

const assert = require('assert');
const util = require('../index');

describe('测试模块 utils/string-utils', function(){
	it('测试方法 camel2underscore: str=aCamelCase001LetterAThisIs001, 数字独立于字母, 首字母小写', function(){
		var r = util.camel2underscore('aCamelCase001LetterAThisIs001', false, true);
		assert.equal('a_camel_case_001_letter_a_this_is_001', r);
	});

	it('测试方法 camel2underscore: str=aCamelCase001LetterAThisIs001, 数字连接字母, 首字母小写', function(){
		var r = util.camel2underscore('aCamelCase001LetterAThisIs001', false, false);
		assert.equal('a_camel_case001_letter_a_this_is001', r);
	});

	it('测试方法 camel2underscore: str=001aCamelCase001LetterAThisIs001, 数字独立于字母, 首字母小写', function(){
		var r = util.camel2underscore('001aCamelCase001LetterAThisIs001', false, true);
		assert.equal('001_a_camel_case_001_letter_a_this_is_001', r);
	});

	it('测试方法 camel2underscore: str=001aCamelCase001LetterAThisIs001, 数字连接字母, 首字母小写', function(){
		var r = util.camel2underscore('001aCamelCase001LetterAThisIs001', false, false);
		assert.equal('001_a_camel_case001_letter_a_this_is001', r);
	});

	it('测试方法 camel2underscore: str=aCamelCase001LetterAThisIs001, 数字独立于字母, 首字母大写', function(){
		var r = util.camel2underscore('aCamelCase001LetterAThisIs001', true, true);
		assert.equal('A_Camel_Case_001_Letter_A_This_Is_001', r);
	});

	it('测试方法 camel2underscore: str=001aCamelCase001LetterAThisIs001, 数字连接字母, 首字母大写', function(){
		var r = util.camel2underscore('001aCamelCase001LetterAThisIs001', true, false);
		assert.equal('001_A_Camel_Case001_Letter_A_This_Is001', r);
	});

	it('测试方法 camel2underscore: str=username, 数字连接字母, 首字母大写', function(){
		var r = util.camel2underscore('username', true, false);
		assert.equal('Username', r);
	});

	it('测试方法 camel2underscore: str=username, 数字连接字母, 首字母小写', function(){
		var r = util.camel2underscore('username', false, false);
		assert.equal('username', r);
	});


	it('测试方法 makePrefixer', function(){
		var prefixer = util.makePrefixer('/hello');
		assert.equal(true, typeof prefixer == 'function');
		assert.equal('/hello/world', prefixer('/world'));
	});
});
