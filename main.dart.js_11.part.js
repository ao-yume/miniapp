((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b72(d,e,f,g,h,i,j){return new B.Hp(e,f,i,g,j,d,h)},
k4:function k4(d,e){this.a=d
this.b=e},
Hp:function Hp(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
Qo:function Qo(d,e){this.a=d
this.b=e},
Q0:function Q0(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fn$=e
_.dq$=f
_.bo$=g
_.c=_.a=null},
aSa:function aSa(d){this.a=d},
aSb:function aSb(d){this.a=d},
aSc:function aSc(d){this.a=d},
aSd:function aSd(d){this.a=d},
U_:function U_(){},
U0:function U0(){},
a5H:function a5H(d,e,f,g){var _=this
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
B.Hp.prototype={
a7(){var x=null
return new B.Q0(new A.bp(x,y.z),x,x,x)}}
B.Qo.prototype={
K(){return"_FlingGestureKind."+this.b}}
B.Q0.prototype={
al(){var x,w,v=this
v.aia()
x=v.glz()
x.bF()
w=x.cN$
w.b=!0
w.a.push(v.gaqb())
x.bF()
x.cF$.B(0,v.gaqd())
v.NZ()},
glz(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.ca(null,D.R,null,null,w)
w.d!==$&&A.aK()
w.d=x
v=x}return v},
goR(){var x=this.glz().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.glz().m()
var x=this.f
if(x!=null)x.m()
this.ai9()},
gkK(){var x=this.a.x
return x===C.nA||x===C.nB||x===C.nC},
rh(d){var x,w,v,u
if(d===0)return C.u3
if(this.gkK()){x=this.c.ak(y.o).w
$label0$0:{w=D.aB===x
if(w&&d<0){v=C.nC
break $label0$0}u=D.o===x
if(u&&d>0){v=C.nC
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.nB
break $label0$0}v=null}return v}return d>0?C.u2:C.Wr},
gLj(){this.a.toString
C.adi.h(0,this.rh(this.w))
return 0.4},
ga_Q(){var x=this.c.gv()
x.toString
return this.gkK()?x.a:x.b},
amW(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glz()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga_Q()*J.fr(v.w)
x.fv()}else{v.w=0
x.sp(0)}v.ah(new B.aSa(v))},
amX(d){var x,w,v,u=this
if(u.y){x=u.glz().r
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
break}if(J.fr(w)!==J.fr(u.w))u.ah(new B.aSb(u))
x=u.glz()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga_Q())},
aqe(){this.a.toString},
NZ(){var x=this,w=J.fr(x.w),v=x.glz(),u=x.gkK(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.az(y.v.a(v),new A.as(D.h,u,t),t.i("az<aB.T>"))},
amI(d){var x,w,v,u,t=this
if(t.w===0)return C.qQ
x=d.a
w=x.a
v=x.b
if(t.gkK()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.qQ
u=t.rh(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.qQ
u=t.rh(v)}if(u===t.rh(t.w))return C.auh
return C.aui},
amV(d){var x,w,v,u,t=this
if(t.y){x=t.glz().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glz()
if(x.gbs()===D.ay){t.yn()
return}w=d.c
v=w.a
u=t.gkK()?v.a:v.b
switch(t.amI(w).a){case 1:if(t.gLj()>=1){x.dP()
break}t.w=J.fr(u)
x.Ac(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fr(u)
x.Ac(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbs()!==D.a4){w=x.x
w===$&&A.a()
if(w>t.gLj())x.cj()
else x.dP()}break}},
DE(d){return this.aqc(d)},
aqc(d){var x=0,w=A.v(y.q),v=this
var $async$DE=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.ay&&!v.y?2:3
break
case 2:x=4
return A.o(v.yn(),$async$DE)
case 4:case 3:if(v.c!=null)v.oP()
return A.t(null,w)}})
return A.u($async$DE,w)},
yn(){var x=0,w=A.v(y.q),v,u=this,t
var $async$yn=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gLj()>=1){u.glz().dP()
x=1
break}x=3
return A.o(u.D7(),$async$yn)
case 3:t=e
if(u.c!=null)if(t)u.azD()
else u.glz().dP()
case 1:return A.t(v,w)}})
return A.u($async$yn,w)},
D7(){var x=0,w=A.v(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$D7=A.w(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rh(r.w)
u=5
x=8
return A.o(r.a.f.$1(q),$async$D7)
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
return A.u($async$D7,w)},
azD(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rh(w.w)
w.a.w.$1(x)}}else{v=A.ca(null,u,null,null,w)
v.bF()
v.cF$.B(0,w.garT())
v.bF()
u=v.cN$
u.b=!0
u.a.push(new B.aSc(w))
w.f=v
v.cj()
w.ah(new B.aSd(w))}},
arU(){var x=this,w=x.f.gbs(),v=x.a
if(w===D.ay){w=v.w
if(w!=null)w.$1(x.rh(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.um(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkK()?D.Y:D.ag
v=p.z
return new B.a5H(x,new A.b8(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.ue(new A.pL(x.c,p.as),w,o,!0)
if(x.x===C.u3)return u
w=p.gkK()?p.gXW():o
v=p.gkK()?p.gXX():o
t=p.gkK()?p.gXV():o
s=p.gkK()?o:p.gXW()
r=p.gkK()?o:p.gXX()
q=p.gkK()?o:p.gXV()
return A.fX(x.ax,u,D.M,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.U_.prototype={
bS(){this.cu()
this.cl()
this.eu()},
m(){var x=this,w=x.bo$
if(w!=null)w.N(x.gel())
x.bo$=null
x.az()}}
B.U0.prototype={
al(){this.aE()
if(this.goR())this.pg()},
ex(){var x=this.fn$
if(x!=null){x.aw()
x.cU()
this.fn$=null}this.mt()}}
B.a5H.prototype={
G(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new A.i2(0,-1)
break
case 1:x=new A.i2(-1,0)
break
default:x=u}w=t===D.Y?Math.max(y.v.a(v.c).gp(),0):u
t=t===D.ag?Math.max(y.v.a(v.c).gp(),0):u
return A.pa(new A.cR(x,t,w,v.w,u),D.u,u)}}
var z=a.updateTypes(["~()","~(fT)","~(kR)","~(ft)","a3<~>(hl)"])
B.aSa.prototype={
$0(){this.a.NZ()},
$S:0}
B.aSb.prototype={
$0(){this.a.NZ()},
$S:0}
B.aSc.prototype={
$1(d){return this.a.oP()},
$S:9}
B.aSd.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.az(w.a(new A.az(w.a(x),new A.iI(C.a_t),y.n.i("az<aB.T>"))),new A.as(1,0,v),v.i("az<aB.T>"))},
$S:0};(function aliases(){var x=B.U_.prototype
x.ai9=x.m
x=B.U0.prototype
x.aia=x.al})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Q0.prototype,"gXW","amW",1)
x(v,"gXX","amX",2)
w(v,"gaqd","aqe",0)
x(v,"gXV","amV",3)
x(v,"gaqb","DE",4)
w(v,"garT","arU",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eB,[B.k4,B.Qo])
v(B.Hp,A.S)
v(B.U_,A.U)
v(B.U0,B.U_)
v(B.Q0,B.U0)
w(A.dt,[B.aSa,B.aSb,B.aSd])
v(B.aSc,A.c8)
v(B.a5H,A.vu)
x(B.U_,A.dQ)
x(B.U0,A.nf)})()
A.bV(b.typeUniverse,JSON.parse('{"Hp":{"S":[],"c":[]},"Q0":{"U":["Hp"]},"a5H":{"S":[],"c":[]}}'))
var y={v:A.E("bh<H>"),n:A.E("iI"),o:A.E("e6"),z:A.E("bp<U<S>>"),A:A.E("as<j>"),g:A.E("as<H>"),e:A.E("z"),q:A.E("~")};(function constants(){C.nA=new B.k4(1,"horizontal")
C.nB=new B.k4(2,"endToStart")
C.nC=new B.k4(3,"startToEnd")
C.Wr=new B.k4(4,"up")
C.u2=new B.k4(5,"down")
C.u3=new B.k4(6,"none")
C.a_t=new A.dX(0.4,1,D.aZ)
C.adi=new A.a9(D.c8,[],A.E("a9<k4,H>"))
C.qQ=new B.Qo(0,"none")
C.auh=new B.Qo(1,"forward")
C.aui=new B.Qo(2,"reverse")})()};
(a=>{a["wkQgYiDt8mbCIKEflNTqTKpfHJg="]=a.current})($__dart_deferred_initializers__);