((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b9z(d,e,f,g,h,i,j){return new B.J_(e,f,i,g,j,d,h)},
kb:function kb(d,e){this.a=d
this.b=e},
J_:function J_(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
Rc:function Rc(d,e){this.a=d
this.b=e},
QM:function QM(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fB$=e
_.dA$=f
_.bm$=g
_.c=_.a=null},
aUh:function aUh(d){this.a=d},
aUi:function aUi(d){this.a=d},
aUj:function aUj(d){this.a=d},
aUk:function aUk(d){this.a=d},
UV:function UV(){},
UW:function UW(){},
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
B.J_.prototype={
a6(){var x=null
return new B.QM(new A.bq(x,y.z),x,x,x)}}
B.Rc.prototype={
K(){return"_FlingGestureKind."+this.b}}
B.QM.prototype={
an(){var x,w,v=this
v.ajI()
x=v.glA()
x.bH()
w=x.d_$
w.b=!0
w.a.push(v.gas4())
x.bH()
x.cr$.C(0,v.gas6())
v.P2()},
glA(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.cj(null,D.M,null,null,w)
w.d!==$&&A.aH()
w.d=x
v=x}return v},
goL(){var x=this.glA().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.glA().m()
var x=this.f
if(x!=null)x.m()
this.ajH()},
gkI(){var x=this.a.x
return x===C.nV||x===C.nW||x===C.nX},
rm(d){var x,w,v,u
if(d===0)return C.up
if(this.gkI()){x=this.c.am(y.o).w
A:{w=D.an===x
if(w&&d<0){v=C.nX
break A}u=D.m===x
if(u&&d>0){v=C.nX
break A}if(!w)v=u
else v=!0
if(v){v=C.nW
break A}v=null}return v}return d>0?C.uo:C.X5},
gLW(){this.a.toString
C.adT.h(0,this.rm(this.w))
return 0.4},
ga19(){var x=this.c.gv()
x.toString
return this.gkI()?x.a:x.b},
aoE(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glA()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga19()*J.fh(v.w)
x.fI()}else{v.w=0
x.sp(0)}v.aj(new B.aUh(v))},
aoF(d){var x,w,v,u=this
if(u.y){x=u.glA().r
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
case 2:switch(u.c.am(y.o).w.a){case 0:x=u.w+x
if(x>0)u.w=x
break
case 1:x=u.w+x
if(x<0)u.w=x
break}break
case 3:switch(u.c.am(y.o).w.a){case 0:x=u.w+x
if(x<0)u.w=x
break
case 1:x=u.w+x
if(x>0)u.w=x
break}break
case 6:u.w=0
break}if(J.fh(w)!==J.fh(u.w))u.aj(new B.aUi(u))
x=u.glA()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga19())},
as7(){this.a.toString},
P2(){var x=this,w=J.fh(x.w),v=x.glA(),u=x.gkI(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.ay(y.v.a(v),new A.au(D.h,u,t),t.i("ay<aC.T>"))},
aos(d){var x,w,v,u,t=this
if(t.w===0)return C.rc
x=d.a
w=x.a
v=x.b
if(t.gkI()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.rc
u=t.rm(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.rc
u=t.rm(v)}if(u===t.rm(t.w))return C.av2
return C.av3},
aoD(d){var x,w,v,u,t=this
if(t.y){x=t.glA().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glA()
if(x.gbq()===D.aE){t.yA()
return}w=d.c
v=w.a
u=t.gkI()?v.a:v.b
switch(t.aos(w).a){case 1:if(t.gLW()>=1){x.dZ()
break}t.w=J.fh(u)
x.Aq(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fh(u)
x.Aq(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbq()!==D.a8){w=x.x
w===$&&A.a()
if(w>t.gLW())x.cC()
else x.dZ()}break}},
DU(d){return this.as5(d)},
as5(d){var x=0,w=A.v(y.q),v=this
var $async$DU=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.aE&&!v.y?2:3
break
case 2:x=4
return A.o(v.yA(),$async$DU)
case 4:case 3:if(v.c!=null)v.oK()
return A.t(null,w)}})
return A.u($async$DU,w)},
yA(){var x=0,w=A.v(y.q),v,u=this,t
var $async$yA=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gLW()>=1){u.glA().dZ()
x=1
break}x=3
return A.o(u.Dk(),$async$yA)
case 3:t=e
if(u.c!=null)if(t)u.aBW()
else u.glA().dZ()
case 1:return A.t(v,w)}})
return A.u($async$yA,w)},
Dk(){var x=0,w=A.v(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$Dk=A.w(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rm(r.w)
u=5
x=8
return A.o(r.a.f.$1(q),$async$Dk)
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
return A.u($async$Dk,w)},
aBW(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rm(w.w)
w.a.w.$1(x)}}else{v=A.cj(null,u,null,null,w)
v.bH()
v.cr$.C(0,w.gatN())
v.bH()
u=v.d_$
u.b=!0
u.a.push(new B.aUj(w))
w.f=v
v.cC()
w.aj(new B.aUk(w))}},
atO(){var x=this,w=x.f.gbq(),v=x.a
if(w===D.aE){w=v.w
if(w!=null)w.$1(x.rm(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.uo(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkI()?D.a1:D.ag
v=p.z
return new B.a6S(x,new A.b7(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.uw(new A.q0(x.c,p.as),w,o,!0)
if(x.x===C.up)return u
w=p.gkI()?p.gZa():o
v=p.gkI()?p.gZb():o
t=p.gkI()?p.gZ9():o
s=p.gkI()?o:p.gZa()
r=p.gkI()?o:p.gZb()
q=p.gkI()?o:p.gZ9()
return A.hu(x.ax,u,D.P,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.UV.prototype={
bQ(){this.cA()
this.cm()
this.eE()},
m(){var x=this,w=x.bm$
if(w!=null)w.N(x.ger())
x.bm$=null
x.aB()}}
B.UW.prototype={
an(){this.aH()
if(this.goL())this.pd()},
eH(){var x=this.fB$
if(x!=null){x.aG()
x.dc()
this.fB$=null}this.ls()}}
B.a6S.prototype={
G(d){var x,w,v=this,u=null,t=u
switch(v.e.a){case 0:t=new A.i9(0,-1)
break
case 1:t=new A.i9(-1,0)
break}x=v.e
w=x===D.a1?Math.max(y.v.a(v.c).gp(),0):u
x=x===D.ag?Math.max(y.v.a(v.c).gp(),0):u
return A.pr(new A.cX(t,x,w,v.x,u),D.u,u)}}
var z=a.updateTypes(["~()","~(h6)","~(l8)","~(fK)","a3<~>(fI)"])
B.aUh.prototype={
$0(){this.a.P2()},
$S:0}
B.aUi.prototype={
$0(){this.a.P2()},
$S:0}
B.aUj.prototype={
$1(d){return this.a.oK()},
$S:10}
B.aUk.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.ay(w.a(new A.ay(w.a(x),new A.iL(C.a0l),y.n.i("ay<aC.T>"))),new A.au(1,0,v),v.i("ay<aC.T>"))},
$S:0};(function aliases(){var x=B.UV.prototype
x.ajH=x.m
x=B.UW.prototype
x.ajI=x.an})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.QM.prototype,"gZa","aoE",1)
x(v,"gZb","aoF",2)
w(v,"gas6","as7",0)
x(v,"gZ9","aoD",3)
x(v,"gas4","DU",4)
w(v,"gatN","atO",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eI,[B.kb,B.Rc])
v(B.J_,A.R)
v(B.UV,A.U)
v(B.UW,B.UV)
v(B.QM,B.UW)
w(A.dz,[B.aUh,B.aUi,B.aUk])
v(B.aUj,A.cf)
v(B.a6S,A.vO)
x(B.UV,A.dS)
x(B.UW,A.nn)})()
A.bX(b.typeUniverse,JSON.parse('{"J_":{"R":[],"c":[]},"QM":{"U":["J_"]},"a6S":{"R":[],"c":[]}}'))
var y={v:A.F("b9<D>"),n:A.F("iL"),o:A.F("ee"),z:A.F("bq<U<R>>"),A:A.F("au<j>"),g:A.F("au<D>"),e:A.F("y"),q:A.F("~")};(function constants(){C.nV=new B.kb(1,"horizontal")
C.nW=new B.kb(2,"endToStart")
C.nX=new B.kb(3,"startToEnd")
C.X5=new B.kb(4,"up")
C.uo=new B.kb(5,"down")
C.up=new B.kb(6,"none")
C.a0l=new A.dY(0.4,1,D.b0)
C.adT=new A.ad(D.ch,[],A.F("ad<kb,D>"))
C.rc=new B.Rc(0,"none")
C.av2=new B.Rc(1,"forward")
C.av3=new B.Rc(2,"reverse")})()};
(a=>{a["8XIzesCuURaBPBYZxXS2v7/1NhQ="]=a.current})($__dart_deferred_initializers__);