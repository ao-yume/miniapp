((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b6M(d,e,f,g,h,i,j){return new B.Hi(e,f,i,g,j,d,h)},
k4:function k4(d,e){this.a=d
this.b=e},
Hi:function Hi(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
Qe:function Qe(d,e){this.a=d
this.b=e},
PS:function PS(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fn$=e
_.dq$=f
_.bn$=g
_.c=_.a=null},
aS_:function aS_(d){this.a=d},
aS0:function aS0(d){this.a=d},
aS1:function aS1(d){this.a=d},
aS2:function aS2(d){this.a=d},
TQ:function TQ(){},
TR:function TR(){},
a5y:function a5y(d,e,f,g){var _=this
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
B.Hi.prototype={
a7(){var x=null
return new B.PS(new A.bp(x,y.z),x,x,x)}}
B.Qe.prototype={
K(){return"_FlingGestureKind."+this.b}}
B.PS.prototype={
al(){var x,w,v=this
v.ai7()
x=v.glx()
x.bF()
w=x.cN$
w.b=!0
w.a.push(v.gaq7())
x.bF()
x.cE$.B(0,v.gaq9())
v.NY()},
glx(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.ca(null,D.R,null,null,w)
w.d!==$&&A.aK()
w.d=x
v=x}return v},
goR(){var x=this.glx().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.glx().m()
var x=this.f
if(x!=null)x.m()
this.ai6()},
gkI(){var x=this.a.x
return x===C.nA||x===C.nB||x===C.nC},
rg(d){var x,w,v,u
if(d===0)return C.u2
if(this.gkI()){x=this.c.ak(y.o).w
$label0$0:{w=D.aB===x
if(w&&d<0){v=C.nC
break $label0$0}u=D.o===x
if(u&&d>0){v=C.nC
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.nB
break $label0$0}v=null}return v}return d>0?C.u1:C.W7},
gLi(){this.a.toString
C.acT.h(0,this.rg(this.w))
return 0.4},
ga_N(){var x=this.c.gv()
x.toString
return this.gkI()?x.a:x.b},
amT(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glx()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga_N()*J.fq(v.w)
x.fv()}else{v.w=0
x.sp(0)}v.ah(new B.aS_(v))},
amU(d){var x,w,v,u=this
if(u.y){x=u.glx().r
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
break}if(J.fq(w)!==J.fq(u.w))u.ah(new B.aS0(u))
x=u.glx()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga_N())},
aqa(){this.a.toString},
NY(){var x=this,w=J.fq(x.w),v=x.glx(),u=x.gkI(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.az(y.v.a(v),new A.as(D.h,u,t),t.i("az<aB.T>"))},
amF(d){var x,w,v,u,t=this
if(t.w===0)return C.qP
x=d.a
w=x.a
v=x.b
if(t.gkI()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.qP
u=t.rg(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.qP
u=t.rg(v)}if(u===t.rg(t.w))return C.atR
return C.atS},
amS(d){var x,w,v,u,t=this
if(t.y){x=t.glx().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glx()
if(x.gbs()===D.ay){t.ym()
return}w=d.c
v=w.a
u=t.gkI()?v.a:v.b
switch(t.amF(w).a){case 1:if(t.gLi()>=1){x.dP()
break}t.w=J.fq(u)
x.Ab(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fq(u)
x.Ab(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbs()!==D.a4){w=x.x
w===$&&A.a()
if(w>t.gLi())x.cj()
else x.dP()}break}},
DD(d){return this.aq8(d)},
aq8(d){var x=0,w=A.v(y.q),v=this
var $async$DD=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.ay&&!v.y?2:3
break
case 2:x=4
return A.p(v.ym(),$async$DD)
case 4:case 3:if(v.c!=null)v.oP()
return A.t(null,w)}})
return A.u($async$DD,w)},
ym(){var x=0,w=A.v(y.q),v,u=this,t
var $async$ym=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gLi()>=1){u.glx().dP()
x=1
break}x=3
return A.p(u.D6(),$async$ym)
case 3:t=e
if(u.c!=null)if(t)u.azy()
else u.glx().dP()
case 1:return A.t(v,w)}})
return A.u($async$ym,w)},
D6(){var x=0,w=A.v(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$D6=A.w(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rg(r.w)
u=5
x=8
return A.p(r.a.f.$1(q),$async$D6)
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
return A.u($async$D6,w)},
azy(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rg(w.w)
w.a.w.$1(x)}}else{v=A.ca(null,u,null,null,w)
v.bF()
v.cE$.B(0,w.garP())
v.bF()
u=v.cN$
u.b=!0
u.a.push(new B.aS1(w))
w.f=v
v.cj()
w.ah(new B.aS2(w))}},
arQ(){var x=this,w=x.f.gbs(),v=x.a
if(w===D.ay){w=v.w
if(w!=null)w.$1(x.rg(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.um(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkI()?D.Y:D.ag
v=p.z
return new B.a5y(x,new A.ba(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.u8(new A.pH(x.c,p.as),w,o,!0)
if(x.x===C.u2)return u
w=p.gkI()?p.gXU():o
v=p.gkI()?p.gXV():o
t=p.gkI()?p.gXT():o
s=p.gkI()?o:p.gXU()
r=p.gkI()?o:p.gXV()
q=p.gkI()?o:p.gXT()
return A.fW(x.ax,u,D.M,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.TQ.prototype={
bS(){this.ct()
this.cl()
this.es()},
m(){var x=this,w=x.bn$
if(w!=null)w.N(x.gek())
x.bn$=null
x.az()}}
B.TR.prototype={
al(){this.aE()
if(this.goR())this.pg()},
ew(){var x=this.fn$
if(x!=null){x.aw()
x.cU()
this.fn$=null}this.ms()}}
B.a5y.prototype={
G(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new A.i0(0,-1)
break
case 1:x=new A.i0(-1,0)
break
default:x=u}w=t===D.Y?Math.max(y.v.a(v.c).gp(),0):u
t=t===D.ag?Math.max(y.v.a(v.c).gp(),0):u
return A.p6(new A.cR(x,t,w,v.w,u),D.u,u)}}
var z=a.updateTypes(["~()","~(fS)","~(kR)","~(fs)","a3<~>(hk)"])
B.aS_.prototype={
$0(){this.a.NY()},
$S:0}
B.aS0.prototype={
$0(){this.a.NY()},
$S:0}
B.aS1.prototype={
$1(d){return this.a.oP()},
$S:9}
B.aS2.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.az(w.a(new A.az(w.a(x),new A.iI(C.a_3),y.n.i("az<aB.T>"))),new A.as(1,0,v),v.i("az<aB.T>"))},
$S:0};(function aliases(){var x=B.TQ.prototype
x.ai6=x.m
x=B.TR.prototype
x.ai7=x.al})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.PS.prototype,"gXU","amT",1)
x(v,"gXV","amU",2)
w(v,"gaq9","aqa",0)
x(v,"gXT","amS",3)
x(v,"gaq7","DD",4)
w(v,"garP","arQ",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eB,[B.k4,B.Qe])
v(B.Hi,A.S)
v(B.TQ,A.U)
v(B.TR,B.TQ)
v(B.PS,B.TR)
w(A.ds,[B.aS_,B.aS0,B.aS2])
v(B.aS1,A.c8)
v(B.a5y,A.vp)
x(B.TQ,A.dO)
x(B.TR,A.nd)})()
A.bV(b.typeUniverse,JSON.parse('{"Hi":{"S":[],"c":[]},"PS":{"U":["Hi"]},"a5y":{"S":[],"c":[]}}'))
var y={v:A.E("bh<G>"),n:A.E("iI"),o:A.E("e6"),z:A.E("bp<U<S>>"),A:A.E("as<j>"),g:A.E("as<G>"),e:A.E("z"),q:A.E("~")};(function constants(){C.nA=new B.k4(1,"horizontal")
C.nB=new B.k4(2,"endToStart")
C.nC=new B.k4(3,"startToEnd")
C.W7=new B.k4(4,"up")
C.u1=new B.k4(5,"down")
C.u2=new B.k4(6,"none")
C.a_3=new A.dW(0.4,1,D.aZ)
C.acT=new A.a9(D.c8,[],A.E("a9<k4,G>"))
C.qP=new B.Qe(0,"none")
C.atR=new B.Qe(1,"forward")
C.atS=new B.Qe(2,"reverse")})()};
(a=>{a["KPIrMtWoaMOc8tT9SMgwNh64E58="]=a.current})($__dart_deferred_initializers__);