((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={r9:function r9(d,e){this.a=d
this.b=e},
VE(d,e,f,g,h,i,j,k){var x,w=null
if(k!=null){x=e==null?w:e.xe(w,k)
if(x==null)x=B.lX(w,k)}else x=e
return new A.FW(d,j,g,i,x,f,h,w,w)},
vD:function vD(d,e){this.a=d
this.b=e},
rD:function rD(d,e){this.a=d
this.b=e},
x3:function x3(d,e){this.a=d
this.b=e},
FW:function FW(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.c=i
_.d=j
_.e=k
_.a=l},
aam:function aam(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.e1$=d
_.bx$=e
_.c=_.a=null},
aPI:function aPI(){},
aPJ:function aPJ(){},
aPK:function aPK(){},
aPL:function aPL(){},
aPM:function aPM(){},
aPN:function aPN(){},
aPO:function aPO(){},
aPP:function aPP(){},
bgI(){var x=new Float64Array(4)
x[3]=1
return new A.q_(x)},
q_:function q_(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[56],A)
A.r9.prototype={
fD(d){return B.vo(this.a,this.b,d)}}
A.vD.prototype={
fD(d){var x=B.k8(this.a,this.b,d)
x.toString
return x}}
A.rD.prototype={
fD(d){var x=B.dF(this.a,this.b,d)
x.toString
return x}}
A.x3.prototype={
fD(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.hF(new Float64Array(3)),a3=new B.hF(new Float64Array(3)),a4=A.bgI(),a5=A.bgI(),a6=new B.hF(new Float64Array(3)),a7=new B.hF(new Float64Array(3))
this.a.a75(a2,a4,a6)
this.b.a75(a3,a5,a7)
x=1-a8
w=a2.nC(x).a5(0,a3.nC(a8))
v=a4.nC(x).a5(0,a5.nC(a8))
u=new Float64Array(4)
t=new A.q_(u)
t.cP(v)
t.Bi()
s=a6.nC(x).a5(0,a7.nC(a8))
x=new Float64Array(16)
v=new B.bt(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
x=s.a
v.kL(x[0],x[1],x[2],1)
return v}}
A.FW.prototype={
a6(){return new A.aam(null,null)}}
A.aam.prototype={
oz(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(t,u,new A.aPI()))
t=y.f
v.cx=t.a(d.$3(v.cx,v.a.x,new A.aPJ()))
w=y.d
v.cy=w.a(d.$3(v.cy,v.a.y,new A.aPK()))
v.db=w.a(d.$3(v.db,v.a.z,new A.aPL()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.aPM()))
w=v.dy
v.a.toString
v.dy=t.a(d.$3(w,u,new A.aPN()))
w=v.fr
v.a.toString
v.fr=y.w.a(d.$3(w,u,new A.aPO()))
w=v.fx
v.a.toString
v.fx=x.a(d.$3(w,u,new A.aPP()))},
F(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gfK(),n=q.CW
n=n==null?p:n.an(o.gp())
x=q.cx
x=x==null?p:x.an(o.gp())
w=q.cy
w=w==null?p:w.an(o.gp())
v=q.db
v=v==null?p:v.an(o.gp())
u=q.dx
u=u==null?p:u.an(o.gp())
t=q.dy
t=t==null?p:t.an(o.gp())
s=q.fr
s=s==null?p:s.an(o.gp())
r=q.fx
r=r==null?p:r.an(o.gp())
return B.b2(n,q.a.r,C.o,p,u,w,v,p,t,x,s,r,p)}}
A.q_.prototype={
cP(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.aj(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aet(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r.$flags&2&&B.aj(r)
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t.$flags&2&&B.aj(t)
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
Bi(){var x,w,v,u=Math.sqrt(this.gB1())
if(u===0)return 0
x=1/u
w=this.a
v=w[0]
w.$flags&2&&B.aj(w)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return u},
gB1(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gJ(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
nC(d){var x=new Float64Array(4),w=new A.q_(x)
w.cP(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
ai(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaRF(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
h=C.d.ai(g,a4)
x=C.d.ai(d,a1)
w=C.d.ai(e,a2)
v=C.d.ai(f,a3)
u=C.d.ai(g,a3)
t=C.d.ai(e,a1)
s=C.d.ai(f,a4)
r=C.d.ai(d,a2)
q=C.d.ai(g,a2)
p=C.d.ai(f,a1)
o=C.d.ai(d,a3)
n=C.d.ai(e,a4)
m=C.d.ai(g,a1)
l=C.d.ai(d,a4)
k=C.d.ai(e,a3)
j=C.d.ai(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.q_(i)},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.q_){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gn(d){return B.bz(this.a)},
a5(d,e){var x,w=new Float64Array(4),v=new A.q_(w)
v.cP(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a7(d,e){var x,w=new Float64Array(4),v=new A.q_(w)
v.cP(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
m(d,e,f){var x=this.a
x.$flags&2&&B.aj(x)
x[e]=f},
j(d){var x=this.a
return B.i(x[0])+", "+B.i(x[1])+", "+B.i(x[2])+" @ "+B.i(x[3])}}
var z=a.updateTypes(["r9(@)","rD(@)","vD(@)","x3(@)"])
A.aPI.prototype={
$1(d){return new A.r9(y.k.a(d),null)},
$S:z+0}
A.aPJ.prototype={
$1(d){return new A.rD(y.m.a(d),null)},
$S:z+1}
A.aPK.prototype={
$1(d){return new B.p7(y.r.a(d),null)},
$S:151}
A.aPL.prototype={
$1(d){return new B.p7(y.r.a(d),null)},
$S:151}
A.aPM.prototype={
$1(d){return new A.vD(y.a.a(d),null)},
$S:z+2}
A.aPN.prototype={
$1(d){return new A.rD(y.m.a(d),null)},
$S:z+1}
A.aPO.prototype={
$1(d){return new A.x3(y.E.a(d),null)},
$S:z+3}
A.aPP.prototype={
$1(d){return new A.r9(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aw,[A.r9,A.vD,A.rD,A.x3])
w(A.FW,B.rR)
w(A.aam,B.ra)
x(B.cc,[A.aPI,A.aPJ,A.aPK,A.aPL,A.aPM,A.aPN,A.aPO,A.aPP])
w(A.q_,B.C)})()
B.bW(b.typeUniverse,JSON.parse('{"r9":{"aw":["iE?"],"aD":["iE?"],"aw.T":"iE?","aD.T":"iE?"},"vD":{"aw":["ag"],"aD":["ag"],"aw.T":"ag","aD.T":"ag"},"rD":{"aw":["da"],"aD":["da"],"aw.T":"da","aD.T":"da"},"x3":{"aw":["bt"],"aD":["bt"],"aw.T":"bt","aD.T":"bt"},"FW":{"S":[],"c":[]},"aam":{"U":["FW"]}}'))
var y=(function rtii(){var x=B.F
return{k:x("iE"),a:x("ag"),r:x("iM"),m:x("da"),E:x("bt"),b:x("r9?"),e:x("vD?"),d:x("p7?"),f:x("rD?"),w:x("x3?")}})()};
(a=>{a["ZQ0XjAa8mJJfdqs5gZYTkdYvFkY="]=a.current})($__dart_deferred_initializers__);