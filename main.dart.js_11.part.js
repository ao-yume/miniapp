((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
ba1(d,e,f,g,h,i,j){return new B.J3(e,f,i,g,j,d,h)},
kg:function kg(d,e){this.a=d
this.b=e},
J3:function J3(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
Rh:function Rh(d,e){this.a=d
this.b=e},
QP:function QP(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fD$=e
_.dB$=f
_.bm$=g
_.c=_.a=null},
aUz:function aUz(d){this.a=d},
aUA:function aUA(d){this.a=d},
aUB:function aUB(d){this.a=d},
aUC:function aUC(d){this.a=d},
V_:function V_(){},
V0:function V0(){},
a6V:function a6V(d,e,f,g){var _=this
_.e=d
_.x=e
_.c=f
_.a=g}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[47],B)
C=c[135]
B.kg.prototype={
K(){return"DismissDirection."+this.b}}
B.J3.prototype={
a5(){var x=null
return new B.QP(new A.bo(x,y.z),x,x,x)}}
B.Rh.prototype={
K(){return"_FlingGestureKind."+this.b}}
B.QP.prototype={
an(){var x,w,v=this
v.ajS()
x=v.glB()
x.bH()
w=x.d0$
w.b=!0
w.a.push(v.gash())
x.bH()
x.cs$.C(0,v.gasj())
v.P8()},
glB(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.ci(null,D.N,null,null,w)
w.d!==$&&A.aH()
w.d=x
v=x}return v},
goP(){var x=this.glB().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.glB().m()
var x=this.f
if(x!=null)x.m()
this.ajR()},
gkJ(){var x=this.a.x
return x===C.o_||x===C.o0||x===C.o1},
rp(d){var x,w,v,u
if(d===0)return C.uv
if(this.gkJ()){x=this.c.ae(y.o).w
A:{w=D.ao===x
if(w&&d<0){v=C.o1
break A}u=D.n===x
if(u&&d>0){v=C.o1
break A}if(!w)v=u
else v=!0
if(v){v=C.o0
break A}v=null}return v}return d>0?C.uu:C.Xc},
gLY(){this.a.toString
C.adV.h(0,this.rp(this.w))
return 0.4},
ga1a(){var x=this.c.gv()
x.toString
return this.gkJ()?x.a:x.b},
aoQ(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glB()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga1a()*J.fi(v.w)
x.fK()}else{v.w=0
x.sp(0)}v.ag(new B.aUz(v))},
aoR(d){var x,w,v,u=this
if(u.y){x=u.glB().r
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
case 2:switch(u.c.ae(y.o).w.a){case 0:x=u.w+x
if(x>0)u.w=x
break
case 1:x=u.w+x
if(x<0)u.w=x
break}break
case 3:switch(u.c.ae(y.o).w.a){case 0:x=u.w+x
if(x<0)u.w=x
break
case 1:x=u.w+x
if(x>0)u.w=x
break}break
case 6:u.w=0
break}if(J.fi(w)!==J.fi(u.w))u.ag(new B.aUA(u))
x=u.glB()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga1a())},
ask(){this.a.toString},
P8(){var x=this,w=J.fi(x.w),v=x.glB(),u=x.gkJ(),t=x.a
if(u){t.toString
u=new A.k(w,0)}else{t.toString
u=new A.k(0,w)}t=y.A
x.e=new A.aA(y.v.a(v),new A.as(D.i,u,t),t.i("aA<aD.T>"))},
aoE(d){var x,w,v,u,t=this
if(t.w===0)return C.rh
x=d.a
w=x.a
v=x.b
if(t.gkJ()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.rh
u=t.rp(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.rh
u=t.rp(v)}if(u===t.rp(t.w))return C.av7
return C.av8},
aoP(d){var x,w,v,u,t=this
if(t.y){x=t.glB().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glB()
if(x.gbq()===D.aE){t.yD()
return}w=d.c
v=w.a
u=t.gkJ()?v.a:v.b
switch(t.aoE(w).a){case 1:if(t.gLY()>=1){x.e_()
break}t.w=J.fi(u)
x.Au(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fi(u)
x.Au(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbq()!==D.aa){w=x.x
w===$&&A.a()
if(w>t.gLY())x.cC()
else x.e_()}break}},
DW(d){return this.asi(d)},
asi(d){var x=0,w=A.v(y.q),v=this
var $async$DW=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.aE&&!v.y?2:3
break
case 2:x=4
return A.o(v.yD(),$async$DW)
case 4:case 3:if(v.c!=null)v.oO()
return A.t(null,w)}})
return A.u($async$DW,w)},
yD(){var x=0,w=A.v(y.q),v,u=this,t
var $async$yD=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gLY()>=1){u.glB().e_()
x=1
break}x=3
return A.o(u.Dm(),$async$yD)
case 3:t=e
if(u.c!=null)if(t)u.aCb()
else u.glB().e_()
case 1:return A.t(v,w)}})
return A.u($async$yD,w)},
Dm(){var x=0,w=A.v(y.e),v,u=2,t=[],s=[],r=this,q,p
var $async$Dm=A.w(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=r.a.f!=null?3:4
break
case 3:r.x=!0
q=r.rp(r.w)
u=5
x=8
return A.o(r.a.f.$1(q),$async$Dm)
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
return A.u($async$Dm,w)},
aCb(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rp(w.w)
w.a.w.$1(x)}}else{v=A.ci(null,u,null,null,w)
v.bH()
v.cs$.C(0,w.gatZ())
v.bH()
u=v.d0$
u.b=!0
u.a.push(new B.aUB(w))
w.f=v
v.cC()
w.ag(new B.aUC(w))}},
au_(){var x=this,w=x.f.gbq(),v=x.a
if(w===D.aE){w=v.w
if(w!=null)w.$1(x.rp(x.w))}else v.toString},
G(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.ut(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkJ()?D.a4:D.ag
v=p.z
return new B.a6V(x,new A.b7(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.qI(new A.q0(x.c,p.as),w,o,!0)
if(x.x===C.uv)return u
w=p.gkJ()?p.gZb():o
v=p.gkJ()?p.gZc():o
t=p.gkJ()?p.gZa():o
s=p.gkJ()?o:p.gZb()
r=p.gkJ()?o:p.gZc()
q=p.gkJ()?o:p.gZa()
return A.hb(x.ax,u,D.O,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.V_.prototype={
bQ(){this.cA()
this.co()
this.eG()},
m(){var x=this,w=x.bm$
if(w!=null)w.N(x.ges())
x.bm$=null
x.aA()}}
B.V0.prototype={
an(){this.aD()
if(this.goP())this.ph()},
eJ(){var x=this.fD$
if(x!=null){x.aH()
x.dd()
this.fD$=null}this.lt()}}
B.a6V.prototype={
G(d){var x,w,v=this,u=null,t=u
switch(v.e.a){case 0:t=new A.id(0,-1)
break
case 1:t=new A.id(-1,0)
break}x=v.e
w=x===D.a4?Math.max(y.v.a(v.c).gp(),0):u
x=x===D.ag?Math.max(y.v.a(v.c).gp(),0):u
return A.pr(new A.cX(t,x,w,v.x,u),D.u,u)}}
var z=a.updateTypes(["~()","~(h8)","~(ld)","~(fM)","a3<~>(fK)"])
B.aUz.prototype={
$0(){this.a.P8()},
$S:0}
B.aUA.prototype={
$0(){this.a.P8()},
$S:0}
B.aUB.prototype={
$1(d){return this.a.oO()},
$S:10}
B.aUC.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aA(w.a(new A.aA(w.a(x),new A.iN(C.a0m),y.n.i("aA<aD.T>"))),new A.as(1,0,v),v.i("aA<aD.T>"))},
$S:0};(function aliases(){var x=B.V_.prototype
x.ajR=x.m
x=B.V0.prototype
x.ajS=x.an})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.QP.prototype,"gZb","aoQ",1)
x(v,"gZc","aoR",2)
w(v,"gasj","ask",0)
x(v,"gZa","aoP",3)
x(v,"gash","DW",4)
w(v,"gatZ","au_",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eK,[B.kg,B.Rh])
v(B.J3,A.R)
v(B.V_,A.V)
v(B.V0,B.V_)
v(B.QP,B.V0)
w(A.dz,[B.aUz,B.aUA,B.aUC])
v(B.aUB,A.cf)
v(B.a6V,A.vM)
x(B.V_,A.dS)
x(B.V0,A.np)})()
A.bX(b.typeUniverse,JSON.parse('{"J3":{"R":[],"c":[]},"QP":{"V":["J3"]},"a6V":{"R":[],"c":[]}}'))
var y={v:A.G("bi<D>"),n:A.G("iN"),o:A.G("ef"),z:A.G("bo<V<R>>"),A:A.G("as<k>"),g:A.G("as<D>"),e:A.G("y"),q:A.G("~")};(function constants(){C.o_=new B.kg(1,"horizontal")
C.o0=new B.kg(2,"endToStart")
C.o1=new B.kg(3,"startToEnd")
C.Xc=new B.kg(4,"up")
C.uu=new B.kg(5,"down")
C.uv=new B.kg(6,"none")
C.a0m=new A.dY(0.4,1,D.b2)
C.adV=new A.ad(D.cj,[],A.G("ad<kg,D>"))
C.rh=new B.Rh(0,"none")
C.av7=new B.Rh(1,"forward")
C.av8=new B.Rh(2,"reverse")})()};
(a=>{a["Mb72UvVt991ckdC82DuDbguvqpA="]=a.current})($__dart_deferred_initializers__);