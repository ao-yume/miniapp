((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b7K(d,e,f,g,h,i,j){return new B.HJ(e,f,i,g,j,d,h)},
k4:function k4(d,e){this.a=d
this.b=e},
HJ:function HJ(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
QO:function QO(d,e){this.a=d
this.b=e},
Qr:function Qr(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fz$=e
_.du$=f
_.bp$=g
_.c=_.a=null},
aSR:function aSR(d){this.a=d},
aSS:function aSS(d){this.a=d},
aST:function aST(d){this.a=d},
aSU:function aSU(d){this.a=d},
Um:function Um(){},
Un:function Un(){},
a6c:function a6c(d,e,f,g){var _=this
_.e=d
_.w=e
_.c=f
_.a=g}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[47],B)
C=c[135]
B.k4.prototype={
J(){return"DismissDirection."+this.b}}
B.HJ.prototype={
a7(){var x=null
return new B.Qr(new A.bo(x,y.z),x,x,x)}}
B.QO.prototype={
J(){return"_FlingGestureKind."+this.b}}
B.Qr.prototype={
al(){var x,w,v=this
v.ajw()
x=v.glJ()
x.bG()
w=x.cX$
w.b=!0
w.a.push(v.garB())
x.bG()
x.cA$.B(0,v.garD())
v.P0()},
glJ(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.ce(null,D.P,null,null,w)
w.d!==$&&A.aG()
w.d=x
v=x}return v},
gp_(){var x=this.glJ().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.glJ().m()
var x=this.f
if(x!=null)x.m()
this.ajv()},
gkV(){var x=this.a.x
return x===C.nL||x===C.nM||x===C.nN},
rs(d){var x,w,v,u
if(d===0)return C.uc
if(this.gkV()){x=this.c.aj(y.o).w
A:{w=D.al===x
if(w&&d<0){v=C.nN
break A}u=D.n===x
if(u&&d>0){v=C.nN
break A}if(!w)v=u
else v=!0
if(v){v=C.nM
break A}v=null}return v}return d>0?C.ub:C.WE},
gLX(){this.a.toString
C.adN.h(0,this.rs(this.w))
return 0.4},
ga11(){var x=this.c.gA()
x.toString
return this.gkV()?x.a:x.b},
aof(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glJ()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga11()*J.f9(v.w)
x.fG()}else{v.w=0
x.sp(0)}v.ah(new B.aSR(v))},
aog(d){var x,w,v,u=this
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
case 2:switch(u.c.aj(y.o).w.a){case 0:x=u.w+x
if(x>0)u.w=x
break
case 1:x=u.w+x
if(x<0)u.w=x
break}break
case 3:switch(u.c.aj(y.o).w.a){case 0:x=u.w+x
if(x<0)u.w=x
break
case 1:x=u.w+x
if(x>0)u.w=x
break}break
case 6:u.w=0
break}if(J.f9(w)!==J.f9(u.w))u.ah(new B.aSS(u))
x=u.glJ()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga11())},
arE(){this.a.toString},
P0(){var x=this,w=J.f9(x.w),v=x.glJ(),u=x.gkV(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.aA(y.v.a(v),new A.aw(D.h,u,t),t.i("aA<aB.T>"))},
ao2(d){var x,w,v,u,t=this
if(t.w===0)return C.r0
x=d.a
w=x.a
v=x.b
if(t.gkV()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.r0
u=t.rs(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.r0
u=t.rs(v)}if(u===t.rs(t.w))return C.auT
return C.auU},
aoe(d){var x,w,v,u,t=this
if(t.y){x=t.glJ().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glJ()
if(x.gbr()===D.aC){t.yD()
return}w=d.c
v=w.a
u=t.gkV()?v.a:v.b
switch(t.ao2(w).a){case 1:if(t.gLX()>=1){x.dR()
break}t.w=J.f9(u)
x.Au(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.f9(u)
x.Au(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbr()!==D.a4){w=x.x
w===$&&A.a()
if(w>t.gLX())x.cg()
else x.dR()}break}},
DZ(d){return this.arC(d)},
arC(d){var x=0,w=A.v(y.q),v=this
var $async$DZ=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.aC&&!v.y?2:3
break
case 2:x=4
return A.o(v.yD(),$async$DZ)
case 4:case 3:if(v.c!=null)v.oY()
return A.t(null,w)}})
return A.u($async$DZ,w)},
yD(){var x=0,w=A.v(y.q),v,u=this,t
var $async$yD=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gLX()>=1){u.glJ().dR()
x=1
break}x=3
return A.o(u.Dq(),$async$yD)
case 3:t=e
if(u.c!=null)if(t)u.aB6()
else u.glJ().dR()
case 1:return A.t(v,w)}})
return A.u($async$yD,w)},
Dq(){var x=0,w=A.v(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$Dq=A.w(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rs(r.w)
u=5
x=8
return A.o(r.a.f.$1(q),$async$Dq)
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
return A.u($async$Dq,w)},
aB6(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rs(w.w)
w.a.w.$1(x)}}else{v=A.ce(null,u,null,null,w)
v.bG()
v.cA$.B(0,w.gath())
v.bG()
u=v.cX$
u.b=!0
u.a.push(new B.aST(w))
w.f=v
v.cg()
w.ah(new B.aSU(w))}},
ati(){var x=this,w=x.f.gbr(),v=x.a
if(w===D.aC){w=v.w
if(w!=null)w.$1(x.rs(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.uz(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkV()?D.Y:D.a9
v=p.z
return new B.a6c(x,new A.b9(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.ub(new A.pM(x.c,p.as),w,o,!0)
if(x.x===C.uc)return u
w=p.gkV()?p.gZ7():o
v=p.gkV()?p.gZ8():o
t=p.gkV()?p.gZ6():o
s=p.gkV()?o:p.gZ7()
r=p.gkV()?o:p.gZ8()
q=p.gkV()?o:p.gZ6()
return A.hp(x.ax,u,D.M,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.Um.prototype={
bF(){this.cq()
this.cf()
this.ez()},
m(){var x=this,w=x.bp$
if(w!=null)w.O(x.gep())
x.bp$=null
x.az()}}
B.Un.prototype={
al(){this.aE()
if(this.gp_())this.pr()},
eq(){var x=this.fz$
if(x!=null){x.aD()
x.d2()
this.fz$=null}this.lD()}}
B.a6c.prototype={
G(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new A.i2(0,-1)
break
case 1:x=new A.i2(-1,0)
break
default:x=u}w=t===D.Y?Math.max(y.v.a(v.c).gp(),0):u
t=t===D.a9?Math.max(y.v.a(v.c).gp(),0):u
return A.pb(new A.cT(x,t,w,v.w,u),D.u,u)}}
var z=a.updateTypes(["~()","~(fX)","~(kU)","~(fy)","a2<~>(hk)"])
B.aSR.prototype={
$0(){this.a.P0()},
$S:0}
B.aSS.prototype={
$0(){this.a.P0()},
$S:0}
B.aST.prototype={
$1(d){return this.a.oY()},
$S:9}
B.aSU.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gA()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aA(w.a(new A.aA(w.a(x),new A.iG(C.a_G),y.n.i("aA<aB.T>"))),new A.aw(1,0,v),v.i("aA<aB.T>"))},
$S:0};(function aliases(){var x=B.Um.prototype
x.ajv=x.m
x=B.Un.prototype
x.ajw=x.al})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Qr.prototype,"gZ7","aof",1)
x(v,"gZ8","aog",2)
w(v,"garD","arE",0)
x(v,"gZ6","aoe",3)
x(v,"garB","DZ",4)
w(v,"gath","ati",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eC,[B.k4,B.QO])
v(B.HJ,A.R)
v(B.Um,A.U)
v(B.Un,B.Um)
v(B.Qr,B.Un)
w(A.dt,[B.aSR,B.aSS,B.aSU])
v(B.aST,A.cb)
v(B.a6c,A.vt)
x(B.Um,A.dP)
x(B.Un,A.ne)})()
A.bW(b.typeUniverse,JSON.parse('{"HJ":{"R":[],"c":[]},"Qr":{"U":["HJ"]},"a6c":{"R":[],"c":[]}}'))
var y={v:A.G("bj<I>"),n:A.G("iG"),o:A.G("e7"),z:A.G("bo<U<R>>"),A:A.G("aw<j>"),g:A.G("aw<I>"),e:A.G("z"),q:A.G("~")};(function constants(){C.nL=new B.k4(1,"horizontal")
C.nM=new B.k4(2,"endToStart")
C.nN=new B.k4(3,"startToEnd")
C.WE=new B.k4(4,"up")
C.ub=new B.k4(5,"down")
C.uc=new B.k4(6,"none")
C.a_G=new A.dV(0.4,1,D.b1)
C.adN=new A.ab(D.cb,[],A.G("ab<k4,I>"))
C.r0=new B.QO(0,"none")
C.auT=new B.QO(1,"forward")
C.auU=new B.QO(2,"reverse")})()};
(a=>{a["95Ilc2sUUuo4ZY5e9sd9RjVGShk="]=a.current})($__dart_deferred_initializers__);