((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b3K(d,e,f,g,h,i,j){return new B.GE(e,f,i,g,j,d,h)},
jW:function jW(d,e){this.a=d
this.b=e},
GE:function GE(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
Pj:function Pj(d,e){this.a=d
this.b=e},
OX:function OX(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fj$=e
_.dm$=f
_.bk$=g
_.c=_.a=null},
aQ4:function aQ4(d){this.a=d},
aQ5:function aQ5(d){this.a=d},
aQ6:function aQ6(d){this.a=d},
aQ7:function aQ7(d){this.a=d},
SV:function SV(){},
SW:function SW(){},
a4D:function a4D(d,e,f,g){var _=this
_.e=d
_.w=e
_.c=f
_.a=g}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[34],B)
C=c[110]
B.jW.prototype={
K(){return"DismissDirection."+this.b}}
B.GE.prototype={
a7(){var x=null
return new B.OX(new A.bp(x,y.z),x,x,x)}}
B.Pj.prototype={
K(){return"_FlingGestureKind."+this.b}}
B.OX.prototype={
am(){var x,w,v=this
v.ahx()
x=v.glq()
x.bF()
w=x.cK$
w.b=!0
w.a.push(v.gapj())
x.bF()
x.cA$.B(0,v.gapl())
v.Ns()},
glq(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.c5(null,D.R,null,null,w)
w.d!==$&&A.aK()
w.d=x
v=x}return v},
goE(){var x=this.glq().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.glq().m()
var x=this.f
if(x!=null)x.m()
this.ahw()},
gkx(){var x=this.a.x
return x===C.nc||x===C.nd||x===C.ne},
r0(d){var x,w,v,u
if(d===0)return C.tI
if(this.gkx()){x=this.c.ak(y.o).w
$label0$0:{w=D.au===x
if(w&&d<0){v=C.ne
break $label0$0}u=D.k===x
if(u&&d>0){v=C.ne
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.nd
break $label0$0}v=null}return v}return d>0?C.tH:C.VF},
gKN(){this.a.toString
C.abX.h(0,this.r0(this.w))
return 0.4},
ga_h(){var x=this.c.gv()
x.toString
return this.gkx()?x.a:x.b},
am9(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glq()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga_h()*J.fk(v.w)
x.fo()}else{v.w=0
x.sp(0)}v.ah(new B.aQ4(v))},
ama(d){var x,w,v,u=this
if(u.y){x=u.glq().r
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
break}if(J.fk(w)!==J.fk(u.w))u.ah(new B.aQ5(u))
x=u.glq()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga_h())},
apm(){this.a.toString},
Ns(){var x=this,w=J.fk(x.w),v=x.glq(),u=x.gkx(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.az(y.v.a(v),new A.aw(D.h,u,t),t.i("az<aA.T>"))},
alW(d){var x,w,v,u,t=this
if(t.w===0)return C.qu
x=d.a
w=x.a
v=x.b
if(t.gkx()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.qu
u=t.r0(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.qu
u=t.r0(v)}if(u===t.r0(t.w))return C.asI
return C.asJ},
am8(d){var x,w,v,u,t=this
if(t.y){x=t.glq().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glq()
if(x.gbs()===D.aq){t.xX()
return}w=d.c
v=w.a
u=t.gkx()?v.a:v.b
switch(t.alW(w).a){case 1:if(t.gKN()>=1){x.dM()
break}t.w=J.fk(u)
x.zU(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fk(u)
x.zU(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbs()!==D.a_){w=x.x
w===$&&A.a()
if(w>t.gKN())x.cj()
else x.dM()}break}},
Dd(d){return this.apk(d)},
apk(d){var x=0,w=A.w(y.q),v=this
var $async$Dd=A.x(function(e,f){if(e===1)return A.t(f,w)
for(;;)switch(x){case 0:x=d===D.aq&&!v.y?2:3
break
case 2:x=4
return A.p(v.xX(),$async$Dd)
case 4:case 3:if(v.c!=null)v.oC()
return A.u(null,w)}})
return A.v($async$Dd,w)},
xX(){var x=0,w=A.w(y.q),v,u=this,t
var $async$xX=A.x(function(d,e){if(d===1)return A.t(e,w)
for(;;)switch(x){case 0:if(u.gKN()>=1){u.glq().dM()
x=1
break}x=3
return A.p(u.CH(),$async$xX)
case 3:t=e
if(u.c!=null)if(t)u.ayH()
else u.glq().dM()
case 1:return A.u(v,w)}})
return A.v($async$xX,w)},
CH(){var x=0,w=A.w(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$CH=A.x(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.r0(r.w)
u=5
x=8
return A.p(r.a.f.$1(q),$async$CH)
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
return A.v($async$CH,w)},
ayH(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.r0(w.w)
w.a.w.$1(x)}}else{v=A.c5(null,u,null,null,w)
v.bF()
v.cA$.B(0,w.gar_())
v.bF()
u=v.cK$
u.b=!0
u.a.push(new B.aQ6(w))
w.f=v
v.cj()
w.ah(new B.aQ7(w))}},
ar0(){var x=this,w=x.f.gbs(),v=x.a
if(w===D.aq){w=v.w
if(w!=null)w.$1(x.r0(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.u7(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkx()?D.W:D.a6
v=p.z
return new B.a4D(x,new A.bk(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.tx(new A.pe(x.c,p.as),w,o,!0)
if(x.x===C.tI)return u
w=p.gkx()?p.gXp():o
v=p.gkx()?p.gXq():o
t=p.gkx()?p.gXo():o
s=p.gkx()?o:p.gXp()
r=p.gkx()?o:p.gXq()
q=p.gkx()?o:p.gXo()
return A.hc(x.ax,u,D.J,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.SV.prototype={
bS(){this.cq()
this.ck()
this.eo()},
m(){var x=this,w=x.bk$
if(w!=null)w.N(x.gef())
x.bk$=null
x.aB()}}
B.SW.prototype={
am(){this.aH()
if(this.goE())this.p_()},
er(){var x=this.fj$
if(x!=null){x.av()
x.cR()
this.fj$=null}this.me()}}
B.a4D.prototype={
G(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new A.hR(0,-1)
break
case 1:x=new A.hR(-1,0)
break
default:x=u}w=t===D.W?Math.max(y.v.a(v.c).gp(),0):u
t=t===D.a6?Math.max(y.v.a(v.c).gp(),0):u
return A.oE(new A.cR(x,t,w,v.w,u),D.v,u)}}
var z=a.updateTypes(["~()","~(fJ)","~(kE)","~(fl)","a1<~>(h6)"])
B.aQ4.prototype={
$0(){this.a.Ns()},
$S:0}
B.aQ5.prototype={
$0(){this.a.Ns()},
$S:0}
B.aQ6.prototype={
$1(d){return this.a.oC()},
$S:9}
B.aQ7.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.az(w.a(new A.az(w.a(x),new A.iz(C.Z8),y.n.i("az<aA.T>"))),new A.aw(1,0,v),v.i("az<aA.T>"))},
$S:0};(function aliases(){var x=B.SV.prototype
x.ahw=x.m
x=B.SW.prototype
x.ahx=x.am})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.OX.prototype,"gXp","am9",1)
x(v,"gXq","ama",2)
w(v,"gapl","apm",0)
x(v,"gXo","am8",3)
x(v,"gapj","Dd",4)
w(v,"gar_","ar0",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eM,[B.jW,B.Pj])
v(B.GE,A.S)
v(B.SV,A.V)
v(B.SW,B.SV)
v(B.OX,B.SW)
w(A.dV,[B.aQ4,B.aQ5,B.aQ7])
v(B.aQ6,A.cp)
v(B.a4D,A.uM)
x(B.SV,A.dI)
x(B.SW,A.mT)})()
A.cf(b.typeUniverse,JSON.parse('{"GE":{"S":[],"c":[]},"OX":{"V":["GE"]},"a4D":{"S":[],"c":[]}}'))
var y={v:A.O("bK<J>"),n:A.O("iz"),o:A.O("el"),z:A.O("bp<V<S>>"),A:A.O("aw<j>"),g:A.O("aw<J>"),e:A.O("A"),q:A.O("~")};(function constants(){C.nc=new B.jW(1,"horizontal")
C.nd=new B.jW(2,"endToStart")
C.ne=new B.jW(3,"startToEnd")
C.VF=new B.jW(4,"up")
C.tH=new B.jW(5,"down")
C.tI=new B.jW(6,"none")
C.Z8=new A.dP(0.4,1,D.aX)
C.abX=new A.a8(D.bZ,[],A.O("a8<jW,J>"))
C.qu=new B.Pj(0,"none")
C.asI=new B.Pj(1,"forward")
C.asJ=new B.Pj(2,"reverse")})()};
(a=>{a["Xmmxm9+po9IaqGMv02F6x7AwGHE="]=a.current})($__dart_deferred_initializers__);