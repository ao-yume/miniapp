((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={iu:function iu(d,e,f){this.b=d
this.c=e
this.a=f},
b29(d,e,f,g,h,i,j){return new B.Gl(e,f,i,g,j,d,h)},
jI:function jI(d,e){this.a=d
this.b=e},
Gl:function Gl(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
OV:function OV(d,e){this.a=d
this.b=e},
Oy:function Oy(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fo$=e
_.dC$=f
_.bl$=g
_.c=_.a=null},
aOT:function aOT(d){this.a=d},
aOU:function aOU(d){this.a=d},
aOV:function aOV(d){this.a=d},
aOW:function aOW(d){this.a=d},
Sn:function Sn(){},
So:function So(){},
a4a:function a4a(d,e,f,g){var _=this
_.e=d
_.w=e
_.c=f
_.a=g}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[22],B)
D=c[60]
E=c[29]
B.iu.prototype={
gq1(){return!0},
Fk(d){var x=d==null?this.a:d
return new B.iu(this.b,this.c,x)},
gke(){var x=this.a.b
return new A.aF(x,x,x,x)},
bi(d){var x=this.a.bi(d)
return new B.iu(this.b*d,this.c.ac(0,d),x)},
e1(d,e){var x,w
if(d instanceof B.iu){x=A.lo(d.c,this.c,e)
x.toString
w=A.be(d.a,this.a,e)
return new B.iu(d.b,x,w)}return this.Cj(d,e)},
e2(d,e){var x,w
if(d instanceof B.iu){x=A.lo(this.c,d.c,e)
x.toString
w=A.be(this.a,d.a,e)
return new B.iu(d.b,x,w)}return this.Ck(d,e)},
jc(d,e){var x=A.cc($.a5().r)
x.aW(new A.eY(this.c.dG(d).ds(-this.a.b)))
return x},
ei(d,e){var x=A.cc($.a5().r)
x.aW(new A.eY(this.c.dG(d)))
return x},
j3(d,e,f,g){d.fi(this.c.dG(e),f)},
gi1(){return!0},
wa(a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this.a,a6=a5.i5(),a7=this.c.dG(a9)
a5=a5.b/2
x=a7.ds(-a5)
if(b2==null||b0<=0||b1===0)a8.fi(x,a6)
else{w=this.b
v=A.a6(0,b0+w*2,b1)
v.toString
switch(b3.a){case 0:w=b2+w-v
break
case 1:w=b2-w
break
default:w=null}u=a7.c-a7.a
w=Math.max(0,w)
t=x.IW()
s=t.a
r=t.b
q=t.e
p=t.f
o=t.c
n=t.r
m=n*2
l=o-m
k=t.w
j=new A.G(l,r,l+m,r+k*2)
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
a3=A.cc($.a5().r)
if(!new A.aY(q,p).k(0,C.F))a3.aW(new A.qt(new A.G(s,r,s+q*2,r+p*2),3.141592653589793,Math.acos(A.K(1-w/q,0,1))))
else a3.aW(new A.h9(s-a5,r))
if(w>q)a3.aW(new A.cR(w,r))
a5=w+v
if(a5<u-n){a3.aW(new A.h9(a5,r))
a3.aW(new A.cR(o-n,r))
if(!new A.aY(n,k).k(0,C.F))a3.aW(new A.qt(j,4.71238898038469,1.5707963267948966))}else if(a5<u){a4=Math.asin(A.K(1-(u-a5)/n,0,1))
a3.aW(new A.qt(j,4.71238898038469+a4,1.5707963267948966-a4))}if(!new A.aY(m,g).k(0,C.F))a3.aW(new A.h9(o,r+k))
a3.aW(new A.cR(o,h-g))
if(!new A.aY(m,g).k(0,C.F))a3.aW(new A.qt(new A.G(i,e,i+l,e+f),0,1.5707963267948966))
a3.aW(new A.cR(s+a2,h))
if(!new A.aY(a2,d).k(0,C.F))a3.aW(new A.qt(new A.G(s,a1,s+a2*2,a1+a0),1.5707963267948966,1.5707963267948966))
a3.aW(new A.cR(s,r+p))
a8.iq(a3,a6)}},
fs(d,e,f){return this.wa(d,e,0,0,null,f)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.S(e)!==A.m(x))return!1
return e instanceof B.iu&&e.a.k(0,x.a)&&e.c.k(0,x.c)&&e.b===x.b},
gn(d){return A.O(this.a,this.c,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.jI.prototype={
M(){return"DismissDirection."+this.b}}
B.Gl.prototype={
a9(){var x=null
return new B.Oy(new A.bk(x,y.z),x,x,x)}}
B.OV.prototype={
M(){return"_FlingGestureKind."+this.b}}
B.Oy.prototype={
ap(){var x,w,v=this
v.ai5()
x=v.gly()
x.bK()
w=x.cU$
w.b=!0
w.a.push(v.gapI())
x.bK()
x.cz$.C(0,v.gapK())
v.NZ()},
gly(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.ca(null,C.Q,null,null,w)
w.d!==$&&A.aE()
w.d=x
v=x}return v},
goE(){var x=this.gly().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.gly().m()
var x=this.f
if(x!=null)x.m()
this.ai4()},
gkF(){var x=this.a.x
return x===D.n7||x===D.n8||x===D.n9},
qY(d){var x,w,v,u
if(d===0)return D.tD
if(this.gkF()){x=this.c.ai(y.o).w
A:{w=C.aa===x
if(w&&d<0){v=D.n9
break A}u=C.k===x
if(u&&d>0){v=D.n9
break A}if(!w)v=u
else v=!0
if(v){v=D.n8
break A}v=null}return v}return d>0?D.tC:D.V5},
gL0(){this.a.toString
D.ab9.h(0,this.qY(this.w))
return 0.4},
ga_U(){var x=this.c.gA()
x.toString
return this.gkF()?x.a:x.b},
amC(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.gly()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga_U()*J.eX(v.w)
x.fL()}else{v.w=0
x.sp(0)}v.ag(new B.aOT(v))},
amD(d){var x,w,v,u=this
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
case 2:switch(u.c.ai(y.o).w.a){case 0:x=u.w+x
if(x>0)u.w=x
break
case 1:x=u.w+x
if(x<0)u.w=x
break}break
case 3:switch(u.c.ai(y.o).w.a){case 0:x=u.w+x
if(x<0)u.w=x
break
case 1:x=u.w+x
if(x>0)u.w=x
break}break
case 6:u.w=0
break}if(J.eX(w)!==J.eX(u.w))u.ag(new B.aOU(u))
x=u.gly()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga_U())},
apL(){this.a.toString},
NZ(){var x=this,w=J.eX(x.w),v=x.gly(),u=x.gkF(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.aD(y.v.a(v),new A.ay(C.h,u,t),t.i("aD<aB.T>"))},
amp(d){var x,w,v,u,t=this
if(t.w===0)return D.qs
x=d.a
w=x.a
v=x.b
if(t.gkF()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return D.qs
u=t.qY(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return D.qs
u=t.qY(v)}if(u===t.qY(t.w))return D.arc
return D.ard},
amB(d){var x,w,v,u,t=this
if(t.y){x=t.gly().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.gly()
if(x.gbn()===C.ao){t.xX()
return}w=d.c
v=w.a
u=t.gkF()?v.a:v.b
switch(t.amp(w).a){case 1:if(t.gL0()>=1){x.dO()
break}t.w=J.eX(u)
x.zW(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.eX(u)
x.zW(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbn()!==C.W){w=x.x
w===$&&A.a()
if(w>t.gL0())x.cn()
else x.dO()}break}},
Da(d){return this.apJ(d)},
apJ(d){var x=0,w=A.w(y.q),v=this
var $async$Da=A.x(function(e,f){if(e===1)return A.t(f,w)
for(;;)switch(x){case 0:x=d===C.ao&&!v.y?2:3
break
case 2:x=4
return A.p(v.xX(),$async$Da)
case 4:case 3:if(v.c!=null)v.oC()
return A.u(null,w)}})
return A.v($async$Da,w)},
xX(){var x=0,w=A.w(y.q),v,u=this,t
var $async$xX=A.x(function(d,e){if(d===1)return A.t(e,w)
for(;;)switch(x){case 0:if(u.gL0()>=1){u.gly().dO()
x=1
break}x=3
return A.p(u.CE(),$async$xX)
case 3:t=e
if(u.c!=null)if(t)u.az8()
else u.gly().dO()
case 1:return A.u(v,w)}})
return A.v($async$xX,w)},
CE(){var x=0,w=A.w(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$CE=A.x(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.qY(r.w)
u=5
x=8
return A.p(r.a.f.$1(q),$async$CE)
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
return A.v($async$CE,w)},
az8(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.qY(w.w)
w.a.w.$1(x)}}else{v=A.ca(null,u,null,null,w)
v.bK()
v.cz$.C(0,w.garq())
v.bK()
u=v.cU$
u.b=!0
u.a.push(new B.aOV(w))
w.f=v
v.cn()
w.ag(new B.aOW(w))}},
arr(){var x=this,w=x.f.gbn(),v=x.a
if(w===C.ao){w=v.w
if(w!=null)w.$1(x.qY(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.u5(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkF()?C.ac:C.aq
v=p.z
return new B.a4a(x,new A.br(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.tc(new A.oU(x.c,p.as),w,o,!0)
if(x.x===D.tD)return u
w=p.gkF()?p.gY2():o
v=p.gkF()?p.gY3():o
t=p.gkF()?p.gY1():o
s=p.gkF()?o:p.gY2()
r=p.gkF()?o:p.gY3()
q=p.gkF()?o:p.gY1()
return A.ht(x.ax,u,C.P,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.Sn.prototype={
bN(){this.cD()
this.co()
this.eC()},
m(){var x=this,w=x.bl$
if(w!=null)w.O(x.ger())
x.bl$=null
x.aE()}}
B.So.prototype={
ap(){this.aN()
if(this.goE())this.p6()},
ek(){var x=this.fo$
if(x!=null){x.aA()
x.cS()
this.fo$=null}this.lr()}}
B.a4a.prototype={
G(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new A.hN(0,-1)
break
case 1:x=new A.hN(-1,0)
break
default:x=u}w=t===C.ac?Math.max(y.v.a(v.c).gp(),0):u
t=t===C.aq?Math.max(y.v.a(v.c).gp(),0):u
return A.qK(new A.cX(x,t,w,v.w,u),C.x,u)}}
var z=a.updateTypes(["~()","~(fJ)","~(ku)","~(fh)","a0<~>(h0)"])
B.aOT.prototype={
$0(){this.a.NZ()},
$S:0}
B.aOU.prototype={
$0(){this.a.NZ()},
$S:0}
B.aOV.prototype={
$1(d){return this.a.oC()},
$S:8}
B.aOW.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gA()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aD(w.a(new A.aD(w.a(x),new A.iV(D.Yg),y.n.i("aD<aB.T>"))),new A.ay(1,0,v),v.i("aD<aB.T>"))},
$S:0};(function aliases(){var x=B.Sn.prototype
x.ai4=x.m
x=B.So.prototype
x.ai5=x.ap})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Oy.prototype,"gY2","amC",1)
x(v,"gY3","amD",2)
w(v,"gapK","apL",0)
x(v,"gY1","amB",3)
x(v,"gapI","Da",4)
w(v,"garq","arr",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.iu,E.ir)
v(A.hH,[B.jI,B.OV])
w(B.Gl,A.T)
w(B.Sn,A.X)
w(B.So,B.Sn)
w(B.Oy,B.So)
v(A.eZ,[B.aOT,B.aOU,B.aOW])
w(B.aOV,A.dr)
w(B.a4a,A.un)
x(B.Sn,A.dL)
x(B.So,A.mz)})()
A.di(b.typeUniverse,JSON.parse('{"iu":{"ir":[],"co":[]},"Gl":{"T":[],"e":[]},"Oy":{"X":["Gl"]},"a4a":{"T":[],"e":[]}}'))
var y={v:A.R("bD<J>"),n:A.R("iV"),o:A.R("f2"),z:A.R("bk<X<T>>"),A:A.R("ay<j>"),g:A.R("ay<J>"),e:A.R("z"),q:A.R("~")};(function constants(){D.qI=new A.eH(-1,1)
D.iS=new A.aj(0,1/0,0,1/0)
D.n7=new B.jI(1,"horizontal")
D.n8=new B.jI(2,"endToStart")
D.n9=new B.jI(3,"startToEnd")
D.V5=new B.jI(4,"up")
D.tC=new B.jI(5,"down")
D.tD=new B.jI(6,"none")
D.ni=new A.aF(12,0,12,0)
D.un=new A.cC(57689,"MaterialIcons",!1)
D.Yg=new A.dV(0.4,1,C.b4)
D.ab9=new A.a8(C.bX,[],A.R("a8<jI,J>"))
D.qs=new B.OV(0,"none")
D.arc=new B.OV(1,"forward")
D.ard=new B.OV(2,"reverse")})()};
(a=>{a["3ElTTijpvOF++D6H1vQE2V1vR4o="]=a.current})($__dart_deferred_initializers__);