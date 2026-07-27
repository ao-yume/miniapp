((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b9i(d,e,f,g,h,i,j){return new B.HU(e,f,i,g,j,d,h)},
kc:function kc(d,e){this.a=d
this.b=e},
HU:function HU(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
R3:function R3(d,e){this.a=d
this.b=e},
QI:function QI(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fC$=e
_.dB$=f
_.bn$=g
_.c=_.a=null},
aTW:function aTW(d){this.a=d},
aTX:function aTX(d){this.a=d},
aTY:function aTY(d){this.a=d},
aTZ:function aTZ(d){this.a=d},
UD:function UD(){},
UE:function UE(){},
a6D:function a6D(d,e,f,g){var _=this
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
B.HU.prototype={
a6(){var x=null
return new B.QI(new A.bp(x,y.z),x,x,x)}}
B.R3.prototype={
L(){return"_FlingGestureKind."+this.b}}
B.QI.prototype={
an(){var x,w,v=this
v.ajV()
x=v.glM()
x.bF()
w=x.cY$
w.b=!0
w.a.push(v.gas6())
x.bF()
x.cp$.C(0,v.gas8())
v.Pf()},
glM(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.cf(null,D.O,null,null,w)
w.d!==$&&A.aI()
w.d=x
v=x}return v},
gp7(){var x=this.glM().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
l(){this.glM().l()
var x=this.f
if(x!=null)x.l()
this.ajU()},
gkX(){var x=this.a.x
return x===C.nV||x===C.nW||x===C.nX},
rw(d){var x,w,v,u
if(d===0)return C.uk
if(this.gkX()){x=this.c.al(y.o).w
A:{w=D.ak===x
if(w&&d<0){v=C.nX
break A}u=D.m===x
if(u&&d>0){v=C.nX
break A}if(!w)v=u
else v=!0
if(v){v=C.nW
break A}v=null}return v}return d>0?C.uj:C.Wx},
gMb(){this.a.toString
C.acV.h(0,this.rw(this.w))
return 0.4},
ga1i(){var x=this.c.gv()
x.toString
return this.gkX()?x.a:x.b},
aoM(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glM()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga1i()*J.ff(v.w)
x.fJ()}else{v.w=0
x.sp(0)}v.aj(new B.aTW(v))},
aoN(d){var x,w,v,u=this
if(u.y){x=u.glM().r
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
break}if(J.ff(w)!==J.ff(u.w))u.aj(new B.aTX(u))
x=u.glM()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga1i())},
as9(){this.a.toString},
Pf(){var x=this,w=J.ff(x.w),v=x.glM(),u=x.gkX(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.aB(y.v.a(v),new A.aw(D.h,u,t),t.i("aB<aD.T>"))},
aoz(d){var x,w,v,u,t=this
if(t.w===0)return C.r6
x=d.a
w=x.a
v=x.b
if(t.gkX()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.r6
u=t.rw(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.r6
u=t.rw(v)}if(u===t.rw(t.w))return C.au2
return C.au3},
aoL(d){var x,w,v,u,t=this
if(t.y){x=t.glM().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glM()
if(x.gbs()===D.aD){t.yQ()
return}w=d.c
v=w.a
u=t.gkX()?v.a:v.b
switch(t.aoz(w).a){case 1:if(t.gMb()>=1){x.dW()
break}t.w=J.ff(u)
x.AE(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.ff(u)
x.AE(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbs()!==D.a5){w=x.x
w===$&&A.a()
if(w>t.gMb())x.cl()
else x.dW()}break}},
E5(d){return this.as7(d)},
as7(d){var x=0,w=A.v(y.q),v=this
var $async$E5=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.aD&&!v.y?2:3
break
case 2:x=4
return A.o(v.yQ(),$async$E5)
case 4:case 3:if(v.c!=null)v.p5()
return A.t(null,w)}})
return A.u($async$E5,w)},
yQ(){var x=0,w=A.v(y.q),v,u=this,t
var $async$yQ=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gMb()>=1){u.glM().dW()
x=1
break}x=3
return A.o(u.Dx(),$async$yQ)
case 3:t=e
if(u.c!=null)if(t)u.aBK()
else u.glM().dW()
case 1:return A.t(v,w)}})
return A.u($async$yQ,w)},
Dx(){var x=0,w=A.v(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$Dx=A.w(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rw(r.w)
u=5
x=8
return A.o(r.a.f.$1(q),$async$Dx)
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
return A.u($async$Dx,w)},
aBK(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rw(w.w)
w.a.w.$1(x)}}else{v=A.cf(null,u,null,null,w)
v.bF()
v.cp$.C(0,w.gatO())
v.bF()
u=v.cY$
u.b=!0
u.a.push(new B.aTY(w))
w.f=v
v.cl()
w.aj(new B.aTZ(w))}},
atP(){var x=this,w=x.f.gbs(),v=x.a
if(w===D.aD){w=v.w
if(w!=null)w.$1(x.rw(x.w))}else v.toString},
F(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.uC(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkX()?D.Z:D.ab
v=p.z
return new B.a6D(x,new A.bg(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.ud(new A.pF(x.c,p.as),w,o,!0)
if(x.x===C.uk)return u
w=p.gkX()?p.gZp():o
v=p.gkX()?p.gZq():o
t=p.gkX()?p.gZo():o
s=p.gkX()?o:p.gZp()
r=p.gkX()?o:p.gZq()
q=p.gkX()?o:p.gZo()
return A.ht(x.ax,u,D.M,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.UD.prototype={
bJ(){this.cv()
this.cj()
this.eD()},
l(){var x=this,w=x.bn$
if(w!=null)w.N(x.geq())
x.bn$=null
x.aA()}}
B.UE.prototype={
an(){this.aF()
if(this.gp7())this.pu()},
er(){var x=this.fC$
if(x!=null){x.aE()
x.d9()
this.fC$=null}this.lF()}}
B.a6D.prototype={
F(d){var x,w,v=this,u=null,t=u
switch(v.e.a){case 0:t=new A.i9(0,-1)
break
case 1:t=new A.i9(-1,0)
break}x=v.e
w=x===D.Z?Math.max(y.v.a(v.c).gp(),0):u
x=x===D.ab?Math.max(y.v.a(v.c).gp(),0):u
return A.p5(new A.cU(t,x,w,v.x,u),D.u,u)}}
var z=a.updateTypes(["~()","~(h3)","~(l_)","~(fF)","a4<~>(ho)"])
B.aTW.prototype={
$0(){this.a.Pf()},
$S:0}
B.aTX.prototype={
$0(){this.a.Pf()},
$S:0}
B.aTY.prototype={
$1(d){return this.a.p5()},
$S:10}
B.aTZ.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aB(w.a(new A.aB(w.a(x),new A.iK(C.a_t),y.n.i("aB<aD.T>"))),new A.aw(1,0,v),v.i("aB<aD.T>"))},
$S:0};(function aliases(){var x=B.UD.prototype
x.ajU=x.l
x=B.UE.prototype
x.ajV=x.an})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.QI.prototype,"gZp","aoM",1)
x(v,"gZq","aoN",2)
w(v,"gas8","as9",0)
x(v,"gZo","aoL",3)
x(v,"gas6","E5",4)
w(v,"gatO","atP",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eF,[B.kc,B.R3])
v(B.HU,A.R)
v(B.UD,A.U)
v(B.UE,B.UD)
v(B.QI,B.UE)
w(A.dv,[B.aTW,B.aTX,B.aTZ])
v(B.aTY,A.cc)
v(B.a6D,A.vx)
x(B.UD,A.dQ)
x(B.UE,A.ne)})()
A.bY(b.typeUniverse,JSON.parse('{"HU":{"R":[],"c":[]},"QI":{"U":["HU"]},"a6D":{"R":[],"c":[]}}'))
var y={v:A.F("bk<H>"),n:A.F("iK"),o:A.F("ea"),z:A.F("bp<U<R>>"),A:A.F("aw<j>"),g:A.F("aw<H>"),e:A.F("z"),q:A.F("~")};(function constants(){C.nV=new B.kc(1,"horizontal")
C.nW=new B.kc(2,"endToStart")
C.nX=new B.kc(3,"startToEnd")
C.Wx=new B.kc(4,"up")
C.uj=new B.kc(5,"down")
C.uk=new B.kc(6,"none")
C.a_t=new A.dV(0.4,1,D.aZ)
C.acV=new A.ab(D.cd,[],A.F("ab<kc,H>"))
C.r6=new B.R3(0,"none")
C.au2=new B.R3(1,"forward")
C.au3=new B.R3(2,"reverse")})()};
(a=>{a["QdNF3gdVsMALDeEOKgest2jDSSY="]=a.current})($__dart_deferred_initializers__);