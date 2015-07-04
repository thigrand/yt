'use strict';
function videoData2($http, $q, dataFromYT, dataFromVimeo) {


	var validator = {
		types: {
			isVimeo: {
				validate: function (id) {
					return !/[^0-9]/i.test(id);
				},
				instructions: function() {
					console.log('pobieram vimeo');
					videoObjects.push(dataFromVimeo.get(id));
				}
			},
			isYouTube: {
				validate: function (id) {
					return /[a-zA-Z0-9_-]{11}/i.test(id);
				},
				instructions: function() {
					console.log('pobieram yt');
					videoObjects.push(dataFromYT.get(id));
				}
			}
		},
		messages: [],
		config: { 
			vimeo : 'isVimeo',
			yt : 'isYouTube'
		},
		validate: function(data) {
			var i, msg, type, checker, resultOk;
			this.messages = [];
				// console.log(data);						=> ["124740781", "-rXufJkHRns", "130890972", "rYEDA3JcQqw"]
			for (i in data) {//(i = 0; i < data.length; i++)
				// console.log(data.length);				=> 4
				// console.log(data.hasOwnProperty(i));		=> true
				// console.log(data[i]);					=> pokazuje co trzeba kolejne elementy data
				// console.log(i);							//=> od 0 do 3

				if(data.hasOwnProperty(i)) {
					// console.log(this);					//=>validator
					//type = this.config[i];
					type = Object.keys(validator.types).some(function(key){
						return validator.types[key].validate(data);
					});
					checker = this.types[type];
					// console.log(type, "type");				//=> isVimeo
					// console.log(checker, "checker");		//=> obiekt  isVimeo lub isYouTube
					if(!type) {
						continue;
					}
					if(!checker) {
						throw {
							name: 'ValidationError',
							message: 'Invalid key ' + type
						};
					}
					resultOk = checker.validate(data[i]);
					// console.log(resultOk, "resultOk");		=> true
					if(!resultOk) {
						msg = 'Invalid value *' + i + '*; ' + checker.instuctions;
						this.messages.push(msg);
					}
				}
			}
			return this.hasErrors();
		},
		hasErrors: function() {
			return this.messages.length !== 0;
		}
	};

	function getData(videosID){
		var videoObjects = [];
		var oneId;
		for(var i = 0; i < videosID.length; i++) {
			oneId = videosID[i];
			console.log(i, validator.validate(oneId));
			if(validator.hasErrors()) {
				console.log(validator.messages.join('\n'));
			}

			videoObjects.push(dataFromVimeo.get(videosID[i]));
			//videoObjects.push("getDataFromYT(videosID[i])");
		}
		return $q.all(videoObjects);
	}

	return {
		getData: getData
	};
}
angular.module('ytApp').factory('videoData2', ['$http', '$q', 'dataFromYT', 'dataFromVimeo', videoData2]);

	