define(function(require,exports,modules){
	return function(jquery){
		(function($){
			var RecordList = function (obj) {
				this.init(obj);
			}
			RecordList.prototype.init = function(obj){
				var options = this.options = obj ;
				this.initTime = +new Date();
				this.resize();

				switch (options.direction){
					case 'left':
						this.scrollLeft = this.wrapperWidth;
						this.scrollTop = 0;
						options.$roller.css({
							width: this.rollerWidth,
							overflow:"auto"
						});
						break;
					default:
						this.scrollLeft = 0 ;
						this.scrollTop = this.wrapperHeight;
						break;
				}

				options.$wrapper.css({
					overflow : "hidden"
				});
				options.$roller.css({
					position : "relative"
				});
			};
			RecordList.prototype.resize = function(){
				switch (this.options.direction){
					case 'left':
						var list = this.options.$roller.find('li'),
							width = 0 ;

						$.each(list,function(key, li){
							width += $(li).outerWidth();
						})
						this.wrapperWidth = this.options.$wrapper.width();
						this.wrapperHeight = this.options.$wrapper.height();
						break;
					default:
						this.wrapperWidth = this.options.$wrapper.width();
						this.wrapperHeight = this.options.$wrapper.height();
						this.rollerHeight = this.options.$roller.height();
						break;
				}
			};
		})(jquery)
	}
})