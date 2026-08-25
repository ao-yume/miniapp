((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
bfy(d,e,f,g,h,i,j){return new B.Kn(e,f,i,g,j,d,h)},
kl:function kl(d,e){this.a=d
this.b=e},
Kn:function Kn(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
Tk:function Tk(d,e){this.a=d
this.b=e},
SU:function SU(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.eS$=e
_.d5$=f
_.aY$=g
_.c=_.a=null},
aZw:function aZw(d){this.a=d},
aZx:function aZx(d){this.a=d},
aZy:function aZy(d){this.a=d},
aZz:function aZz(d){this.a=d},
Xk:function Xk(){},
Xl:function Xl(){},
a9y:function a9y(d,e,f,g){var _=this
_.e=d
_.x=e
_.c=f
_.a=g}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[47],B)
C=c[138]
B.kl.prototype={
I(){return"DismissDirection."+this.b}}
B.Kn.prototype={
V(){var x=null
return new B.SU(new A.bl(x,y.z),x,x,x)}}
B.Tk.prototype={
I(){return"_FlingGestureKind."+this.b}}
B.SU.prototype={
ag(){var x,w,v=this
v.akN()
x=v.glG()
x.bd()
w=x.cp$
w.b=!0
w.a.push(v.gatj())
x.bd()
x.bZ$.C(0,v.gatl())
v.PG()},
glG(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.bV(null,D.I,null,null,w)
w.d!==$&&A.aI()
w.d=x
v=x}return v},
gmp(){var x=this.glG().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
l(){this.glG().l()
var x=this.f
if(x!=null)x.l()
this.akM()},
gkO(){var x=this.a.x
return x===C.oU||x===C.oV||x===C.oW},
rG(d){var x,w,v,u
if(d===0)return C.vH
if(this.gkO()){x=this.c.a8(y.o).w
A:{w=D.aq===x
if(w&&d<0){v=C.oW
break A}u=D.m===x
if(u&&d>0){v=C.oW
break A}if(!w)v=u
else v=!0
if(v){v=C.oV
break A}v=null}return v}return d>0?C.vG:C.a0B},
gMA(){this.a.toString
C.aih.h(0,this.rG(this.w))
return 0.4},
ga2h(){var x=this.c.gv()
x.toString
return this.gkO()?x.a:x.b},
apS(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glG()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga2h()*J.f8(v.w)
x.fs()}else{v.w=0
x.sp(0)}v.ab(new B.aZw(v))},
apT(d){var x,w,v,u=this
if(u.y){x=u.glG().r
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
case 2:switch(u.c.a8(y.o).w.a){case 0:x=u.w+x
if(x>0)u.w=x
break
case 1:x=u.w+x
if(x<0)u.w=x
break}break
case 3:switch(u.c.a8(y.o).w.a){case 0:x=u.w+x
if(x<0)u.w=x
break
case 1:x=u.w+x
if(x>0)u.w=x
break}break
case 6:u.w=0
break}if(J.f8(w)!==J.f8(u.w))u.ab(new B.aZx(u))
x=u.glG()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga2h())},
atm(){this.a.toString},
PG(){var x=this,w=J.f8(x.w),v=x.glG(),u=x.gkO(),t=x.a
if(u){t.toString
u=new A.k(w,0)}else{t.toString
u=new A.k(0,w)}t=y.A
x.e=new A.a8(y.v.a(v),new A.an(D.i,u,t),t.i("a8<ai.T>"))},
apG(d){var x,w,v,u,t=this
if(t.w===0)return C.td
x=d.a
w=x.a
v=x.b
if(t.gkO()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.td
u=t.rG(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.td
u=t.rG(v)}if(u===t.rG(t.w))return C.ax3
return C.ax4},
apR(d){var x,w,v,u,t=this
if(t.y){x=t.glG().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glG()
if(x.gba()===D.az){t.yW()
return}w=d.c
v=w.a
u=t.gkO()?v.a:v.b
switch(t.apG(w).a){case 1:if(t.gMA()>=1){x.dI()
break}t.w=J.f8(u)
x.AU(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.f8(u)
x.AU(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gba()!==D.a5){w=x.x
w===$&&A.a()
if(w>t.gMA())x.c2()
else x.dI()}break}},
Es(d){return this.atk(d)},
atk(d){var x=0,w=A.w(y.q),v=this
var $async$Es=A.x(function(e,f){if(e===1)return A.t(f,w)
for(;;)switch(x){case 0:x=d===D.az&&!v.y?2:3
break
case 2:x=4
return A.p(v.yW(),$async$Es)
case 4:case 3:if(v.c!=null)v.kA()
return A.u(null,w)}})
return A.v($async$Es,w)},
yW(){var x=0,w=A.w(y.q),v,u=this,t
var $async$yW=A.x(function(d,e){if(d===1)return A.t(e,w)
for(;;)switch(x){case 0:if(u.gMA()>=1){u.glG().dI()
x=1
break}x=3
return A.p(u.DT(),$async$yW)
case 3:t=e
if(u.c!=null)if(t)u.aDM()
else u.glG().dI()
case 1:return A.u(v,w)}})
return A.v($async$yW,w)},
DT(){var x=0,w=A.w(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$DT=A.x(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rG(r.w)
u=5
x=8
return A.p(r.a.f.$1(q),$async$DT)
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
return A.v($async$DT,w)},
aDM(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rG(w.w)
w.a.w.$1(x)}}else{v=A.bV(null,u,null,null,w)
v.bd()
v.bZ$.C(0,w.gav1())
v.bd()
u=v.cp$
u.b=!0
u.a.push(new B.aZy(w))
w.f=v
v.c2()
w.ab(new B.aZz(w))}},
av2(){var x=this,w=x.f.gba(),v=x.a
if(w===D.az){w=v.w
if(w!=null)w.$1(x.rG(x.w))}else v.toString},
D(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.rs(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkO()?D.a3:D.ah
v=p.z
return new B.a9y(x,new A.bd(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.j9(new A.ox(x.c,p.as),w,o,!0)
if(x.x===C.vH)return u
w=p.gkO()?p.ga_g():o
v=p.gkO()?p.ga_h():o
t=p.gkO()?p.ga_f():o
s=p.gkO()?o:p.ga_g()
r=p.gkO()?o:p.ga_h()
q=p.gkO()?o:p.ga_f()
return A.hg(x.ax,u,D.R,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.Xk.prototype={
bh(){this.c0()
this.bV()
this.dY()},
l(){var x=this,w=x.aY$
if(w!=null)w.K(x.gdL())
x.aY$=null
x.am()}}
B.Xl.prototype={
ag(){this.ao()
if(this.gmp())this.nT()},
dO(){var x=this.eS$
if(x!=null){x.au()
x.cS()
this.eS$=null}this.jl()}}
B.a9y.prototype={
D(d){var x,w,v=this,u=null,t=u
switch(v.e.a){case 0:t=new A.iq(0,-1)
break
case 1:t=new A.iq(-1,0)
break}x=v.e
w=x===D.a3?Math.max(y.v.a(v.c).gp(),0):u
x=x===D.ah?Math.max(y.v.a(v.c).gp(),0):u
return A.pR(new A.d3(t,x,w,v.x,u),D.u,u)}}
var z=a.updateTypes(["~()","~(hc)","~(lr)","~(fR)","a4<~>(fa)"])
B.aZw.prototype={
$0(){this.a.PG()},
$S:0}
B.aZx.prototype={
$0(){this.a.PG()},
$S:0}
B.aZy.prototype={
$1(d){return this.a.kA()},
$S:7}
B.aZz.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.a8(w.a(new A.a8(w.a(x),new A.hA(C.a4O),y.n.i("a8<ai.T>"))),new A.an(1,0,v),v.i("a8<ai.T>"))},
$S:0};(function aliases(){var x=B.Xk.prototype
x.akM=x.l
x=B.Xl.prototype
x.akN=x.ag})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.SU.prototype,"ga_g","apS",1)
x(v,"ga_h","apT",2)
w(v,"gatl","atm",0)
x(v,"ga_f","apR",3)
x(v,"gatj","Es",4)
w(v,"gav1","av2",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ev,[B.kl,B.Tk])
v(B.Kn,A.S)
v(B.Xk,A.U)
v(B.Xl,B.Xk)
v(B.SU,B.Xl)
w(A.dA,[B.aZw,B.aZx,B.aZz])
v(B.aZy,A.ch)
v(B.a9y,A.wk)
x(B.Xk,A.dx)
x(B.Xl,A.my)})()
A.bX(b.typeUniverse,JSON.parse('{"Kn":{"S":[],"d":[]},"SU":{"U":["Kn"]},"a9y":{"S":[],"d":[]}}'))
var y={v:A.J("b5<C>"),n:A.J("hA"),o:A.J("ee"),z:A.J("bl<U<S>>"),A:A.J("an<k>"),g:A.J("an<C>"),e:A.J("z"),q:A.J("~")};(function constants(){C.oU=new B.kl(1,"horizontal")
C.oV=new B.kl(2,"endToStart")
C.oW=new B.kl(3,"startToEnd")
C.a0B=new B.kl(4,"up")
C.vG=new B.kl(5,"down")
C.vH=new B.kl(6,"none")
C.a4O=new A.e5(0.4,1,D.aW)
C.aih=new A.ag(D.cm,[],A.J("ag<kl,C>"))
C.td=new B.Tk(0,"none")
C.ax3=new B.Tk(1,"forward")
C.ax4=new B.Tk(2,"reverse")})()};
(a=>{a["Ko2Ij2odYEVb5aY91GiBKJpPKU4="]=a.current})($__dart_deferred_initializers__);