var teamLocations = [{'latitude':49.24966,'longitude':-123.11934,'memberId':50,'name':'Andy Clement'},{'latitude':50.96055,'longitude':-1.424327,'memberId':33,'name':'Andy Wilkinson'},{'latitude':51.9308,'longitude':4.4792,'memberId':13,'name':'Arjen Poutsma'},{'latitude':40.11275,'longitude':-75.0793,'memberId':120,'name':'Artem Bilan'},{'latitude':45.757584,'longitude':4.832074,'memberId':124,'name':'Brian Clozel'},{'latitude':41.8236,'longitude':-71.4222,'memberId':101,'name':'Brian Dussault'},{'latitude':37.782467,'longitude':-122.4042,'memberId':90,'name':'Chloe Jackson'},{'latitude':50.961,'longitude':-1.425319,'memberId':30,'name':'Christopher Frost'},{'latitude':48.355034,'longitude':14.530615,'memberId':141,'name':'Christoph Strobl'},{'latitude':37.781235,'longitude':-122.5001,'memberId':131,'name':'Daniel Carwin'},{'latitude':52.0,'longitude':0.0,'memberId':18,'name':'Dave Syer'},{'latitude':40.06454,'longitude':-75.44987,'memberId':77,'name':'David Turanski'},{'latitude':48.85341,'longitude':2.3488,'memberId':138,'name':'Eric Bottard'},{'latitude':40.08644,'longitude':-75.38281,'memberId':60,'name':'Gary Russell'},{'latitude':50.897,'longitude':1.4042,'memberId':32,'name':'Glyn Normington'},{'latitude':36.52977,'longitude':-87.35945,'memberId':61,'name':'Greg Turnquist'},{'latitude':33.91007,'longitude':-84.31539,'memberId':75,'name':'Gunnar Hillert'},{'latitude':9.928451,'longitude':78.09121,'memberId':123,'name':'Ilayaperumal Gopinathan'},{'latitude':51.46131,'longitude':-0.303742,'memberId':110,'name':'Janne Valkealahti'},{'latitude':43.70011,'longitude':-79.4163,'memberId':156,'name':'Joe Grandja'},{'latitude':45.531563,'longitude':-122.74011,'memberId':132,'name':'John Blum'},{'latitude':48.3031,'longitude':14.2906,'memberId':5,'name':'Juergen Hoeller'},{'latitude':1.28967,'longitude':103.85007,'memberId':140,'name':'Kailashnath'},{'latitude':37.562992,'longitude':-122.32552,'memberId':151,'name':'Kenny Bastani'},{'latitude':49.28273,'longitude':-123.120735,'memberId':81,'name':'Kris De Volder'},{'latitude':52.22985,'longitude':21.011614,'memberId':152,'name':'Marcin Grzejszczak'},{'latitude':40.74019,'longitude':-73.99496,'memberId':144,'name':'Marius Bogoevici'},{'latitude':42.37,'longitude':-71.11,'memberId':12,'name':'Mark Fisher'},{'latitude':49.530113,'longitude':8.659813,'memberId':154,'name':'Mark Paluch'},{'latitude':40.794823,'longitude':-73.96072,'memberId':22,'name':'Mark Pollack'},{'latitude':53.5653,'longitude':10.0014,'memberId':68,'name':'Martin Lippert'},{'latitude':34.881668,'longitude':-90.00861,'memberId':136,'name':'Matt Stine'},{'latitude':41.776752,'longitude':-88.11954,'memberId':86,'name':'Michael Minella'},{'latitude':40.601185,'longitude':-112.0209,'memberId':149,'name':'Mike Heath'},{'latitude':51.05041,'longitude':13.73726,'memberId':69,'name':'Oliver Gierke'},{'latitude':-33.86,'longitude':151.2111,'memberId':80,'name':'Paul'},{'latitude':37.782467,'longitude':-122.4042,'memberId':87,'name':'Phil Webb'},{'latitude':40.717815,'longitude':-74.043144,'memberId':20,'name':'Rossen Stoyanchev'},{'latitude':33.52068,'longitude':-86.81176,'memberId':67,'name':'Roy Clarkson'},{'latitude':43.2081,'longitude':-71.5376,'memberId':158,'name':'Ryan Baxter'},{'latitude':37.78193,'longitude':-122.404175,'memberId':145,'name':'Sabby Anandan'},{'latitude':47.351994,'longitude':8.555705,'memberId':26,'name':'Sam Brannen'},{'latitude':32.682774,'longitude':-97.11859,'memberId':148,'name':'Scott Frederick'},{'latitude':45.768394,'longitude':4.872775,'memberId':143,'name':'S\xE9bastien Deleuze'},{'latitude':50.95738,'longitude':6.826897,'memberId':127,'name':'Sergey Shcherbakov'},{'latitude':48.83512,'longitude':2.382073,'memberId':161,'name':'Simon Basl\xE9'},{'latitude':40.77137,'longitude':-111.95111,'memberId':147,'name':'Spencer Gibb'},{'latitude':51.5265,'longitude':0.0825,'memberId':113,'name':'Stephane Maldini'},{'latitude':50.6333,'longitude':5.5667,'memberId':142,'name':'St\xE9phane Nicoll'},{'latitude':43.0768,'longitude':-70.7575,'memberId':41,'name':'Thomas Risberg'},{'latitude':49.433365,'longitude':-123.6758,'memberId':27,'name':'Trevor Marshall'},{'latitude':35.73608,'longitude':139.78337,'memberId':121,'name':'Tsuyoshi Miyake'},{'latitude':25.095,'longitude':55.16,'memberId':128,'name':'Will Schipp'}];
var source = `
<section class="team-member--container" data-member-id="50">
<a class="team-member--avatar" href="/team/aclement">
<img src="https://gravatar.com/avatar/3d8426c492dcabe2d3fdae509fa672ab?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/aclement">Andy Clement</a>
<div class="team-member--bio">
<p class="team-member--position">AspectJ Project Lead</p>
<p class="team-member--location">Vancouver, Canada</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/andy_clement"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/aclement"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="33">
<a class="team-member--avatar" href="/team/awilkinson">
<img src="https://gravatar.com/avatar/8d143bf6d465cb98f8196cf4311256d0?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/awilkinson">Andy Wilkinson</a>
<div class="team-member--bio">
<p class="team-member--position">Developer</p>
<p class="team-member--location">Southampton, UK</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/ankinson"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/wilkinsona"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="13">
<a class="team-member--avatar" href="/team/apoutsma">
<img src="https://gravatar.com/avatar/783fefe566e832976f50aacb1b8fd949?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/apoutsma">Arjen Poutsma</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Technical Advisor</p>
<p class="team-member--location">Rotterdam, the Netherlands</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/poutsma"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/poutsma"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="120">
<a class="team-member--avatar" href="/team/artembilan">
<img src="https://gravatar.com/avatar/2158ce6e7c048277890eb64458864c1c?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/artembilan">Artem Bilan</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Integration Team</p>
<p class="team-member--location">Philadelphia, PA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/artem_bilan"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/artembilan"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/109983761139714910865">G+</a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/artem-bilan"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="2">
<a class="team-member--avatar" href="/team/bhale">
<img src="https://gravatar.com/avatar/e8ce1adbe0dc9f3fe38d7789a25ba5d0?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/bhale">Ben Hale</a>
<div class="team-member--bio">
<p class="team-member--position"></p>
<p class="team-member--location"></p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/nebhale"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="150">
<a class="team-member--avatar" href="/team/fifthposition">
<img src="https://gravatar.com/avatar/8575d1f4fc0975a98685633c6b47a4d4?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/fifthposition">Ben Klein</a>
<div class="team-member--bio">
<p class="team-member--position">Technical Writer</p>
<p class="team-member--location">St Louis, MO</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/fifthposition"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/fifthposition"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="124">
<a class="team-member--avatar" href="/team/bclozel">
<img src="https://gravatar.com/avatar/7f6b3d65ae30e6fec52287f34e22dcb0?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/bclozel">Brian Clozel</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Framework committer</p>
<p class="team-member--location">Lyon, France</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/bclozel"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/bclozel"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/bclozel"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/brianclozel"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="101">
<a class="team-member--avatar" href="/team/bdussault">
<img src="https://secure.gravatar.com/avatar/?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/bdussault">Brian Dussault</a>
<div class="team-member--bio">
<p class="team-member--position">Director, Spring R&amp;D</p>
<p class="team-member--location">Providence, RI</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/briandussault"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/dussab"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="90">
<a class="team-member--avatar" href="/team/cjackson">
<img src="https://gravatar.com/avatar/9f9dd00242d5ef6eea53e66b2cb6bf6d?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/cjackson">Chloe Jackson</a>
<div class="team-member--bio">
<p class="team-member--position">Web Producer</p>
<p class="team-member--location">San Francisco, CA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/jacksoncvm"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="111">
<a class="team-member--avatar" href="/team/chrisjs">
<img src="https://avatars.githubusercontent.com/u/539358?v=3?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/chrisjs">Chris Schaefer</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Batch Committer</p>
<p class="team-member--location"></p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/chrisjs"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="30">
<a class="team-member--avatar" href="/team/cfrost">
<img src="https://gravatar.com/avatar/30994352b9a990d525f9aed9718b012a?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/cfrost">Christopher Frost</a>
<div class="team-member--bio">
<p class="team-member--position">Software Engineer </p>
<p class="team-member--location">Southampton</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/cgfrost"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/cgfrost"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/cgfrost"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="141">
<a class="team-member--avatar" href="/team/christophstrobl">
<img src="https://gravatar.com/avatar/eeacd6c45e867cb36eb05c9daa5cc2de?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/christophstrobl">Christoph Strobl</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Data Committer</p>
<p class="team-member--location">Pregarten, Austria</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/stroblchristoph"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/christophstrobl"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/christophstrobl"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/stroblchristoph"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="66">
<a class="team-member--avatar" href="/team/cwalls">
<img src="https://gravatar.com/avatar/52fd524c733cc1098c2eeeae38ea8a20?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/cwalls">Craig Walls</a>
<div class="team-member--bio">
<p class="team-member--position">Sr. Engineer</p>
<p class="team-member--location">Dallas, TX</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/habuma"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/habuma"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/habuma"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/habuma"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="131">
<a class="team-member--avatar" href="/team/dcarwin-pivotal">
<img src="https://gravatar.com/avatar/4d326326a6c677257e028c1b684ec8b6?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/dcarwin-pivotal">Daniel Carwin</a>
<div class="team-member--bio">
<p class="team-member--position">Product Manager</p>
<p class="team-member--location">San Francisco, CA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/dcarwin"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/dcarwin-pivotal"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="18">
<a class="team-member--avatar" href="/team/dsyer">
<img src="https://gravatar.com/avatar/ae671230e3a1c2a0eefa7604990084f1?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/dsyer">Dave Syer</a>
<div class="team-member--bio">
<p class="team-member--position">Senior Consulting Engineer</p>
<p class="team-member--location">London</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/david_syer"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/dsyer"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/dsyer"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="77">
<a class="team-member--avatar" href="/team/dturanski">
<img src="https://gravatar.com/avatar/84c8faecf1c26022da6feb55ef8f6af7?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/dturanski">David Turanski</a>
<div class="team-member--bio">
<p class="team-member--position">Committer Spring XD, Spring Integration, Spring Data Gemfire</p>
<p class="team-member--location">Berwyn, PA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/dturanski"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/dturanski"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="125">
<a class="team-member--avatar" href="/team/duncwinn">
<img src="https://avatars.githubusercontent.com/u/1420094?v=3?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/duncwinn">Duncan Winn</a>
<div class="team-member--bio">
<p class="team-member--position"></p>
<p class="team-member--location"></p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/duncwinn"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="138">
<a class="team-member--avatar" href="/team/ebottard">
<img src="https://gravatar.com/avatar/ff71c7cf9b92d2b6059758cecf33e6fa?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/ebottard">Eric Bottard</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Cloud Stream, Spring Cloud Dataflow &amp; Spring XD</p>
<p class="team-member--location">Paris, France</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/ebottard"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/ericbottard"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="60">
<a class="team-member--avatar" href="/team/grussell">
<img src="https://gravatar.com/avatar/d84a5be5451df53118f5d2dedd1ef0fb?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/grussell">Gary Russell</a>
<div class="team-member--bio">
<p class="team-member--position">Project Lead, Spring Integration, AMQP</p>
<p class="team-member--location">Pennsylvania, USA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/gprussell"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/garyrussell"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/gprussell"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="102">
<a class="team-member--avatar" href="/team/grenfro">
<img src="https://gravatar.com/avatar/7881b619a0163626e6d7fefc7c43597d?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/grenfro">Glenn Renfro</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Integration/XD Committer</p>
<p class="team-member--location">Atlanta USA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/cppwfs"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/cppwfs"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/cppwfs"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="32">
<a class="team-member--avatar" href="/team/gnormington">
<img src="https://gravatar.com/avatar/132b1a9d7e4acd28950bb6e72256b078?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/gnormington">Glyn Normington</a>
<div class="team-member--bio">
<p class="team-member--position">Cloud Foundry Buildpacks etc.</p>
<p class="team-member--location">Southampton, England</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/@glynnormington"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/glyn"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="61">
<a class="team-member--avatar" href="/team/gturnquist">
<img src="https://gravatar.com/avatar/43e9a9d63f7f4f9891c9fcd592b89cfa?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/gturnquist">Greg Turnquist</a>
<div class="team-member--bio">
<p class="team-member--position">Test-bitten script junky</p>
<p class="team-member--location">Clarksville, TN USA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/gregturn"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/gregturn"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/gregturn"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/gregturn"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="75">
<a class="team-member--avatar" href="/team/ghillert">
<img src="https://gravatar.com/avatar/903963cd4ebea29ba7cc90534c7c5d7b?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/ghillert">Gunnar Hillert</a>
<div class="team-member--bio">
<p class="team-member--position">Committer for Spring Integration and Spring XD</p>
<p class="team-member--location">Atlanta, GA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/ghillert"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/ghillert"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/ghillert"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/ghillert"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="123">
<a class="team-member--avatar" href="/team/ilayaperumalg">
<img src="https://gravatar.com/avatar/38d60120a048d67712e5c5f50ff73ea5?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/ilayaperumalg">Ilayaperumal Gopinathan</a>
<div class="team-member--bio">
<p class="team-member--position">Spring XD, Spring Cloud Stream/Dataflow committer</p>
<p class="team-member--location">Madurai, India</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/ilayaperumalg"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/ilayaperumalg"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="133">
<a class="team-member--avatar" href="/team/omearaj">
<img src="https://avatars.githubusercontent.com/u/1473334?v=3?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/omearaj">Jamie O&#39;Meara</a>
<div class="team-member--bio">
<p class="team-member--position"></p>
<p class="team-member--location"></p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/omearaj"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="110">
<a class="team-member--avatar" href="/team/jvalkealahti">
<img src="https://gravatar.com/avatar/dbd576b7eed3f8db0503df5039166988?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/jvalkealahti">Janne Valkealahti</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Data Hadoop Engineer</p>
<p class="team-member--location">London, UK</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/tunebluez"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/jvalkeal"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/jannevalkealahti"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="156">
<a class="team-member--avatar" href="/team/pivotal-joe-grandja">
<img src="https://gravatar.com/avatar/9871b03a6881b8046b250d801197e40a?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/pivotal-joe-grandja">Joe Grandja</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Security Senior Engineer</p>
<p class="team-member--location">Toronto, Canada</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/joe_grandja"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/jgrandja"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="132">
<a class="team-member--avatar" href="/team/jxblum">
<img src="https://gravatar.com/avatar/8b744eb1317603fabdc12e64d10d5f12?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/jxblum">John Blum</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Data Team</p>
<p class="team-member--location">Portland, OR</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/john_blum"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/jxblum"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/jblum">G+</a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="63">
<a class="team-member--avatar" href="/team/jlong">
<img src="https://gravatar.com/avatar/fb22593caf24e4bb4c98d467cdd247e6?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/jlong">Josh Long</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Developer Advocate</p>
<p class="team-member--location">an aisle seat or San Francisco, CA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/starbuxman"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/joshlong"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/joshlong"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/starbuxman"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="5">
<a class="team-member--avatar" href="/team/jhoeller">
<img src="https://gravatar.com/avatar/ba9686d8c567aabedc1b7f8b6a7fb3d6?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/jhoeller">Juergen Hoeller</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Framework project lead</p>
<p class="team-member--location">Linz, Austria</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/springjuergen"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/jhoeller"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="140">
<a class="team-member--avatar" href="/team/kailashnathkutti">
<img src="https://avatars.githubusercontent.com/u/1370142?v=3?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/kailashnathkutti">Kailashnath</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Data for Hadoop committer</p>
<p class="team-member--location">Singapore</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/kailashnathkutti"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/Kailash"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="151">
<a class="team-member--avatar" href="/team/kbastani">
<img src="https://gravatar.com/avatar/b610cfa42b8d01be949eb5f1e314e077?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/kbastani">Kenny Bastani</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Developer Advocate</p>
<p class="team-member--location">San Mateo, CA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/kennybastani"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/kbastani"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/+KennyBastaniGoogle">G+</a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/kbastani"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="81">
<a class="team-member--avatar" href="/team/kdvolder">
<img src="https://gravatar.com/avatar/4aa2e47ff7cc610ddc3ebed3a2291a1a?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/kdvolder">Kris De Volder</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Tools Team Comitter</p>
<p class="team-member--location">Vancouver, BC, Canada</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/kdvolder"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="162">
<a class="team-member--avatar" href="/team/mbhave">
<img src="https://gravatar.com/avatar/92d04eb42059022f81e7dc7e667487c8?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/mbhave">Madhura</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Boot Developer</p>
<p class="team-member--location">San Francisco, CA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/mbhave"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="152">
<a class="team-member--avatar" href="/team/marcingrzejszczak">
<img src="https://gravatar.com/avatar/d4b43000c99fccc46455f42a841fa62e?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/marcingrzejszczak">Marcin Grzejszczak</a>
<div class="team-member--bio">
<p class="team-member--position"></p>
<p class="team-member--location">Warsaw, Poland</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/mgrzejszczak"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/marcingrzejszczak"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/108408840893580782990">G+</a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/marcin-grzejszczak"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="144">
<a class="team-member--avatar" href="/team/mbogoevici">
<img src="https://gravatar.com/avatar/ee7ff5474c7ecfe0ec209df0eeb531fa?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/mbogoevici">Marius Bogoevici</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Cloud Stream Lead</p>
<p class="team-member--location">New York, NY</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/mariusbogoevici"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/mbogoevici"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/mbogoevici"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/mariusbogoevici"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="12">
<a class="team-member--avatar" href="/team/mfisher">
<img src="https://gravatar.com/avatar/443e6ec0242c3f54001dae34374780e2?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/mfisher">Mark Fisher</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Integration founder, Spring Cloud Data Flow co-lead</p>
<p class="team-member--location">Cambridge, MA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/m_f_"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/markfisher"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="154">
<a class="team-member--avatar" href="/team/mp911de">
<img src="https://gravatar.com/avatar/6494a9d91e9ffef9adc8253257f1b35e?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/mp911de">Mark Paluch</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Data Committer</p>
<p class="team-member--location">Weinheim, Germany</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/mp911de"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/mp911de"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/mp911de"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/mp911de"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="22">
<a class="team-member--avatar" href="/team/mpollack">
<img src="https://gravatar.com/avatar/5cffed9a3aad16d33d07f6e7ef2ebbb7?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/mpollack">Mark Pollack</a>
<div class="team-member--bio">
<p class="team-member--position">Spring XD co-lead/Spring Data Lead</p>
<p class="team-member--location">New York, NY</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/markpollack"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="68">
<a class="team-member--avatar" href="/team/mlippert">
<img src="https://gravatar.com/avatar/8491f7d4276bddcfdcefaf5ae860b9f6?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/mlippert">Martin Lippert</a>
<div class="team-member--bio">
<p class="team-member--position">Developer Tools Engineering, Spring Tool Suite Lead</p>
<p class="team-member--location">Hamburg, Germany</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/martinlippert"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/martinlippert"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/martinlippert"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/martinlippert"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="136">
<a class="team-member--avatar" href="/team/mstine">
<img src="https://gravatar.com/avatar/a27aa408d9ca3a467dcdc9eb9444d5f8?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/mstine">Matt Stine</a>
<div class="team-member--bio">
<p class="team-member--position">Product Manager - Spring / Cloud Foundry</p>
<p class="team-member--location">Nesbit, MS</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/mstine"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/mstine"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/mstine"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/mstine"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="78">
<a class="team-member--avatar" href="/team/misvy">
<img src="https://gravatar.com/avatar/e0dffdc6678a8035ce431e3bc46a82f8?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/misvy">Michael Isvy</a>
<div class="team-member--bio">
<p class="team-member--position">Asia-Pacific Education manager</p>
<p class="team-member--location">Singapore</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/michaelisvy"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="86">
<a class="team-member--avatar" href="/team/mminella">
<img src="https://gravatar.com/avatar/ab8031806cdd258238e67411157d215a?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/mminella">Michael Minella</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Batch &amp; Cloud Task Lead</p>
<p class="team-member--location">Naperville, IL</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/michaelminella"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/mminella"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/michaelminella"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="149">
<a class="team-member--avatar" href="/team/mheath">
<img src="https://gravatar.com/avatar/3343481e65d302c81b4aacdaf4682bdd?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/mheath">Mike Heath</a>
<div class="team-member--bio">
<p class="team-member--position">Developer</p>
<p class="team-member--location">Salt Lake City, UT</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/mheath"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/mheath"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/elcapo@gmail.com">G+</a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="69">
<a class="team-member--avatar" href="/team/ogierke">
<img src="https://gravatar.com/avatar/27320c872264d5db7a38f65137d423db?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/ogierke">Oliver Gierke</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Data Project Lead</p>
<p class="team-member--location">Dresden, Germany</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/olivergierke"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/olivergierke"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/+OliverGierke">G+</a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/olivergierke"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/olivergierke"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="80">
<a class="team-member--avatar" href="/team/pchapman">
<img src="https://gravatar.com/avatar/0b0bedf6c0dab07b13a322eed9350873?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/pchapman">Paul</a>
<div class="team-member--bio">
<p class="team-member--position">Senior Consultant Trainer</p>
<p class="team-member--location">Sydney</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/paulc4"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="87">
<a class="team-member--avatar" href="/team/pwebb">
<img src="https://gravatar.com/avatar/abbd9da647d544664816f5212717aba2?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/pwebb">Phil Webb</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Framework commiter</p>
<p class="team-member--location">San Francisco</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/phillip_webb"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/philwebb"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/philwebb"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/phillip_webb"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="89">
<a class="team-member--avatar" href="/team/phumphrey">
<img src="https://gravatar.com/avatar/c910c2f6520a5977a836d74e86e07cb4?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/phumphrey">Pieter Humphrey</a>
<div class="team-member--bio">
<p class="team-member--position">Product Marketing</p>
<p class="team-member--location">San Francisco, CA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/springcentral"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/pieterhumphrey"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="83">
<a class="team-member--avatar" href="/team/rwinch">
<img src="https://gravatar.com/avatar/30ed046efb35c67d4c055dab109b8933?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/rwinch">Rob Winch</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Security &amp; LDAP project lead</p>
<p class="team-member--location"></p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/rob_winch"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/rwinch"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/rwinch"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/rob_winch"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="20">
<a class="team-member--avatar" href="/team/rstoyanchev">
<img src="https://secure.gravatar.com/avatar/?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/rstoyanchev">Rossen Stoyanchev</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Framework committer</p>
<p class="team-member--location">Jersey City, NJ</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/rstoya05"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/rstoyanchev"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/rstoyanchev">G+</a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="67">
<a class="team-member--avatar" href="/team/rclarkson">
<img src="https://gravatar.com/avatar/55c978494c708e62f4b76bde1e0dcc19?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/rclarkson">Roy Clarkson</a>
<div class="team-member--bio">
<p class="team-member--position">Developer</p>
<p class="team-member--location">Birmingham, AL</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/royclarkson"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/royclarkson"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/+RoyClarkson">G+</a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/royclarkson"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/royclarkson"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="158">
<a class="team-member--avatar" href="/team/ryanjbaxter">
<img src="https://gravatar.com/avatar/afd50fcf492f7ceb9cdb646d960c882b?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/ryanjbaxter">Ryan Baxter</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Cloud Engineer</p>
<p class="team-member--location">Concord, NH</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/ryanjbaxter"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/ryanjbaxter"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/+RyanBaxterJ">G+</a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/ryanjbaxter"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/rbaxter85-6699"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="145">
<a class="team-member--avatar" href="/team/sabbyanandan">
<img src="https://gravatar.com/avatar/f0373ebca801ca4b2746732b451f497c?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/sabbyanandan">Sabby Anandan</a>
<div class="team-member--bio">
<p class="team-member--position">Product Manager</p>
<p class="team-member--location">San Francisco, CA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/sabbyanandan"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/sabbyanandan"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/sabbyanandan"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="26">
<a class="team-member--avatar" href="/team/sbrannen">
<img src="https://gravatar.com/avatar/64310de9c07f30458f9baae33d91ccdc?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/sbrannen">Sam Brannen</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Framework Committer</p>
<p class="team-member--location">Zurich, Switzerland</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/sam_brannen"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/sbrannen"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/sam_brannen"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="148">
<a class="team-member--avatar" href="/team/scottfrederick">
<img src="https://gravatar.com/avatar/5fecafb1f46cd05cd8caaa6e9a4b9cad?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/scottfrederick">Scott Frederick</a>
<div class="team-member--bio">
<p class="team-member--position">Spring and Cloud Foundry committer</p>
<p class="team-member--location">Dallas/Fort Worth TX</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/scottyfred"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/scottfrederick"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/scottyfred">G+</a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/scottfrederick"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/scottfrederick"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="143">
<a class="team-member--avatar" href="/team/sdeleuze">
<img src="https://gravatar.com/avatar/5e2908bea32b1f0519a48d5c2f66f000?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/sdeleuze">Sébastien Deleuze</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Framework committer</p>
<p class="team-member--location">Lyon, France</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/sdeleuze"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/sdeleuze"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/sdeleuze"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/sdeleuze"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="127">
<a class="team-member--avatar" href="/team/sshcherbakov">
<img src="https://gravatar.com/avatar/d5eaa0398d86085f8751aae1bf3373fc?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/sshcherbakov">Sergey Shcherbakov</a>
<div class="team-member--bio">
<p class="team-member--position">Solution Architect Consultant</p>
<p class="team-member--location">Cologne, Germany</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/@shcherbakovs"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/sshcherbakov"></a>
<a class="team-member--social--icon gplus-small" rel="me" href="https://plus.google.com/sergey.shcherbakov@gmail.com">G+</a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="161">
<a class="team-member--avatar" href="/team/simonbasle">
<img src="https://gravatar.com/avatar/056097e00486bcdf172708607f194b1e?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/simonbasle">Simon Baslé</a>
<div class="team-member--bio">
<p class="team-member--position">Project Reactor Committer</p>
<p class="team-member--location">Paris, France</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/simonbasle"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/simonbasle"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/simonbasle"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="147">
<a class="team-member--avatar" href="/team/spencergibb">
<img src="https://gravatar.com/avatar/9829cffffee70b8d4f48230d907837cf?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/spencergibb">Spencer Gibb</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Cloud co-founder and co-lead</p>
<p class="team-member--location">Salt Lake City UT</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/spencerbgibb"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/spencergibb"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/spencergibb"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="113">
<a class="team-member--avatar" href="/team/smaldini">
<img src="https://gravatar.com/avatar/28f1e1df33de53d322cf42f4e6aec5ac?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/smaldini">Stephane Maldini</a>
<div class="team-member--bio">
<p class="team-member--position">Project Reactor Lead</p>
<p class="team-member--location">London, UK</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/smaldini"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/smaldini"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/smaldini"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/smaldini"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="142">
<a class="team-member--avatar" href="/team/snicoll">
<img src="https://gravatar.com/avatar/33d0963a20138828608f3f61927545b8?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/snicoll">Stéphane Nicoll</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Framework/Boot committer</p>
<p class="team-member--location">Liège, Belgium</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/snicoll"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/snicoll"></a>
<a class="team-member--social--icon speakerdeck-small" rel="me" href="https://speakerdeck.com/snicoll"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/snicoll"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="41">
<a class="team-member--avatar" href="/team/trisberg">
<img src="https://gravatar.com/avatar/c2ce75a3d51fc3a2d86a3643d2e90033?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/trisberg">Thomas Risberg</a>
<div class="team-member--bio">
<p class="team-member--position">Software Engineer focusing on Big Data</p>
<p class="team-member--location">New Hampshire, USA</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/trisberg"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/trisberg"></a>
<a class="team-member--social--icon lanyrd-small" rel="me" href="https://lanyrd.com/profile/trisberg"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="27">
<a class="team-member--avatar" href="/team/tmarshall">
<img src="https://gravatar.com/avatar/d8237717b8a49b4d3a1def1b1adb2e86?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/tmarshall">Trevor Marshall</a>
<div class="team-member--bio">
<p class="team-member--position">Systems Administration / Build Engineering</p>
<p class="team-member--location">Roberts Creek, Canada</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/trevormarshall"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/trevormarshall"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="121">
<a class="team-member--avatar" href="/team/tsuyo">
<img src="https://secure.gravatar.com/avatar/?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/tsuyo">Tsuyoshi Miyake</a>
<div class="team-member--bio">
<p class="team-member--position">Spring Contributor</p>
<p class="team-member--location">Tokyo, Japan</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon twitter-small" rel="me" href="http://twitter.com/tsuyokb"></a>
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/tsuyo"></a>
</div>
</div>
</section>
<section class="team-member--container" data-member-id="128">
<a class="team-member--avatar" href="/team/willschipp">
<img src="https://avatars.githubusercontent.com/u/3287360?v=3?s=153&amp;s=153"/>
</a>
<div class="team-member--info">
<a class="team-member--name" href="/team/willschipp">Will Schipp</a>
<div class="team-member--bio">
<p class="team-member--position">Field Engineer</p>
<p class="team-member--location">Dubai, United Arab Emirates</p>
</div>
<div class="team-member--social">
<a class="team-member--social--icon github-small" rel="me" href="https://github.com/willschipp"></a>
</div>
</div>
</section>
`;
