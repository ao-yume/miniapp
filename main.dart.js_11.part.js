((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={iz:function iz(d,e,f){this.b=d
this.c=e
this.a=f},
b3_(d,e,f,g,h,i,j){return new B.GA(e,f,i,g,j,d,h)},
jN:function jN(d,e){this.a=d
this.b=e},
GA:function GA(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
Pg:function Pg(d,e){this.a=d
this.b=e},
OV:function OV(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fo$=e
_.dq$=f
_.bk$=g
_.c=_.a=null},
aPz:function aPz(d){this.a=d},
aPA:function aPA(d){this.a=d},
aPB:function aPB(d){this.a=d},
aPC:function aPC(d){this.a=d},
SN:function SN(){},
SO:function SO(){},
a4z:function a4z(d,e,f,g){var _=this
_.e=d
_.w=e
_.c=f
_.a=g}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[23],B)
D=c[65]
E=c[32]
B.iz.prototype={
gq9(){return!0},
Fv(d){var x=d==null?this.a:d
return new B.iz(this.b,this.c,x)},
gke(){var x=this.a.b
return new A.aD(x,x,x,x)},
bm(d){var x=this.a.bm(d)
return new B.iz(this.b*d,this.c.af(0,d),x)},
e_(d,e){var x,w
if(d instanceof B.iz){x=A.lt(d.c,this.c,e)
x.toString
w=A.bf(d.a,this.a,e)
return new B.iz(d.b,x,w)}return this.Cu(d,e)},
e0(d,e){var x,w
if(d instanceof B.iz){x=A.lt(this.c,d.c,e)
x.toString
w=A.bf(this.a,d.a,e)
return new B.iz(d.b,x,w)}return this.Cv(d,e)},
je(d,e){var x=A.cd($.a4().r)
x.aW(new A.f3(this.c.dG(d).dt(-this.a.b)))
return x},
ei(d,e){var x=A.cd($.a4().r)
x.aW(new A.f3(this.c.dG(d)))
return x},
j3(d,e,f,g){d.fj(this.c.dG(e),f)},
gi_(){return!0},
wk(a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this.a,a6=a5.i3(),a7=this.c.dG(a9)
a5=a5.b/2
x=a7.dt(-a5)
if(b2==null||b0<=0||b1===0)a8.fj(x,a6)
else{w=this.b
v=A.a7(0,b0+w*2,b1)
v.toString
switch(b3.a){case 0:w=b2+w-v
break
case 1:w=b2-w
break
default:w=null}u=a7.c-a7.a
w=Math.max(0,w)
t=x.J7()
s=t.a
r=t.b
q=t.e
p=t.f
o=t.c
n=t.r
m=n*2
l=o-m
k=t.w
j=new A.C(l,r,l+m,r+k*2)
m=t.x
l=m*2
i=o-l
h=t.d
g=t.y
f=g*2
e=h-f
d=t.Q
a0=d*2
a1=h-a0
a2=t.z
a3=A.cd($.a4().r)
if(!new A.aW(q,p).k(0,C.F))a3.aW(new A.qx(new A.C(s,r,s+q*2,r+p*2),3.141592653589793,Math.acos(A.H(1-w/q,0,1))))
else a3.aW(new A.hf(s-a5,r))
if(w>q)a3.aW(new A.cS(w,r))
a5=w+v
if(a5<u-n){a3.aW(new A.hf(a5,r))
a3.aW(new A.cS(o-n,r))
if(!new A.aW(n,k).k(0,C.F))a3.aW(new A.qx(j,4.71238898038469,1.5707963267948966))}else if(a5<u){a4=Math.asin(A.H(1-(u-a5)/n,0,1))
a3.aW(new A.qx(j,4.71238898038469+a4,1.5707963267948966-a4))}if(!new A.aW(m,g).k(0,C.F))a3.aW(new A.hf(o,r+k))
a3.aW(new A.cS(o,h-g))
if(!new A.aW(m,g).k(0,C.F))a3.aW(new A.qx(new A.C(i,e,i+l,e+f),0,1.5707963267948966))
a3.aW(new A.cS(s+a2,h))
if(!new A.aW(a2,d).k(0,C.F))a3.aW(new A.qx(new A.C(s,a1,s+a2*2,a1+a0),1.5707963267948966,1.5707963267948966))
a3.aW(new A.cS(s,r+p))
a8.io(a3,a6)}},
fs(d,e,f){return this.wk(d,e,0,0,null,f)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.S(e)!==A.m(x))return!1
return e instanceof B.iz&&e.a.k(0,x.a)&&e.c.k(0,x.c)&&e.b===x.b},
gn(d){return A.O(this.a,this.c,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.jN.prototype={
L(){return"DismissDirection."+this.b}}
B.GA.prototype={
aa(){var x=null
return new B.OV(new A.bk(x,y.z),x,x,x)}}
B.Pg.prototype={
L(){return"_FlingGestureKind."+this.b}}
B.OV.prototype={
ao(){var x,w,v=this
v.aiq()
x=v.glx()
x.bF()
w=x.cT$
w.b=!0
w.a.push(v.gaqe())
x.bF()
x.ct$.B(0,v.gaqg())
v.Oe()},
glx(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.c6(null,C.R,null,null,w)
w.d!==$&&A.aF()
w.d=x
v=x}return v},
goK(){var x=this.glx().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.glx().m()
var x=this.f
if(x!=null)x.m()
this.aip()},
gkG(){var x=this.a.x
return x===D.nf||x===D.ng||x===D.nh},
r4(d){var x,w,v,u
if(d===0)return D.tI
if(this.gkG()){x=this.c.aj(y.o).w
A:{w=C.ah===x
if(w&&d<0){v=D.nh
break A}u=C.k===x
if(u&&d>0){v=D.nh
break A}if(!w)v=u
else v=!0
if(v){v=D.ng
break A}v=null}return v}return d>0?D.tH:D.Vu},
gLd(){this.a.toString
D.abN.h(0,this.r4(this.w))
return 0.4},
ga09(){var x=this.c.gA()
x.toString
return this.gkG()?x.a:x.b},
an0(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glx()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga09()*J.f2(v.w)
x.fz()}else{v.w=0
x.sp(0)}v.ai(new B.aPz(v))},
an1(d){var x,w,v,u=this
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
break}if(J.f2(w)!==J.f2(u.w))u.ai(new B.aPA(u))
x=u.glx()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga09())},
aqh(){this.a.toString},
Oe(){var x=this,w=J.f2(x.w),v=x.glx(),u=x.gkG(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.aB(y.v.a(v),new A.ax(C.h,u,t),t.i("aB<aA.T>"))},
amO(d){var x,w,v,u,t=this
if(t.w===0)return D.qx
x=d.a
w=x.a
v=x.b
if(t.gkG()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return D.qx
u=t.r4(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return D.qx
u=t.r4(v)}if(u===t.r4(t.w))return D.aso
return D.asp},
an_(d){var x,w,v,u,t=this
if(t.y){x=t.glx().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glx()
if(x.gbq()===C.as){t.y7()
return}w=d.c
v=w.a
u=t.gkG()?v.a:v.b
switch(t.amO(w).a){case 1:if(t.gLd()>=1){x.dP()
break}t.w=J.f2(u)
x.A3(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.f2(u)
x.A3(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbq()!==C.X){w=x.x
w===$&&A.a()
if(w>t.gLd())x.cf()
else x.dP()}break}},
Do(d){return this.aqf(d)},
aqf(d){var x=0,w=A.w(y.q),v=this
var $async$Do=A.x(function(e,f){if(e===1)return A.t(f,w)
for(;;)switch(x){case 0:x=d===C.as&&!v.y?2:3
break
case 2:x=4
return A.p(v.y7(),$async$Do)
case 4:case 3:if(v.c!=null)v.oI()
return A.u(null,w)}})
return A.v($async$Do,w)},
y7(){var x=0,w=A.w(y.q),v,u=this,t
var $async$y7=A.x(function(d,e){if(d===1)return A.t(e,w)
for(;;)switch(x){case 0:if(u.gLd()>=1){u.glx().dP()
x=1
break}x=3
return A.p(u.CP(),$async$y7)
case 3:t=e
if(u.c!=null)if(t)u.azE()
else u.glx().dP()
case 1:return A.u(v,w)}})
return A.v($async$y7,w)},
CP(){var x=0,w=A.w(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$CP=A.x(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.r4(r.w)
u=5
x=8
return A.p(r.a.f.$1(q),$async$CP)
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
return A.v($async$CP,w)},
azE(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.r4(w.w)
w.a.w.$1(x)}}else{v=A.c6(null,u,null,null,w)
v.bF()
v.ct$.B(0,w.garW())
v.bF()
u=v.cT$
u.b=!0
u.a.push(new B.aPB(w))
w.f=v
v.cf()
w.ai(new B.aPC(w))}},
arX(){var x=this,w=x.f.gbq(),v=x.a
if(w===C.as){w=v.w
if(w!=null)w.$1(x.r4(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.ue(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkG()?C.a2:C.aa
v=p.z
return new B.a4z(x,new A.br(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.ti(new A.p1(x.c,p.as),w,o,!0)
if(x.x===D.tI)return u
w=p.gkG()?p.gYh():o
v=p.gkG()?p.gYi():o
t=p.gkG()?p.gYg():o
s=p.gkG()?o:p.gYh()
r=p.gkG()?o:p.gYi()
q=p.gkG()?o:p.gYg()
return A.hy(x.ax,u,C.N,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.SN.prototype={
bL(){this.cq()
this.ci()
this.er()},
m(){var x=this,w=x.bk$
if(w!=null)w.O(x.gek())
x.bk$=null
x.aE()}}
B.SO.prototype={
ao(){this.aJ()
if(this.goK())this.pc()},
el(){var x=this.fo$
if(x!=null){x.aB()
x.cY()
this.fo$=null}this.lq()}}
B.a4z.prototype={
G(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new A.hR(0,-1)
break
case 1:x=new A.hR(-1,0)
break
default:x=u}w=t===C.a2?Math.max(y.v.a(v.c).gp(),0):u
t=t===C.aa?Math.max(y.v.a(v.c).gp(),0):u
return A.op(new A.cW(x,t,w,v.w,u),C.v,u)}}
var z=a.updateTypes(["~()","~(fK)","~(kA)","~(fm)","a0<~>(h4)"])
B.aPz.prototype={
$0(){this.a.Oe()},
$S:0}
B.aPA.prototype={
$0(){this.a.Oe()},
$S:0}
B.aPB.prototype={
$1(d){return this.a.oI()},
$S:8}
B.aPC.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gA()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aB(w.a(new A.aB(w.a(x),new A.io(D.YJ),y.n.i("aB<aA.T>"))),new A.ax(1,0,v),v.i("aB<aA.T>"))},
$S:0};(function aliases(){var x=B.SN.prototype
x.aip=x.m
x=B.SO.prototype
x.aiq=x.ao})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.OV.prototype,"gYh","an0",1)
x(v,"gYi","an1",2)
w(v,"gaqg","aqh",0)
x(v,"gYg","an_",3)
x(v,"gaqe","Do",4)
w(v,"garW","arX",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.iz,E.iw)
v(A.fi,[B.jN,B.Pg])
w(B.GA,A.T)
w(B.SN,A.V)
w(B.SO,B.SN)
w(B.OV,B.SO)
v(A.ee,[B.aPz,B.aPA,B.aPC])
w(B.aPB,A.cQ)
w(B.a4z,A.uv)
x(B.SN,A.dG)
x(B.SO,A.mG)})()
A.cN(b.typeUniverse,JSON.parse('{"iz":{"iw":[],"cq":[]},"GA":{"T":[],"c":[]},"OV":{"V":["GA"]},"a4z":{"T":[],"c":[]}}'))
var y={v:A.P("bB<K>"),n:A.P("io"),o:A.P("ez"),z:A.P("bk<V<T>>"),A:A.P("ax<j>"),g:A.P("ax<K>"),e:A.P("z"),q:A.P("~")};(function constants(){D.nf=new B.jN(1,"horizontal")
D.ng=new B.jN(2,"endToStart")
D.nh=new B.jN(3,"startToEnd")
D.Vu=new B.jN(4,"up")
D.tH=new B.jN(5,"down")
D.tI=new B.jN(6,"none")
D.nq=new A.aD(12,0,12,0)
D.uv=new A.cz(57689,"MaterialIcons",!1)
D.YJ=new A.dM(0.4,1,C.aV)
D.abN=new A.aa(C.c_,[],A.P("aa<jN,K>"))
D.qx=new B.Pg(0,"none")
D.aso=new B.Pg(1,"forward")
D.asp=new B.Pg(2,"reverse")})()};
(a=>{a["eoDXSmHP4UIKeEwc3U+tpMIzpHc="]=a.current})($__dart_deferred_initializers__);