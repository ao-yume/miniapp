((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b87(d,e,f,g,h,i,j){return new B.HG(e,f,i,g,j,d,h)},
ka:function ka(d,e){this.a=d
this.b=e},
HG:function HG(d,e,f,g,h,i,j){var _=this
_.c=d
_.f=e
_.w=f
_.x=g
_.y=h
_.ax=i
_.a=j},
QJ:function QJ(d,e){this.a=d
this.b=e},
Qn:function Qn(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.fA$=e
_.dA$=f
_.bk$=g
_.c=_.a=null},
aTc:function aTc(d){this.a=d},
aTd:function aTd(d){this.a=d},
aTe:function aTe(d){this.a=d},
aTf:function aTf(d){this.a=d},
Ui:function Ui(){},
Uj:function Uj(){},
a6h:function a6h(d,e,f,g){var _=this
_.e=d
_.x=e
_.c=f
_.a=g}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[47],B)
C=c[133]
B.ka.prototype={
L(){return"DismissDirection."+this.b}}
B.HG.prototype={
a7(){var x=null
return new B.Qn(new A.bl(x,y.z),x,x,x)}}
B.QJ.prototype={
L(){return"_FlingGestureKind."+this.b}}
B.Qn.prototype={
ap(){var x,w,v=this
v.ajH()
x=v.glH()
x.bF()
w=x.cW$
w.b=!0
w.a.push(v.garL())
x.bF()
x.cn$.C(0,v.garN())
v.P3()},
glH(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.cf(null,D.Q,null,null,w)
w.d!==$&&A.aI()
w.d=x
v=x}return v},
gp6(){var x=this.glH().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
m(){this.glH().m()
var x=this.f
if(x!=null)x.m()
this.ajG()},
gkS(){var x=this.a.x
return x===C.nK||x===C.nL||x===C.nM},
rv(d){var x,w,v,u
if(d===0)return C.uf
if(this.gkS()){x=this.c.al(y.o).w
A:{w=D.ak===x
if(w&&d<0){v=C.nM
break A}u=D.j===x
if(u&&d>0){v=C.nM
break A}if(!w)v=u
else v=!0
if(v){v=C.nL
break A}v=null}return v}return d>0?C.ue:C.Wk},
gM_(){this.a.toString
C.acu.h(0,this.rv(this.w))
return 0.4},
ga15(){var x=this.c.gv()
x.toString
return this.gkS()?x.a:x.b},
aov(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.glH()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&A.a()
v.w=w*v.ga15()*J.fc(v.w)
x.fH()}else{v.w=0
x.sp(0)}v.ak(new B.aTc(v))},
aow(d){var x,w,v,u=this
if(u.y){x=u.glH().r
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
break}if(J.fc(w)!==J.fc(u.w))u.ak(new B.aTd(u))
x=u.glH()
v=x.r
if(!(v!=null&&v.a!=null))x.sp(Math.abs(u.w)/u.ga15())},
arO(){this.a.toString},
P3(){var x=this,w=J.fc(x.w),v=x.glH(),u=x.gkS(),t=x.a
if(u){t.toString
u=new A.j(w,0)}else{t.toString
u=new A.j(0,w)}t=y.A
x.e=new A.aC(y.v.a(v),new A.ay(D.h,u,t),t.i("aC<aE.T>"))},
aoi(d){var x,w,v,u,t=this
if(t.w===0)return C.r0
x=d.a
w=x.a
v=x.b
if(t.gkS()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.r0
u=t.rv(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.r0
u=t.rv(v)}if(u===t.rv(t.w))return C.atx
return C.aty},
aou(d){var x,w,v,u,t=this
if(t.y){x=t.glH().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.glH()
if(x.gbr()===D.aB){t.yL()
return}w=d.c
v=w.a
u=t.gkS()?v.a:v.b
switch(t.aoi(w).a){case 1:if(t.gM_()>=1){x.dS()
break}t.w=J.fc(u)
x.AB(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fc(u)
x.AB(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gbr()!==D.a2){w=x.x
w===$&&A.a()
if(w>t.gM_())x.ck()
else x.dS()}break}},
E0(d){return this.arM(d)},
arM(d){var x=0,w=A.v(y.q),v=this
var $async$E0=A.w(function(e,f){if(e===1)return A.r(f,w)
for(;;)switch(x){case 0:x=d===D.aB&&!v.y?2:3
break
case 2:x=4
return A.o(v.yL(),$async$E0)
case 4:case 3:if(v.c!=null)v.p0()
return A.t(null,w)}})
return A.u($async$E0,w)},
yL(){var x=0,w=A.v(y.q),v,u=this,t
var $async$yL=A.w(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:if(u.gM_()>=1){u.glH().dS()
x=1
break}x=3
return A.o(u.Ds(),$async$yL)
case 3:t=e
if(u.c!=null)if(t)u.aBl()
else u.glH().dS()
case 1:return A.t(v,w)}})
return A.u($async$yL,w)},
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
aBl(){var x,w=this,v=w.a,u=v.y
if(u==null){if(v.w!=null){x=w.rv(w.w)
w.a.w.$1(x)}}else{v=A.cf(null,u,null,null,w)
v.bF()
v.cn$.C(0,w.gats())
v.bF()
u=v.cW$
u.b=!0
u.a.push(new B.aTe(w))
w.f=v
v.ck()
w.ak(new B.aTf(w))}},
att(){var x=this,w=x.f.gbr(),v=x.a
if(w===D.aB){w=v.w
if(w!=null)w.$1(x.rv(x.w))}else v.toString},
F(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.uC(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkS()?D.Y:D.a9
v=p.z
return new B.a6h(x,new A.bm(v.a,v.b,o,o),w,o)}w=p.e
w===$&&A.a()
u=A.u8(new A.pw(x.c,p.as),w,o,!0)
if(x.x===C.uf)return u
w=p.gkS()?p.gZd():o
v=p.gkS()?p.gZe():o
t=p.gkS()?p.gZc():o
s=p.gkS()?o:p.gZd()
r=p.gkS()?o:p.gZe()
q=p.gkS()?o:p.gZc()
return A.hq(x.ax,u,D.K,!1,o,o,o,o,t,w,v,o,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
B.Ui.prototype={
bJ(){this.cs()
this.ci()
this.eA()},
m(){var x=this,w=x.bk$
if(w!=null)w.N(x.geo())
x.bk$=null
x.aD()}}
B.Uj.prototype={
ap(){this.aI()
if(this.gp6())this.pt()},
ep(){var x=this.fA$
if(x!=null){x.aC()
x.d6()
this.fA$=null}this.lA()}}
B.a6h.prototype={
F(d){var x,w,v=this,u=null,t=u
switch(v.e.a){case 0:t=new A.i4(0,-1)
break
case 1:t=new A.i4(-1,0)
break}x=v.e
w=x===D.Y?Math.max(y.v.a(v.c).gp(),0):u
x=x===D.a9?Math.max(y.v.a(v.c).gp(),0):u
return A.oZ(new A.d6(t,x,w,v.x,u),D.v,u)}}
var z=a.updateTypes(["~()","~(h0)","~(kX)","~(fC)","a2<~>(hj)"])
B.aTc.prototype={
$0(){this.a.P3()},
$S:0}
B.aTd.prototype={
$0(){this.a.P3()},
$S:0}
B.aTe.prototype={
$1(d){return this.a.p0()},
$S:9}
B.aTf.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gv()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aC(w.a(new A.aC(w.a(x),new A.iH(C.a_2),y.n.i("aC<aE.T>"))),new A.ay(1,0,v),v.i("aC<aE.T>"))},
$S:0};(function aliases(){var x=B.Ui.prototype
x.ajG=x.m
x=B.Uj.prototype
x.ajH=x.ap})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Qn.prototype,"gZd","aov",1)
x(v,"gZe","aow",2)
w(v,"garN","arO",0)
x(v,"gZc","aou",3)
x(v,"garL","E0",4)
w(v,"gats","att",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.eD,[B.ka,B.QJ])
v(B.HG,A.S)
v(B.Ui,A.U)
v(B.Uj,B.Ui)
v(B.Qn,B.Uj)
w(A.du,[B.aTc,B.aTd,B.aTf])
v(B.aTe,A.ce)
v(B.a6h,A.vq)
x(B.Ui,A.dN)
x(B.Uj,A.n7)})()
A.bX(b.typeUniverse,JSON.parse('{"HG":{"S":[],"c":[]},"Qn":{"U":["HG"]},"a6h":{"S":[],"c":[]}}'))
var y={v:A.I("bu<H>"),n:A.I("iH"),o:A.I("ej"),z:A.I("bl<U<S>>"),A:A.I("ay<j>"),g:A.I("ay<H>"),e:A.I("z"),q:A.I("~")};(function constants(){C.nK=new B.ka(1,"horizontal")
C.nL=new B.ka(2,"endToStart")
C.nM=new B.ka(3,"startToEnd")
C.Wk=new B.ka(4,"up")
C.ue=new B.ka(5,"down")
C.uf=new B.ka(6,"none")
C.a_2=new A.dT(0.4,1,D.aY)
C.acu=new A.ab(D.c7,[],A.I("ab<ka,H>"))
C.r0=new B.QJ(0,"none")
C.atx=new B.QJ(1,"forward")
C.aty=new B.QJ(2,"reverse")})()};
(a=>{a["rUkO8QgZehf2V21261ZdV9chNGo="]=a.current})($__dart_deferred_initializers__);