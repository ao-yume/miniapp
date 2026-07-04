((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={r5:function r5(d,e){this.a=d
this.b=e},
Vy(d,e,f,g,h,i,j,k){var x,w=null
if(k!=null){x=e==null?w:e.xd(w,k)
if(x==null)x=B.lW(w,k)}else x=e
return new A.FR(d,j,g,i,x,f,h,w,w)},
vB:function vB(d,e){this.a=d
this.b=e},
rz:function rz(d,e){this.a=d
this.b=e},
x_:function x_(d,e){this.a=d
this.b=e},
FR:function FR(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.c=i
_.d=j
_.e=k
_.a=l},
aag:function aag(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.e_$=d
_.bx$=e
_.c=_.a=null},
aPA:function aPA(){},
aPB:function aPB(){},
aPC:function aPC(){},
aPD:function aPD(){},
aPE:function aPE(){},
aPF:function aPF(){},
aPG:function aPG(){},
aPH:function aPH(){},
bgk(){var x=new Float64Array(4)
x[3]=1
return new A.pW(x)},
pW:function pW(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
A.r5.prototype={
fC(d){return B.vn(this.a,this.b,d)}}
A.vB.prototype={
fC(d){var x=B.k6(this.a,this.b,d)
x.toString
return x}}
A.rz.prototype={
fC(d){var x=B.dF(this.a,this.b,d)
x.toString
return x}}
A.x_.prototype={
fC(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.hF(new Float64Array(3)),a3=new B.hF(new Float64Array(3)),a4=A.bgk(),a5=A.bgk(),a6=new B.hF(new Float64Array(3)),a7=new B.hF(new Float64Array(3))
this.a.a73(a2,a4,a6)
this.b.a73(a3,a5,a7)
x=1-a8
w=a2.nA(x).a5(0,a3.nA(a8))
v=a4.nA(x).a5(0,a5.nA(a8))
u=new Float64Array(4)
t=new A.pW(u)
t.cP(v)
t.Bi()
s=a6.nA(x).a5(0,a7.nA(a8))
x=new Float64Array(16)
v=new B.bs(x)
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
v.kJ(x[0],x[1],x[2],1)
return v}}
A.FR.prototype={
a7(){return new A.aag(null,null)}}
A.aag.prototype={
ox(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(t,u,new A.aPA()))
t=y.f
v.cx=t.a(d.$3(v.cx,v.a.x,new A.aPB()))
w=y.d
v.cy=w.a(d.$3(v.cy,v.a.y,new A.aPC()))
v.db=w.a(d.$3(v.db,v.a.z,new A.aPD()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.aPE()))
w=v.dy
v.a.toString
v.dy=t.a(d.$3(w,u,new A.aPF()))
w=v.fr
v.a.toString
v.fr=y.w.a(d.$3(w,u,new A.aPG()))
w=v.fx
v.a.toString
v.fx=x.a(d.$3(w,u,new A.aPH()))},
F(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gfJ(),n=q.CW
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
return B.bc(n,q.a.r,C.o,p,u,w,v,p,t,x,s,r,p)}}
A.pW.prototype={
cP(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.aj(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aer(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
Bi(){var x,w,v,u=Math.sqrt(this.gB2())
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
gB2(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gJ(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
nA(d){var x=new Float64Array(4),w=new A.pW(x)
w.cP(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
ai(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaRA(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
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
return new A.pW(i)},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.pW){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gn(d){return B.by(this.a)},
a5(d,e){var x,w=new Float64Array(4),v=new A.pW(w)
v.cP(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a6(d,e){var x,w=new Float64Array(4),v=new A.pW(w)
v.cP(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
l(d,e,f){var x=this.a
x.$flags&2&&B.aj(x)
x[e]=f},
j(d){var x=this.a
return B.i(x[0])+", "+B.i(x[1])+", "+B.i(x[2])+" @ "+B.i(x[3])}}
var z=a.updateTypes(["r5(@)","rz(@)","vB(@)","x_(@)"])
A.aPA.prototype={
$1(d){return new A.r5(y.k.a(d),null)},
$S:z+0}
A.aPB.prototype={
$1(d){return new A.rz(y.m.a(d),null)},
$S:z+1}
A.aPC.prototype={
$1(d){return new B.p4(y.r.a(d),null)},
$S:150}
A.aPD.prototype={
$1(d){return new B.p4(y.r.a(d),null)},
$S:150}
A.aPE.prototype={
$1(d){return new A.vB(y.a.a(d),null)},
$S:z+2}
A.aPF.prototype={
$1(d){return new A.rz(y.m.a(d),null)},
$S:z+1}
A.aPG.prototype={
$1(d){return new A.x_(y.E.a(d),null)},
$S:z+3}
A.aPH.prototype={
$1(d){return new A.r5(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.ay,[A.r5,A.vB,A.rz,A.x_])
w(A.FR,B.rP)
w(A.aag,B.r6)
x(B.ce,[A.aPA,A.aPB,A.aPC,A.aPD,A.aPE,A.aPF,A.aPG,A.aPH])
w(A.pW,B.A)})()
B.bX(b.typeUniverse,JSON.parse('{"r5":{"ay":["iC?"],"aE":["iC?"],"ay.T":"iC?","aE.T":"iC?"},"vB":{"ay":["ag"],"aE":["ag"],"ay.T":"ag","aE.T":"ag"},"rz":{"ay":["d8"],"aE":["d8"],"ay.T":"d8","aE.T":"d8"},"x_":{"ay":["bs"],"aE":["bs"],"ay.T":"bs","aE.T":"bs"},"FR":{"S":[],"c":[]},"aag":{"U":["FR"]}}'))
var y=(function rtii(){var x=B.I
return{k:x("iC"),a:x("ag"),r:x("iJ"),m:x("d8"),E:x("bs"),b:x("r5?"),e:x("vB?"),d:x("p4?"),f:x("rz?"),w:x("x_?")}})()};
(a=>{a["PRSWF+eo+ZUimS6AUBq5yLOQR+8="]=a.current})($__dart_deferred_initializers__);