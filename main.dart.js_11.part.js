((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b9F(d,e,f,g,h,i,j){return new B.Ia(e,f,i,g,j,d,h)},
kb:function kb(d,e){this.a=d
this.b=e},
Ia:function Ia(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
Rm:function Rm(d,e){this.a=d
this.b=e},
R_:function R_(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fC$=e
_.dA$=f
_.bm$=g
_.c=_.a=null},
aUm:function aUm(d){this.a=d},
aUn:function aUn(d){this.a=d},
aUo:function aUo(d){this.a=d},
aUp:function aUp(d){this.a=d},
UX:function UX(){},
UY:function UY(){},
a6S:function a6S(d,e,f,g){var _=this
_.e=d
_.x=e
_.c=f
_.a=g}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[47],B)
C=c[135]
B.kb.prototype={
K(){return"DismissDirection."+this.b}}
B.Ia.prototype={
a6(){var x=null
return new B.R_(new A.bq(x,y.z),x,x,x)}}
B.Rm.prototype={
K(){return"_FlingGestureKind."+this.b}}
B.R_.prototype={
an(){var x,w,v=this
v.akp()
x=v.glJ()
x.bH()
w=x.cZ$
w.b=!0
w.a.push(v.gasL())
x.bH()
x.ct$.C(0,v.gasN())
v.Pz()},
glJ(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.ch(null,D.P,null,null,w)
w.d!==$&&A.aG()
w.d=x
v=x}return v},
gp0(){var x=this.glJ().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.glJ().m()
var x=this.f
if(x!=null)x.m()
this.ako()},
gkS(){var x=this.a.x
return x===C.nV||x===C.nW||x===C.nX},
rI(d){var x,w,v,u
if(d===0)return C.up
if(this.gkS()){x=this.c.al(y.o).w
A:{w=D.an===x
if(w&&d<0){v=C.nX
break A}u=D.m===x
if(u&&d>0){v=C.nX
break A}if(!w)v=u
else v=!0
if(v){v=C.nW
break A}v=null}return v}return d>0?C.uo:C.X2},
gMs(){this.a.toString
C.adF.h(0,this.rI(this.w))
return 0.4},
ga1H(){var x=this.c.gv()
x.toString
return this.gkS()?x.a:x.b},
apl(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glJ()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga1H()*J.fh(v.w)
x.fK()}else{v.w=0
x.sp(0)}v.aj(new B.aUm(v))},
apm(d){var x,w,v,u=this
if(u.y){x=u.glJ().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
x=d.e
x.toString
w=u.w
switch(u.a.x.a){case 1:case 0:u.w=w+x
break
case 4:x=w+x
if(x<0)u.w=x
break
case 5:x=w+x
if(x>0)u.w=x
break
case 2:switch(u.c.al(y.o).w.a){case 0:x=u.w+x
if(x>0)u.w=x
break
case 1:x=u.w+x
if(x<0)u.w=x
break}break
case 3:switch(u.c.al(y.o).w.a){case 0:x=u.w+x
if(x<0)u.w=x
break
case 1:x=u.w+x
if(x>0)u.w=x
break}break
case 6:u.w=0
break}if(J.fh(w)!==J.fh(u.w))u.aj(new B.aUn(u))
x=u.glJ()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga1H())},
asO(){this.a.toString},
Pz(){var x=this,w=J.fh(x.w),v=x.glJ(),u=x.gkS(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.aB(y.v.a(v),new A.aw(D.h,u,t),t.i("aB<aE.T>"))},
ap9(d){var x,w,v,u,t=this
if(t.w===0)return C.rb
x=d.a
w=x.a
v=x.b
if(t.gkS()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.rb
u=t.rI(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.rb
u=t.rI(v)}if(u===t.rI(t.w))return C.auU
return C.auV},
apk(d){var x,w,v,u,t=this
if(t.y){x=t.glJ().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glJ()
if(x.gbq()===D.aE){t.z0()
return}w=d.c
v=w.a
u=t.gkS()?v.a:v.b
switch(t.ap9(w).a){case 1:if(t.gMs()>=1){x.dZ()
break}t.w=J.fh(u)
x.AR(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fh(u)
x.AR(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbq()!==D.a6){w=x.x
w===$&&A.a()
if(w>t.gMs())x.cp()
else x.dZ()}break}},
Eo(d){return this.asM(d)},
asM(d){var x=0,w=A.v(y.q),v=this
var $async$Eo=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.aE&&!v.y?2:3
break
case 2:x=4
return A.o(v.z0(),$async$Eo)
case 4:case 3:if(v.c!=null)v.p_()
return A.t(null,w)}})
return A.u($async$Eo,w)},
z0(){var x=0,w=A.v(y.q),v,u=this,t
var $async$z0=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gMs()>=1){u.glJ().dZ()
x=1
break}x=3
return A.o(u.DP(),$async$z0)
case 3:t=e
if(u.c!=null)if(t)u.aCx()
else u.glJ().dZ()
case 1:return A.t(v,w)}})
return A.u($async$z0,w)},
DP(){var x=0,w=A.v(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$DP=A.w(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rI(r.w)
u=5
x=8
return A.o(r.a.f.$1(q),$async$DP)
case 8:p=e
if(p==null)p=!1
v=p
s=[1]
x=6
break
s.push(7)
x=6
break
case 5:s=[2]
case 6:u=2
r.x=!1
x=s.pop()
break
case 7:case 4:v=!0
x=1
break
case 1:return A.t(v,w)
case 2:return A.r(t.at(-1),w)}})
return A.u($async$DP,w)},
aCx(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rI(w.w)
w.a.w.$1(x)}}else{v=A.ch(null,u,null,null,w)
v.bH()
v.ct$.C(0,w.gaus())
v.bH()
u=v.cZ$
u.b=!0
u.a.push(new B.aUo(w))
w.f=v
v.cp()
w.aj(new B.aUp(w))}},
aut(){var x=this,w=x.f.gbq(),v=x.a
if(w===D.aE){w=v.w
if(w!=null)w.$1(x.rI(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.uL(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkS()?D.a0:D.ac
v=p.z
return new B.a6S(x,new A.bf(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.ut(new A.pY(x.c,p.as),w,o,!0)
if(x.x===C.up)return u
w=p.gkS()?p.gZI():o
v=p.gkS()?p.gZJ():o
t=p.gkS()?p.gZH():o
s=p.gkS()?o:p.gZI()
r=p.gkS()?o:p.gZJ()
q=p.gkS()?o:p.gZH()
return A.hv(x.ax,u,D.N,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.UX.prototype={
bQ(){this.cB()
this.cm()
this.eF()},
m(){var x=this,w=x.bm$
if(w!=null)w.N(x.ges())
x.bm$=null
x.aB()}}
B.UY.prototype={
an(){this.aG()
if(this.gp0())this.pv()},
eI(){var x=this.fC$
if(x!=null){x.aF()
x.dc()
this.fC$=null}this.lB()}}
B.a6S.prototype={
G(d){var x,w,v=this,u=null,t=u
switch(v.e.a){case 0:t=new A.ib(0,-1)
break
case 1:t=new A.ib(-1,0)
break}x=v.e
w=x===D.a0?Math.max(y.v.a(v.c).gp(),0):u
x=x===D.ac?Math.max(y.v.a(v.c).gp(),0):u
return A.pp(new A.cX(t,x,w,v.x,u),D.u,u)}}
var z=a.updateTypes(["~()","~(h6)","~(l5)","~(fJ)","a4<~>(hr)"])
B.aUm.prototype={
$0(){this.a.Pz()},
$S:0}
B.aUn.prototype={
$0(){this.a.Pz()},
$S:0}
B.aUo.prototype={
$1(d){return this.a.p_()},
$S:9}
B.aUp.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aB(w.a(new A.aB(w.a(x),new A.iM(C.a09),y.n.i("aB<aE.T>"))),new A.aw(1,0,v),v.i("aB<aE.T>"))},
$S:0};(function aliases(){var x=B.UX.prototype
x.ako=x.m
x=B.UY.prototype
x.akp=x.an})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.R_.prototype,"gZI","apl",1)
x(v,"gZJ","apm",2)
w(v,"gasN","asO",0)
x(v,"gZH","apk",3)
x(v,"gasL","Eo",4)
w(v,"gaus","aut",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eI,[B.kb,B.Rm])
v(B.Ia,A.R)
v(B.UX,A.U)
v(B.UY,B.UX)
v(B.R_,B.UY)
w(A.dw,[B.aUm,B.aUn,B.aUp])
v(B.aUo,A.cb)
v(B.a6S,A.vN)
x(B.UX,A.dR)
x(B.UY,A.nn)})()
A.bX(b.typeUniverse,JSON.parse('{"Ia":{"R":[],"c":[]},"R_":{"U":["Ia"]},"a6S":{"R":[],"c":[]}}'))
var y={v:A.G("bk<F>"),n:A.G("iM"),o:A.G("ed"),z:A.G("bq<U<R>>"),A:A.G("aw<j>"),g:A.G("aw<F>"),e:A.G("y"),q:A.G("~")};(function constants(){C.nV=new B.kb(1,"horizontal")
C.nW=new B.kb(2,"endToStart")
C.nX=new B.kb(3,"startToEnd")
C.X2=new B.kb(4,"up")
C.uo=new B.kb(5,"down")
C.up=new B.kb(6,"none")
C.a09=new A.dX(0.4,1,D.b_)
C.adF=new A.ad(D.cf,[],A.G("ad<kb,F>"))
C.rb=new B.Rm(0,"none")
C.auU=new B.Rm(1,"forward")
C.auV=new B.Rm(2,"reverse")})()};
(a=>{a["D420nl7kK0IWlgKR98vGysypCN4="]=a.current})($__dart_deferred_initializers__);