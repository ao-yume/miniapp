((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b8B(d,e,f,g,h,i,j){return new B.HM(e,f,i,g,j,d,h)},
kb:function kb(d,e){this.a=d
this.b=e},
HM:function HM(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
QR:function QR(d,e){this.a=d
this.b=e},
Qv:function Qv(d,e,f,g){var _=this
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
aTn:function aTn(d){this.a=d},
aTo:function aTo(d){this.a=d},
aTp:function aTp(d){this.a=d},
aTq:function aTq(d){this.a=d},
Uq:function Uq(){},
Ur:function Ur(){},
a6p:function a6p(d,e,f,g){var _=this
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
L(){return"DismissDirection."+this.b}}
B.HM.prototype={
a6(){var x=null
return new B.Qv(new A.bn(x,y.z),x,x,x)}}
B.QR.prototype={
L(){return"_FlingGestureKind."+this.b}}
B.Qv.prototype={
ap(){var x,w,v=this
v.ajL()
x=v.glK()
x.bF()
w=x.cX$
w.b=!0
w.a.push(v.garS())
x.bF()
x.cn$.C(0,v.garU())
v.P9()},
glK(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.ce(null,D.M,null,null,w)
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
this.ajK()},
gkV(){var x=this.a.x
return x===C.nO||x===C.nP||x===C.nQ},
rw(d){var x,w,v,u
if(d===0)return C.uj
if(this.gkV()){x=this.c.al(y.o).w
A:{w=D.ah===x
if(w&&d<0){v=C.nQ
break A}u=D.k===x
if(u&&d>0){v=C.nQ
break A}if(!w)v=u
else v=!0
if(v){v=C.nP
break A}v=null}return v}return d>0?C.ui:C.Wv},
gM5(){this.a.toString
C.acK.h(0,this.rw(this.w))
return 0.4},
ga1a(){var x=this.c.gv()
x.toString
return this.gkV()?x.a:x.b},
aoA(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glK()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga1a()*J.fc(v.w)
x.fI()}else{v.w=0
x.sp(0)}v.ak(new B.aTn(v))},
aoB(d){var x,w,v,u=this
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
break}if(J.fc(w)!==J.fc(u.w))u.ak(new B.aTo(u))
x=u.glK()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga1a())},
arV(){this.a.toString},
P9(){var x=this,w=J.fc(x.w),v=x.glK(),u=x.gkV(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.aB(y.v.a(v),new A.aw(D.h,u,t),t.i("aB<aD.T>"))},
aon(d){var x,w,v,u,t=this
if(t.w===0)return C.r2
x=d.a
w=x.a
v=x.b
if(t.gkV()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.r2
u=t.rw(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.r2
u=t.rw(v)}if(u===t.rw(t.w))return C.atS
return C.atT},
aoz(d){var x,w,v,u,t=this
if(t.y){x=t.glK().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glK()
if(x.gbr()===D.aD){t.yN()
return}w=d.c
v=w.a
u=t.gkV()?v.a:v.b
switch(t.aon(w).a){case 1:if(t.gM5()>=1){x.dW()
break}t.w=J.fc(u)
x.AB(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fc(u)
x.AB(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbr()!==D.a3){w=x.x
w===$&&A.a()
if(w>t.gM5())x.ck()
else x.dW()}break}},
E2(d){return this.arT(d)},
arT(d){var x=0,w=A.v(y.q),v=this
var $async$E2=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.aD&&!v.y?2:3
break
case 2:x=4
return A.o(v.yN(),$async$E2)
case 4:case 3:if(v.c!=null)v.p0()
return A.t(null,w)}})
return A.u($async$E2,w)},
yN(){var x=0,w=A.v(y.q),v,u=this,t
var $async$yN=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gM5()>=1){u.glK().dW()
x=1
break}x=3
return A.o(u.Du(),$async$yN)
case 3:t=e
if(u.c!=null)if(t)u.aBs()
else u.glK().dW()
case 1:return A.t(v,w)}})
return A.u($async$yN,w)},
Du(){var x=0,w=A.v(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$Du=A.w(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rw(r.w)
u=5
x=8
return A.o(r.a.f.$1(q),$async$Du)
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
return A.u($async$Du,w)},
aBs(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rw(w.w)
w.a.w.$1(x)}}else{v=A.ce(null,u,null,null,w)
v.bF()
v.cn$.C(0,w.gatz())
v.bF()
u=v.cX$
u.b=!0
u.a.push(new B.aTp(w))
w.f=v
v.ck()
w.ak(new B.aTq(w))}},
atA(){var x=this,w=x.f.gbr(),v=x.a
if(w===D.aD){w=v.w
if(w!=null)w.$1(x.rw(x.w))}else v.toString},
F(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.uB(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkV()?D.Z:D.aa
v=p.z
return new B.a6p(x,new A.bd(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.u8(new A.pB(x.c,p.as),w,o,!0)
if(x.x===C.uj)return u
w=p.gkV()?p.gZi():o
v=p.gkV()?p.gZj():o
t=p.gkV()?p.gZh():o
s=p.gkV()?o:p.gZi()
r=p.gkV()?o:p.gZj()
q=p.gkV()?o:p.gZh()
return A.hr(x.ax,u,D.K,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.Uq.prototype={
bJ(){this.cs()
this.ci()
this.eC()},
l(){var x=this,w=x.bl$
if(w!=null)w.N(x.gep())
x.bl$=null
x.az()}}
B.Ur.prototype={
ap(){this.aG()
if(this.gp6())this.pt()},
eq(){var x=this.fB$
if(x!=null){x.aE()
x.d7()
this.fB$=null}this.lD()}}
B.a6p.prototype={
F(d){var x,w,v=this,u=null,t=u
switch(v.e.a){case 0:t=new A.i5(0,-1)
break
case 1:t=new A.i5(-1,0)
break}x=v.e
w=x===D.Z?Math.max(y.v.a(v.c).gp(),0):u
x=x===D.aa?Math.max(y.v.a(v.c).gp(),0):u
return A.p2(new A.cU(t,x,w,v.x,u),D.u,u)}}
var z=a.updateTypes(["~()","~(h2)","~(kW)","~(fF)","a3<~>(hm)"])
B.aTn.prototype={
$0(){this.a.P9()},
$S:0}
B.aTo.prototype={
$0(){this.a.P9()},
$S:0}
B.aTp.prototype={
$1(d){return this.a.p0()},
$S:10}
B.aTq.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aB(w.a(new A.aB(w.a(x),new A.iI(C.a_i),y.n.i("aB<aD.T>"))),new A.aw(1,0,v),v.i("aB<aD.T>"))},
$S:0};(function aliases(){var x=B.Uq.prototype
x.ajK=x.l
x=B.Ur.prototype
x.ajL=x.ap})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Qv.prototype,"gZi","aoA",1)
x(v,"gZj","aoB",2)
w(v,"garU","arV",0)
x(v,"gZh","aoz",3)
x(v,"garS","E2",4)
w(v,"gatz","atA",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eD,[B.kb,B.QR])
v(B.HM,A.S)
v(B.Uq,A.U)
v(B.Ur,B.Uq)
v(B.Qv,B.Ur)
w(A.dv,[B.aTn,B.aTo,B.aTq])
v(B.aTp,A.cc)
v(B.a6p,A.vq)
x(B.Uq,A.dP)
x(B.Ur,A.nb)})()
A.bW(b.typeUniverse,JSON.parse('{"HM":{"S":[],"c":[]},"Qv":{"U":["HM"]},"a6p":{"S":[],"c":[]}}'))
var y={v:A.F("bj<H>"),n:A.F("iI"),o:A.F("e8"),z:A.F("bn<U<S>>"),A:A.F("aw<j>"),g:A.F("aw<H>"),e:A.F("z"),q:A.F("~")};(function constants(){C.nO=new B.kb(1,"horizontal")
C.nP=new B.kb(2,"endToStart")
C.nQ=new B.kb(3,"startToEnd")
C.Wv=new B.kb(4,"up")
C.ui=new B.kb(5,"down")
C.uj=new B.kb(6,"none")
C.a_i=new A.dU(0.4,1,D.aZ)
C.acK=new A.ab(D.cd,[],A.F("ab<kb,H>"))
C.r2=new B.QR(0,"none")
C.atS=new B.QR(1,"forward")
C.atT=new B.QR(2,"reverse")})()};
(a=>{a["Zql5g8c5wSyu9ioIqRDYhBDvAT8="]=a.current})($__dart_deferred_initializers__);