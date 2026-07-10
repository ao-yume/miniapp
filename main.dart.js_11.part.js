((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b8v(d,e,f,g,h,i,j){return new B.HK(e,f,i,g,j,d,h)},
kc:function kc(d,e){this.a=d
this.b=e},
HK:function HK(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
QP:function QP(d,e){this.a=d
this.b=e},
Qt:function Qt(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fB$=e
_.dB$=f
_.bl$=g
_.c=_.a=null},
aTk:function aTk(d){this.a=d},
aTl:function aTl(d){this.a=d},
aTm:function aTm(d){this.a=d},
aTn:function aTn(d){this.a=d},
Uo:function Uo(){},
Up:function Up(){},
a6o:function a6o(d,e,f,g){var _=this
_.e=d
_.x=e
_.c=f
_.a=g}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[47],B)
C=c[135]
B.kc.prototype={
L(){return"DismissDirection."+this.b}}
B.HK.prototype={
a6(){var x=null
return new B.Qt(new A.bo(x,y.z),x,x,x)}}
B.QP.prototype={
L(){return"_FlingGestureKind."+this.b}}
B.Qt.prototype={
ap(){var x,w,v=this
v.ajJ()
x=v.glK()
x.bF()
w=x.cW$
w.b=!0
w.a.push(v.garQ())
x.bF()
x.cn$.C(0,v.garS())
v.P4()},
glK(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.cf(null,D.M,null,null,w)
w.d!==$&&A.aI()
w.d=x
v=x}return v},
gp6(){var x=this.glK().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
l(){this.glK().l()
var x=this.f
if(x!=null)x.l()
this.ajI()},
gkU(){var x=this.a.x
return x===C.nP||x===C.nQ||x===C.nR},
rv(d){var x,w,v,u
if(d===0)return C.uj
if(this.gkU()){x=this.c.al(y.o).w
A:{w=D.al===x
if(w&&d<0){v=C.nR
break A}u=D.k===x
if(u&&d>0){v=C.nR
break A}if(!w)v=u
else v=!0
if(v){v=C.nQ
break A}v=null}return v}return d>0?C.ui:C.Ws},
gM0(){this.a.toString
C.acI.h(0,this.rv(this.w))
return 0.4},
ga16(){var x=this.c.gv()
x.toString
return this.gkU()?x.a:x.b},
aoy(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glK()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga16()*J.fd(v.w)
x.fI()}else{v.w=0
x.sp(0)}v.ak(new B.aTk(v))},
aoz(d){var x,w,v,u=this
if(u.y){x=u.glK().r
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
break}if(J.fd(w)!==J.fd(u.w))u.ak(new B.aTl(u))
x=u.glK()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga16())},
arT(){this.a.toString},
P4(){var x=this,w=J.fd(x.w),v=x.glK(),u=x.gkU(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.aA(y.v.a(v),new A.aw(D.h,u,t),t.i("aA<aD.T>"))},
aol(d){var x,w,v,u,t=this
if(t.w===0)return C.r2
x=d.a
w=x.a
v=x.b
if(t.gkU()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.r2
u=t.rv(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.r2
u=t.rv(v)}if(u===t.rv(t.w))return C.atO
return C.atP},
aox(d){var x,w,v,u,t=this
if(t.y){x=t.glK().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glK()
if(x.gbr()===D.aD){t.yM()
return}w=d.c
v=w.a
u=t.gkU()?v.a:v.b
switch(t.aol(w).a){case 1:if(t.gM0()>=1){x.dV()
break}t.w=J.fd(u)
x.AA(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fd(u)
x.AA(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbr()!==D.a3){w=x.x
w===$&&A.a()
if(w>t.gM0())x.ck()
else x.dV()}break}},
E0(d){return this.arR(d)},
arR(d){var x=0,w=A.v(y.q),v=this
var $async$E0=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.aD&&!v.y?2:3
break
case 2:x=4
return A.o(v.yM(),$async$E0)
case 4:case 3:if(v.c!=null)v.p0()
return A.t(null,w)}})
return A.u($async$E0,w)},
yM(){var x=0,w=A.v(y.q),v,u=this,t
var $async$yM=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gM0()>=1){u.glK().dV()
x=1
break}x=3
return A.o(u.Ds(),$async$yM)
case 3:t=e
if(u.c!=null)if(t)u.aBq()
else u.glK().dV()
case 1:return A.t(v,w)}})
return A.u($async$yM,w)},
Ds(){var x=0,w=A.v(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$Ds=A.w(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rv(r.w)
u=5
x=8
return A.o(r.a.f.$1(q),$async$Ds)
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
return A.u($async$Ds,w)},
aBq(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rv(w.w)
w.a.w.$1(x)}}else{v=A.cf(null,u,null,null,w)
v.bF()
v.cn$.C(0,w.gatx())
v.bF()
u=v.cW$
u.b=!0
u.a.push(new B.aTm(w))
w.f=v
v.ck()
w.ak(new B.aTn(w))}},
aty(){var x=this,w=x.f.gbr(),v=x.a
if(w===D.aD){w=v.w
if(w!=null)w.$1(x.rv(x.w))}else v.toString},
F(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.uB(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkU()?D.Z:D.aa
v=p.z
return new B.a6o(x,new A.bd(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.u9(new A.pz(x.c,p.as),w,o,!0)
if(x.x===C.uj)return u
w=p.gkU()?p.gZe():o
v=p.gkU()?p.gZf():o
t=p.gkU()?p.gZd():o
s=p.gkU()?o:p.gZe()
r=p.gkU()?o:p.gZf()
q=p.gkU()?o:p.gZd()
return A.hq(x.ax,u,D.K,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.Uo.prototype={
bJ(){this.cs()
this.ci()
this.eC()},
l(){var x=this,w=x.bl$
if(w!=null)w.N(x.geq())
x.bl$=null
x.az()}}
B.Up.prototype={
ap(){this.aG()
if(this.gp6())this.pt()},
er(){var x=this.fB$
if(x!=null){x.aD()
x.d6()
this.fB$=null}this.lD()}}
B.a6o.prototype={
F(d){var x,w,v=this,u=null,t=u
switch(v.e.a){case 0:t=new A.i4(0,-1)
break
case 1:t=new A.i4(-1,0)
break}x=v.e
w=x===D.Z?Math.max(y.v.a(v.c).gp(),0):u
x=x===D.aa?Math.max(y.v.a(v.c).gp(),0):u
return A.p1(new A.d8(t,x,w,v.x,u),D.u,u)}}
var z=a.updateTypes(["~()","~(h0)","~(kY)","~(fE)","a2<~>(hk)"])
B.aTk.prototype={
$0(){this.a.P4()},
$S:0}
B.aTl.prototype={
$0(){this.a.P4()},
$S:0}
B.aTm.prototype={
$1(d){return this.a.p0()},
$S:10}
B.aTn.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aA(w.a(new A.aA(w.a(x),new A.iK(C.a_g),y.n.i("aA<aD.T>"))),new A.aw(1,0,v),v.i("aA<aD.T>"))},
$S:0};(function aliases(){var x=B.Uo.prototype
x.ajI=x.l
x=B.Up.prototype
x.ajJ=x.ap})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Qt.prototype,"gZe","aoy",1)
x(v,"gZf","aoz",2)
w(v,"garS","arT",0)
x(v,"gZd","aox",3)
x(v,"garQ","E0",4)
w(v,"gatx","aty",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eD,[B.kc,B.QP])
v(B.HK,A.S)
v(B.Uo,A.U)
v(B.Up,B.Uo)
v(B.Qt,B.Up)
w(A.du,[B.aTk,B.aTl,B.aTn])
v(B.aTm,A.cc)
v(B.a6o,A.vr)
x(B.Uo,A.dO)
x(B.Up,A.n8)})()
A.bW(b.typeUniverse,JSON.parse('{"HK":{"S":[],"c":[]},"Qt":{"U":["HK"]},"a6o":{"S":[],"c":[]}}'))
var y={v:A.F("bj<H>"),n:A.F("iK"),o:A.F("ej"),z:A.F("bo<U<S>>"),A:A.F("aw<j>"),g:A.F("aw<H>"),e:A.F("z"),q:A.F("~")};(function constants(){C.nP=new B.kc(1,"horizontal")
C.nQ=new B.kc(2,"endToStart")
C.nR=new B.kc(3,"startToEnd")
C.Ws=new B.kc(4,"up")
C.ui=new B.kc(5,"down")
C.uj=new B.kc(6,"none")
C.a_g=new A.dT(0.4,1,D.aZ)
C.acI=new A.ab(D.cd,[],A.F("ab<kc,H>"))
C.r2=new B.QP(0,"none")
C.atO=new B.QP(1,"forward")
C.atP=new B.QP(2,"reverse")})()};
(a=>{a["P8T01ISkH10wd76MwbklXeQ4Z6k="]=a.current})($__dart_deferred_initializers__);