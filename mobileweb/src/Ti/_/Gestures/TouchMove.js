define("Ti/_/Gesture/TouchMove", ["Ti/_/declare", "Ti/_/lang"], function(declare,lang) {

	return declare("Ti._.Gestures.TouchMove", null, {
		
		name: "touchmove",
		
		blocking: [],
		
		processTouchStartEvent: function(e, element){
		},
		finalizeTouchStartEvent: function(){
		},
		
		processTouchEndEvent: function(e, element){
		},
		finalizeTouchEndEvent: function(){
		},
		
		processTouchMoveEvent: function(e, element){
			if (!element._isGestureBlocked(this.name)) {
				for (var i = 0; i < e.changedTouches.length; i++) {
					lang.hitch(element,element._handleTouchEvent(this.name,{
						x: e.changedTouches[i].clientX,
						y: e.changedTouches[i].clientY
					}));
				}
			}
		},
		finalizeTouchMoveEvent: function(){
		},
		
		processTouchCancelEvent: function(e, element){
		},
		finalizeTouchCancelEvent: function(){
		}

	});

});