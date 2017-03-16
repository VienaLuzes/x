(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Lay_04_atlas_", frames: [[0,769,956,481],[1024,691,1024,685],[1024,0,1024,689],[0,1252,962,476],[964,1378,960,474],[964,854,54,58],[0,0,1022,767],[964,769,52,83],[964,974,38,68],[964,914,48,58],[2013,1543,31,42],[1926,1695,100,43],[1926,1378,100,163],[1926,1543,85,150]]}
];


// symbols:



(lib.Caixacopiar7 = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Camada1 = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Camada2 = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Camada5 = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Camada5copiar = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Camada6 = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Camada7 = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Camada8 = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Camada8copiar = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Camada9 = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Camada9copiar = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Urso2d = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Urso2dcopiar = function() {
	this.spriteSheet = ss["Lay_04_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.meio_strobs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape.setTransform(3.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.meio_strobs, new cjs.Rectangle(0,0,7.2,7.2), null);


(lib.f_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAgHIisg5ICsAzIBCifIg7CjICmBKIiohGIhFCyg");
	this.shape.setTransform(17.3,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.f_, new cjs.Rectangle(0,0,34.6,34.6), null);


(lib.direitos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Todos os direitos reservados à Viena Luzes. Cópia proibida", "italic 10px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 13;
	this.text.parent = this;
	this.text.setTransform(35.9,17);

	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(302.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.direitos, new cjs.Rectangle(33.9,0,368.6,43), null);


(lib.strob4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.meio_strobs();
	this.instance.parent = this;
	this.instance.setTransform(17.3,15.9,1.447,1.447,0,0,0,3.6,3.6);
	this.instance.alpha = 0.301;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({scaleX:2.08,scaleY:2.08,alpha:1},4).wait(1));

	// Layer 3
	this.instance_1 = new lib.meio_strobs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.3,15.9,0.528,0.528,0,0,0,3.6,3.6);
	this.instance_1.alpha = 0.309;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// Layer 4
	this.instance_2 = new lib.f_();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.3,17.3,0.415,0.415,0,0,0,17.2,17.2);
	this.instance_2.alpha = 0.309;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({regX:17.3,regY:17.3,scaleX:1,scaleY:1,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.strob3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.meio_strobs();
	this.instance.parent = this;
	this.instance.setTransform(17.3,15.9,1.447,1.447,0,0,0,3.6,3.6);
	this.instance.alpha = 0.301;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:2.08,scaleY:2.08,alpha:1},4).wait(1));

	// Layer 3
	this.instance_1 = new lib.meio_strobs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.3,15.9,0.528,0.528,0,0,0,3.6,3.6);
	this.instance_1.alpha = 0.309;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// Layer 4
	this.instance_2 = new lib.f_();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.3,17.3,0.415,0.415,0,0,0,17.2,17.2);
	this.instance_2.alpha = 0.309;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regX:17.3,regY:17.3,scaleX:1,scaleY:1,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.strob2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.meio_strobs();
	this.instance.parent = this;
	this.instance.setTransform(17.3,15.9,1.447,1.447,0,0,0,3.6,3.6);
	this.instance.alpha = 0.301;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:2.08,scaleY:2.08,alpha:1},4).wait(1));

	// Layer 3
	this.instance_1 = new lib.meio_strobs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.3,15.9,0.528,0.528,0,0,0,3.6,3.6);
	this.instance_1.alpha = 0.309;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// Layer 4
	this.instance_2 = new lib.f_();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.3,17.3,0.415,0.415,0,0,0,17.2,17.2);
	this.instance_2.alpha = 0.309;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:17.3,regY:17.3,scaleX:1,scaleY:1,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.stob01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.meio_strobs();
	this.instance.parent = this;
	this.instance.setTransform(17.3,15.9,1.447,1.447,0,0,0,3.6,3.6);
	this.instance.alpha = 0.301;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:2.08,scaleY:2.08,alpha:1},4).wait(1));

	// Layer 2
	this.instance_1 = new lib.meio_strobs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.3,15.9,0.528,0.528,0,0,0,3.6,3.6);
	this.instance_1.alpha = 0.309;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// Layer 3
	this.instance_2 = new lib.f_();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.3,17.3,0.415,0.415,0,0,0,17.2,17.2);
	this.instance_2.alpha = 0.309;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regX:17.3,regY:17.3,scaleX:1,scaleY:1,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Lay_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STROBE
	this.instance = new lib.strob4();
	this.instance.parent = this;
	this.instance.setTransform(1001.6,420.1,0.746,0.746);

	this.instance_1 = new lib.strob4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.1,574.6,0.236,0.236);

	this.instance_2 = new lib.strob3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.3,643.4,0.236,0.236);

	this.instance_3 = new lib.strob2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(72.3,624.1,0.236,0.236);

	this.instance_4 = new lib.stob01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(82.4,596.1,0.236,0.236);

	this.instance_5 = new lib.strob4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(130,561.1,0.225,0.225);

	this.instance_6 = new lib.strob3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(106.4,626.6,0.225,0.225);

	this.instance_7 = new lib.strob2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(114.9,608.2,0.225,0.225);

	this.instance_8 = new lib.stob01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(124.6,581.6,0.225,0.225);

	this.instance_9 = new lib.strob4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(200.9,525.2,0.302,0.302);

	this.instance_10 = new lib.strob3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(169.2,613,0.302,0.302);

	this.instance_11 = new lib.strob2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(180.7,588.3,0.302,0.302);

	this.instance_12 = new lib.stob01();
	this.instance_12.parent = this;
	this.instance_12.setTransform(193.7,552.6,0.302,0.302);

	this.instance_13 = new lib.strob4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(244.1,511.9,0.279,0.279);

	this.instance_14 = new lib.strob3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(214.8,593.1,0.279,0.279);

	this.instance_15 = new lib.strob2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(225.4,570.2,0.279,0.279);

	this.instance_16 = new lib.stob01();
	this.instance_16.parent = this;
	this.instance_16.setTransform(237.4,537.3,0.279,0.279);

	this.instance_17 = new lib.strob4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(312.9,477.9,0.374,0.374);

	this.instance_18 = new lib.strob3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(273.6,586.8,0.374,0.374);

	this.instance_19 = new lib.strob2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(287.8,556.1,0.374,0.374);

	this.instance_20 = new lib.stob01();
	this.instance_20.parent = this;
	this.instance_20.setTransform(303.9,511.9,0.374,0.374);

	this.instance_21 = new lib.strob4();
	this.instance_21.parent = this;
	this.instance_21.setTransform(338.6,579.3,0.535,0.535,-170.6);

	this.instance_22 = new lib.strob3();
	this.instance_22.parent = this;
	this.instance_22.setTransform(419.6,435,0.535,0.535,-170.6);

	this.instance_23 = new lib.strob2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(392.4,474.9,0.535,0.535,-170.6);

	this.instance_24 = new lib.stob01();
	this.instance_24.parent = this;
	this.instance_24.setTransform(359.3,533.5,0.535,0.535,-170.6);

	this.instance_25 = new lib.strob4();
	this.instance_25.parent = this;
	this.instance_25.setTransform(466.9,533.5,0.717,0.717,-160.1);

	this.instance_26 = new lib.strob3();
	this.instance_26.parent = this;
	this.instance_26.setTransform(608.9,363,0.717,0.717,-160.1);

	this.instance_27 = new lib.strob2();
	this.instance_27.parent = this;
	this.instance_27.setTransform(563.2,408.9,0.717,0.717,-160.1);

	this.instance_28 = new lib.stob01();
	this.instance_28.parent = this;
	this.instance_28.setTransform(505.3,478,0.717,0.717,-160.1);

	this.instance_29 = new lib.strob4();
	this.instance_29.parent = this;
	this.instance_29.setTransform(742.5,276.1,0.746,0.746);

	this.instance_30 = new lib.strob3();
	this.instance_30.parent = this;
	this.instance_30.setTransform(664.2,493.1,0.746,0.746);

	this.instance_31 = new lib.strob2();
	this.instance_31.parent = this;
	this.instance_31.setTransform(692.5,431.9,0.746,0.746);

	this.instance_32 = new lib.stob01();
	this.instance_32.parent = this;
	this.instance_32.setTransform(724.6,343.9,0.746,0.746);

	this.instance_33 = new lib.strob4();
	this.instance_33.parent = this;
	this.instance_33.setTransform(829.9,424.8,1,1,-162);

	this.instance_34 = new lib.strob3();
	this.instance_34.parent = this;
	this.instance_34.setTransform(1019.5,180.2,1,1,-162);

	this.instance_35 = new lib.strob2();
	this.instance_35.parent = this;
	this.instance_35.setTransform(958.1,246.6,1,1,-162);

	this.instance_36 = new lib.stob01();
	this.instance_36.parent = this;
	this.instance_36.setTransform(880.8,345.6,1,1,-162);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// LOGO
	this.instance_37 = new lib.direitos();
	this.instance_37.parent = this;
	this.instance_37.setTransform(821.8,746.5,1,1,0,0,0,201.3,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1));

	// Lay_04.psd
	this.instance_38 = new lib.Camada9copiar();
	this.instance_38.parent = this;
	this.instance_38.setTransform(47,619);

	this.instance_39 = new lib.Camada9();
	this.instance_39.parent = this;
	this.instance_39.setTransform(40,610);

	this.instance_40 = new lib.Camada8copiar();
	this.instance_40.parent = this;
	this.instance_40.setTransform(199,565);

	this.instance_41 = new lib.Camada8();
	this.instance_41.parent = this;
	this.instance_41.setTransform(192,558);

	this.instance_42 = new lib.Urso2dcopiar();
	this.instance_42.parent = this;
	this.instance_42.setTransform(776,365);

	this.instance_43 = new lib.Urso2d();
	this.instance_43.parent = this;
	this.instance_43.setTransform(769,359);

	this.instance_44 = new lib.Camada5copiar();
	this.instance_44.parent = this;
	this.instance_44.setTransform(64,119);

	this.instance_45 = new lib.Camada5();
	this.instance_45.parent = this;
	this.instance_45.setTransform(62,119);

	this.instance_46 = new lib.Camada6();
	this.instance_46.parent = this;
	this.instance_46.setTransform(768,263);

	this.instance_47 = new lib.Caixacopiar7();
	this.instance_47.parent = this;
	this.instance_47.setTransform(68,157);

	this.instance_48 = new lib.Camada1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(0,83);

	this.instance_49 = new lib.Camada7();
	this.instance_49.parent = this;
	this.instance_49.setTransform(1,0);

	this.instance_50 = new lib.Camada2();
	this.instance_50.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,1024,768);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 29.9,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Lay_04_atlas_.png?1489685785033", id:"Lay_04_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;