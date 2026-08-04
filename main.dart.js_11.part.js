((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b6P(d,e,f,g,h,i,j){return new B.Hg(e,f,i,g,j,d,h)},
k4:function k4(d,e){this.a=d
this.b=e},
Hg:function Hg(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
Qc:function Qc(d,e){this.a=d
this.b=e},
PQ:function PQ(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fn$=e
_.dn$=f
_.bn$=g
_.c=_.a=null},
aS1:function aS1(d){this.a=d},
aS2:function aS2(d){this.a=d},
aS3:function aS3(d){this.a=d},
aS4:function aS4(d){this.a=d},
TO:function TO(){},
TP:function TP(){},
a5z:function a5z(d,e,f,g){var _=this
_.e=d
_.w=e
_.c=f
_.a=g}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[47],B)
C=c[134]
B.k4.prototype={
K(){return"DismissDirection."+this.b}}
B.Hg.prototype={
a7(){var x=null
return new B.PQ(new A.bp(x,y.z),x,x,x)}}
B.Qc.prototype={
K(){return"_FlingGestureKind."+this.b}}
B.PQ.prototype={
al(){var x,w,v=this
v.ai3()
x=v.gly()
x.bF()
w=x.cN$
w.b=!0
w.a.push(v.gaq2())
x.bF()
x.cE$.B(0,v.gaq4())
v.NU()},
gly(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.ca(null,D.R,null,null,w)
w.d!==$&&A.aK()
w.d=x
v=x}return v},
goP(){var x=this.gly().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.gly().m()
var x=this.f
if(x!=null)x.m()
this.ai2()},
gkI(){var x=this.a.x
return x===C.nA||x===C.nB||x===C.nC},
rf(d){var x,w,v,u
if(d===0)return C.u1
if(this.gkI()){x=this.c.ak(y.o).w
$label0$0:{w=D.aB===x
if(w&&d<0){v=C.nC
break $label0$0}u=D.o===x
if(u&&d>0){v=C.nC
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.nB
break $label0$0}v=null}return v}return d>0?C.u0:C.W8},
gLe(){this.a.toString
C.acT.h(0,this.rf(this.w))
return 0.4},
ga_J(){var x=this.c.gv()
x.toString
return this.gkI()?x.a:x.b},
amP(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.gly()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga_J()*J.fq(v.w)
x.fv()}else{v.w=0
x.sp(0)}v.ah(new B.aS1(v))},
amQ(d){var x,w,v,u=this
if(u.y){x=u.gly().r
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
case 2:switch(u.c.ak(y.o).w.a){case 0:x=u.w+x
if(x>0)u.w=x
break
case 1:x=u.w+x
if(x<0)u.w=x
break}break
case 3:switch(u.c.ak(y.o).w.a){case 0:x=u.w+x
if(x<0)u.w=x
break
case 1:x=u.w+x
if(x>0)u.w=x
break}break
case 6:u.w=0
break}if(J.fq(w)!==J.fq(u.w))u.ah(new B.aS2(u))
x=u.gly()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga_J())},
aq5(){this.a.toString},
NU(){var x=this,w=J.fq(x.w),v=x.gly(),u=x.gkI(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.az(y.v.a(v),new A.as(D.h,u,t),t.i("az<aB.T>"))},
amB(d){var x,w,v,u,t=this
if(t.w===0)return C.qO
x=d.a
w=x.a
v=x.b
if(t.gkI()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.qO
u=t.rf(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.qO
u=t.rf(v)}if(u===t.rf(t.w))return C.atR
return C.atS},
amO(d){var x,w,v,u,t=this
if(t.y){x=t.gly().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.gly()
if(x.gbs()===D.ay){t.yh()
return}w=d.c
v=w.a
u=t.gkI()?v.a:v.b
switch(t.amB(w).a){case 1:if(t.gLe()>=1){x.dP()
break}t.w=J.fq(u)
x.A7(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fq(u)
x.A7(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbs()!==D.a4){w=x.x
w===$&&A.a()
if(w>t.gLe())x.cj()
else x.dP()}break}},
Dy(d){return this.aq3(d)},
aq3(d){var x=0,w=A.v(y.q),v=this
var $async$Dy=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.ay&&!v.y?2:3
break
case 2:x=4
return A.q(v.yh(),$async$Dy)
case 4:case 3:if(v.c!=null)v.oN()
return A.t(null,w)}})
return A.u($async$Dy,w)},
yh(){var x=0,w=A.v(y.q),v,u=this,t
var $async$yh=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gLe()>=1){u.gly().dP()
x=1
break}x=3
return A.q(u.D2(),$async$yh)
case 3:t=e
if(u.c!=null)if(t)u.azt()
else u.gly().dP()
case 1:return A.t(v,w)}})
return A.u($async$yh,w)},
D2(){var x=0,w=A.v(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$D2=A.w(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rf(r.w)
u=5
x=8
return A.q(r.a.f.$1(q),$async$D2)
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
return A.u($async$D2,w)},
azt(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rf(w.w)
w.a.w.$1(x)}}else{v=A.ca(null,u,null,null,w)
v.bF()
v.cE$.B(0,w.garK())
v.bF()
u=v.cN$
u.b=!0
u.a.push(new B.aS3(w))
w.f=v
v.cj()
w.ah(new B.aS4(w))}},
arL(){var x=this,w=x.f.gbs(),v=x.a
if(w===D.ay){w=v.w
if(w!=null)w.$1(x.rf(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.ui(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkI()?D.Y:D.ag
v=p.z
return new B.a5z(x,new A.ba(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.u8(new A.pF(x.c,p.as),w,o,!0)
if(x.x===C.u1)return u
w=p.gkI()?p.gXP():o
v=p.gkI()?p.gXQ():o
t=p.gkI()?p.gXO():o
s=p.gkI()?o:p.gXP()
r=p.gkI()?o:p.gXQ()
q=p.gkI()?o:p.gXO()
return A.fX(x.ax,u,D.M,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.TO.prototype={
bS(){this.ct()
this.cl()
this.es()},
m(){var x=this,w=x.bn$
if(w!=null)w.N(x.gek())
x.bn$=null
x.az()}}
B.TP.prototype={
al(){this.aE()
if(this.goP())this.pf()},
ew(){var x=this.fn$
if(x!=null){x.aw()
x.cU()
this.fn$=null}this.mq()}}
B.a5z.prototype={
G(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new A.i1(0,-1)
break
case 1:x=new A.i1(-1,0)
break
default:x=u}w=t===D.Y?Math.max(y.v.a(v.c).gp(),0):u
t=t===D.ag?Math.max(y.v.a(v.c).gp(),0):u
return A.p4(new A.cR(x,t,w,v.w,u),D.u,u)}}
var z=a.updateTypes(["~()","~(fT)","~(kR)","~(fs)","a3<~>(hk)"])
B.aS1.prototype={
$0(){this.a.NU()},
$S:0}
B.aS2.prototype={
$0(){this.a.NU()},
$S:0}
B.aS3.prototype={
$1(d){return this.a.oN()},
$S:9}
B.aS4.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.az(w.a(new A.az(w.a(x),new A.iH(C.a_4),y.n.i("az<aB.T>"))),new A.as(1,0,v),v.i("az<aB.T>"))},
$S:0};(function aliases(){var x=B.TO.prototype
x.ai2=x.m
x=B.TP.prototype
x.ai3=x.al})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.PQ.prototype,"gXP","amP",1)
x(v,"gXQ","amQ",2)
w(v,"gaq4","aq5",0)
x(v,"gXO","amO",3)
x(v,"gaq2","Dy",4)
w(v,"garK","arL",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eB,[B.k4,B.Qc])
v(B.Hg,A.S)
v(B.TO,A.U)
v(B.TP,B.TO)
v(B.PQ,B.TP)
w(A.ds,[B.aS1,B.aS2,B.aS4])
v(B.aS3,A.c8)
v(B.a5z,A.vm)
x(B.TO,A.dO)
x(B.TP,A.nc)})()
A.bV(b.typeUniverse,JSON.parse('{"Hg":{"S":[],"c":[]},"PQ":{"U":["Hg"]},"a5z":{"S":[],"c":[]}}'))
var y={v:A.E("bh<G>"),n:A.E("iH"),o:A.E("e6"),z:A.E("bp<U<S>>"),A:A.E("as<j>"),g:A.E("as<G>"),e:A.E("z"),q:A.E("~")};(function constants(){C.nA=new B.k4(1,"horizontal")
C.nB=new B.k4(2,"endToStart")
C.nC=new B.k4(3,"startToEnd")
C.W8=new B.k4(4,"up")
C.u0=new B.k4(5,"down")
C.u1=new B.k4(6,"none")
C.a_4=new A.dW(0.4,1,D.aZ)
C.acT=new A.a9(D.c8,[],A.E("a9<k4,G>"))
C.qO=new B.Qc(0,"none")
C.atR=new B.Qc(1,"forward")
C.atS=new B.Qc(2,"reverse")})()};
(a=>{a["p2g10nSPGUyLdVmXjYtdoUFy7q8="]=a.current})($__dart_deferred_initializers__);