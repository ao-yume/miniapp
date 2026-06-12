((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b65(d,e,f,g,h,i,j){return new B.He(e,f,i,g,j,d,h)},
k1:function k1(d,e){this.a=d
this.b=e},
He:function He(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
Q1:function Q1(d,e){this.a=d
this.b=e},
PG:function PG(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fw$=e
_.dw$=f
_.bj$=g
_.c=_.a=null},
aRO:function aRO(d){this.a=d},
aRP:function aRP(d){this.a=d},
aRQ:function aRQ(d){this.a=d},
aRR:function aRR(d){this.a=d},
TB:function TB(){},
TC:function TC(){},
a5v:function a5v(d,e,f,g){var _=this
_.e=d
_.x=e
_.c=f
_.a=g}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[32],B)
C=c[101]
B.k1.prototype={
L(){return"DismissDirection."+this.b}}
B.He.prototype={
a7(){var x=null
return new B.PG(new A.bn(x,y.z),x,x,x)}}
B.Q1.prototype={
L(){return"_FlingGestureKind."+this.b}}
B.PG.prototype={
ap(){var x,w,v=this
v.aje()
x=v.glC()
x.bF()
w=x.cU$
w.b=!0
w.a.push(v.gard())
x.bF()
x.cn$.C(0,v.garf())
v.OJ()},
glC(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.cb(null,D.R,null,null,w)
w.d!==$&&A.aI()
w.d=x
v=x}return v},
goR(){var x=this.glC().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
l(){this.glC().l()
var x=this.f
if(x!=null)x.l()
this.ajd()},
gkL(){var x=this.a.x
return x===C.nv||x===C.nw||x===C.nx},
rh(d){var x,w,v,u
if(d===0)return C.tY
if(this.gkL()){x=this.c.am(y.o).w
A:{w=D.ae===x
if(w&&d<0){v=C.nx
break A}u=D.j===x
if(u&&d>0){v=C.nx
break A}if(!w)v=u
else v=!0
if(v){v=C.nw
break A}v=null}return v}return d>0?C.tX:C.W2},
gLD(){this.a.toString
C.abY.h(0,this.rh(this.w))
return 0.4},
ga0K(){var x=this.c.gv()
x.toString
return this.gkL()?x.a:x.b},
anX(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glC()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga0K()*J.f9(v.w)
x.fE()}else{v.w=0
x.sp(0)}v.aj(new B.aRO(v))},
anY(d){var x,w,v,u=this
if(u.y){x=u.glC().r
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
break}if(J.f9(w)!==J.f9(u.w))u.aj(new B.aRP(u))
x=u.glC()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga0K())},
arg(){this.a.toString},
OJ(){var x=this,w=J.f9(x.w),v=x.glC(),u=x.gkL(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.aE(y.v.a(v),new A.ay(D.h,u,t),t.i("aE<aD.T>"))},
anK(d){var x,w,v,u,t=this
if(t.w===0)return C.qL
x=d.a
w=x.a
v=x.b
if(t.gkL()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.qL
u=t.rh(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.qL
u=t.rh(v)}if(u===t.rh(t.w))return C.asR
return C.asS},
anW(d){var x,w,v,u,t=this
if(t.y){x=t.glC().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glC()
if(x.gbr()===D.av){t.ys()
return}w=d.c
v=w.a
u=t.gkL()?v.a:v.b
switch(t.anK(w).a){case 1:if(t.gLD()>=1){x.dR()
break}t.w=J.f9(u)
x.An(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.f9(u)
x.An(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbr()!==D.a0){w=x.x
w===$&&A.a()
if(w>t.gLD())x.ck()
else x.dR()}break}},
DJ(d){return this.are(d)},
are(d){var x=0,w=A.w(y.q),v=this
var $async$DJ=A.x(function(e,f){if(e===1)return A.t(f,w)
for(;;)switch(x){case 0:x=d===D.av&&!v.y?2:3
break
case 2:x=4
return A.p(v.ys(),$async$DJ)
case 4:case 3:if(v.c!=null)v.oP()
return A.u(null,w)}})
return A.v($async$DJ,w)},
ys(){var x=0,w=A.w(y.q),v,u=this,t
var $async$ys=A.x(function(d,e){if(d===1)return A.t(e,w)
for(;;)switch(x){case 0:if(u.gLD()>=1){u.glC().dR()
x=1
break}x=3
return A.p(u.Da(),$async$ys)
case 3:t=e
if(u.c!=null)if(t)u.aAO()
else u.glC().dR()
case 1:return A.u(v,w)}})
return A.v($async$ys,w)},
Da(){var x=0,w=A.w(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$Da=A.x(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rh(r.w)
u=5
x=8
return A.p(r.a.f.$1(q),$async$Da)
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
case 1:return A.u(v,w)
case 2:return A.t(t.at(-1),w)}})
return A.v($async$Da,w)},
aAO(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rh(w.w)
w.a.w.$1(x)}}else{v=A.cb(null,u,null,null,w)
v.bF()
v.cn$.C(0,w.gasV())
v.bF()
u=v.cU$
u.b=!0
u.a.push(new B.aRQ(w))
w.f=v
v.ck()
w.aj(new B.aRR(w))}},
asW(){var x=this,w=x.f.gbr(),v=x.a
if(w===D.av){w=v.w
if(w!=null)w.$1(x.rh(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.uo(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkL()?D.X:D.a5
v=p.z
return new B.a5v(x,new A.bq(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.tz(new A.pg(x.c,p.as),w,o,!0)
if(x.x===C.tY)return u
w=p.gkL()?p.gYT():o
v=p.gkL()?p.gYU():o
t=p.gkL()?p.gYS():o
s=p.gkL()?o:p.gYT()
r=p.gkL()?o:p.gYU()
q=p.gkL()?o:p.gYS()
return A.hj(x.ax,u,D.I,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.TB.prototype={
bJ(){this.cs()
this.ci()
this.ey()},
l(){var x=this,w=x.bj$
if(w!=null)w.N(x.gel())
x.bj$=null
x.aD()}}
B.TC.prototype={
ap(){this.aI()
if(this.goR())this.ph()},
em(){var x=this.fw$
if(x!=null){x.aC()
x.d4()
this.fw$=null}this.lu()}}
B.a5v.prototype={
G(d){var x,w,v=this,u=null,t=u
switch(v.e.a){case 0:t=new A.hZ(0,-1)
break
case 1:t=new A.hZ(-1,0)
break}x=v.e
w=x===D.X?Math.max(y.v.a(v.c).gp(),0):u
x=x===D.a5?Math.max(y.v.a(v.c).gp(),0):u
return A.oH(new A.cU(t,x,w,v.x,u),D.v,u)}}
var z=a.updateTypes(["~()","~(fR)","~(kM)","~(fw)","a1<~>(hb)"])
B.aRO.prototype={
$0(){this.a.OJ()},
$S:0}
B.aRP.prototype={
$0(){this.a.OJ()},
$S:0}
B.aRQ.prototype={
$1(d){return this.a.oP()},
$S:8}
B.aRR.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aE(w.a(new A.aE(w.a(x),new A.iC(C.Zx),y.n.i("aE<aD.T>"))),new A.ay(1,0,v),v.i("aE<aD.T>"))},
$S:0};(function aliases(){var x=B.TB.prototype
x.ajd=x.l
x=B.TC.prototype
x.aje=x.ap})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.PG.prototype,"gYT","anX",1)
x(v,"gYU","anY",2)
w(v,"garf","arg",0)
x(v,"gYS","anW",3)
x(v,"gard","DJ",4)
w(v,"gasV","asW",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.f4,[B.k1,B.Q1])
v(B.He,A.S)
v(B.TB,A.U)
v(B.TC,B.TB)
v(B.PG,B.TC)
w(A.dV,[B.aRO,B.aRP,B.aRR])
v(B.aRQ,A.cv)
v(B.a5v,A.uU)
x(B.TB,A.dI)
x(B.TC,A.mV)})()
A.ci(b.typeUniverse,JSON.parse('{"He":{"S":[],"c":[]},"PG":{"U":["He"]},"a5v":{"S":[],"c":[]}}'))
var y={v:A.P("bI<K>"),n:A.P("iC"),o:A.P("eE"),z:A.P("bn<U<S>>"),A:A.P("ay<j>"),g:A.P("ay<K>"),e:A.P("B"),q:A.P("~")};(function constants(){C.nv=new B.k1(1,"horizontal")
C.nw=new B.k1(2,"endToStart")
C.nx=new B.k1(3,"startToEnd")
C.W2=new B.k1(4,"up")
C.tX=new B.k1(5,"down")
C.tY=new B.k1(6,"none")
C.nG=new A.az(12,0,12,0)
C.Zx=new A.dP(0.4,1,D.aW)
C.abY=new A.aa(D.c2,[],A.P("aa<k1,K>"))
C.qL=new B.Q1(0,"none")
C.asR=new B.Q1(1,"forward")
C.asS=new B.Q1(2,"reverse")})()};
(a=>{a["7DIDc2dE6/srDXAfmBK3uW7Umoo="]=a.current})($__dart_deferred_initializers__);