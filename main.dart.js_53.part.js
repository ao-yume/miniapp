((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={rk:function rk(d,e){this.a=d
this.b=e},
Vz(d,e,f,g,h,i,j,k){var x,w=null
if(k!=null){x=e==null?w:e.xa(w,k)
if(x==null)x=B.lY(w,k)}else x=e
return new A.FX(d,j,g,i,x,f,h,w,w)},
vF:function vF(d,e){this.a=d
this.b=e},
rO:function rO(d,e){this.a=d
this.b=e},
x5:function x5(d,e){this.a=d
this.b=e},
FX:function FX(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.c=i
_.d=j
_.e=k
_.a=l},
aa6:function aa6(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.dW$=d
_.bz$=e
_.c=_.a=null},
aPc:function aPc(){},
aPd:function aPd(){},
aPe:function aPe(){},
aPf:function aPf(){},
aPg:function aPg(){},
aPh:function aPh(){},
aPi:function aPi(){},
aPj:function aPj(){},
bfN(){var x=new Float64Array(4)
x[3]=1
return new A.qd(x)},
qd:function qd(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[56],A)
A.rk.prototype={
fB(d){return B.vq(this.a,this.b,d)}}
A.vF.prototype={
fB(d){var x=B.k0(this.a,this.b,d)
x.toString
return x}}
A.rO.prototype={
fB(d){var x=B.dE(this.a,this.b,d)
x.toString
return x}}
A.x5.prototype={
fB(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.hF(new Float64Array(3)),a3=new B.hF(new Float64Array(3)),a4=A.bfN(),a5=A.bfN(),a6=new B.hF(new Float64Array(3)),a7=new B.hF(new Float64Array(3))
this.a.a70(a2,a4,a6)
this.b.a70(a3,a5,a7)
x=1-a8
w=a2.nE(x).a6(0,a3.nE(a8))
v=a4.nE(x).a6(0,a5.nE(a8))
u=new Float64Array(4)
t=new A.qd(u)
t.cP(v)
t.Bd()
s=a6.nE(x).a6(0,a7.nE(a8))
x=new Float64Array(16)
v=new B.br(x)
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
A.FX.prototype={
a7(){return new A.aa6(null,null)}}
A.aa6.prototype={
oA(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(t,u,new A.aPc()))
t=y.f
v.cx=t.a(d.$3(v.cx,v.a.x,new A.aPd()))
w=y.d
v.cy=w.a(d.$3(v.cy,v.a.y,new A.aPe()))
v.db=w.a(d.$3(v.db,v.a.z,new A.aPf()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.aPg()))
w=v.dy
v.a.toString
v.dy=t.a(d.$3(w,u,new A.aPh()))
w=v.fr
v.a.toString
v.fr=y.w.a(d.$3(w,u,new A.aPi()))
w=v.fx
v.a.toString
v.fx=x.a(d.$3(w,u,new A.aPj()))},
G(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gfI(),n=q.CW
n=n==null?p:n.am(o.gp())
x=q.cx
x=x==null?p:x.am(o.gp())
w=q.cy
w=w==null?p:w.am(o.gp())
v=q.db
v=v==null?p:v.am(o.gp())
u=q.dx
u=u==null?p:u.am(o.gp())
t=q.dy
t=t==null?p:t.am(o.gp())
s=q.fr
s=s==null?p:s.am(o.gp())
r=q.fx
r=r==null?p:r.am(o.gp())
return B.aU(n,q.a.r,C.o,p,u,w,v,p,t,x,s,r,p)}}
A.qd.prototype={
cP(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.al(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aek(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r.$flags&2&&B.al(r)
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
t.$flags&2&&B.al(t)
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
Bd(){var x,w,v,u=Math.sqrt(this.gAX())
if(u===0)return 0
x=1/u
w=this.a
v=w[0]
w.$flags&2&&B.al(w)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return u},
gAX(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gK(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
nE(d){var x=new Float64Array(4),w=new A.qd(x)
w.cP(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
af(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaR2(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
h=C.d.af(g,a4)
x=C.d.af(d,a1)
w=C.d.af(e,a2)
v=C.d.af(f,a3)
u=C.d.af(g,a3)
t=C.d.af(e,a1)
s=C.d.af(f,a4)
r=C.d.af(d,a2)
q=C.d.af(g,a2)
p=C.d.af(f,a1)
o=C.d.af(d,a3)
n=C.d.af(e,a4)
m=C.d.af(g,a1)
l=C.d.af(d,a4)
k=C.d.af(e,a3)
j=C.d.af(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.qd(i)},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.qd){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gn(d){return B.bF(this.a)},
a6(d,e){var x,w=new Float64Array(4),v=new A.qd(w)
v.cP(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a8(d,e){var x,w=new Float64Array(4),v=new A.qd(w)
v.cP(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
l(d,e,f){var x=this.a
x.$flags&2&&B.al(x)
x[e]=f},
j(d){var x=this.a
return B.i(x[0])+", "+B.i(x[1])+", "+B.i(x[2])+" @ "+B.i(x[3])}}
var z=a.updateTypes(["rk(@)","rO(@)","vF(@)","x5(@)"])
A.aPc.prototype={
$1(d){return new A.rk(y.k.a(d),null)},
$S:z+0}
A.aPd.prototype={
$1(d){return new A.rO(y.m.a(d),null)},
$S:z+1}
A.aPe.prototype={
$1(d){return new B.ph(y.r.a(d),null)},
$S:244}
A.aPf.prototype={
$1(d){return new B.ph(y.r.a(d),null)},
$S:244}
A.aPg.prototype={
$1(d){return new A.vF(y.a.a(d),null)},
$S:z+2}
A.aPh.prototype={
$1(d){return new A.rO(y.m.a(d),null)},
$S:z+1}
A.aPi.prototype={
$1(d){return new A.x5(y.E.a(d),null)},
$S:z+3}
A.aPj.prototype={
$1(d){return new A.rk(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aw,[A.rk,A.vF,A.rO,A.x5])
w(A.FX,B.t0)
w(A.aa6,B.rl)
x(B.cb,[A.aPc,A.aPd,A.aPe,A.aPf,A.aPg,A.aPh,A.aPi,A.aPj])
w(A.qd,B.C)})()
B.bW(b.typeUniverse,JSON.parse('{"rk":{"aw":["iB?"],"aB":["iB?"],"aw.T":"iB?","aB.T":"iB?"},"vF":{"aw":["ah"],"aB":["ah"],"aw.T":"ah","aB.T":"ah"},"rO":{"aw":["d8"],"aB":["d8"],"aw.T":"d8","aB.T":"d8"},"x5":{"aw":["br"],"aB":["br"],"aw.T":"br","aB.T":"br"},"FX":{"R":[],"c":[]},"aa6":{"U":["FX"]}}'))
var y=(function rtii(){var x=B.G
return{k:x("iB"),a:x("ah"),r:x("iI"),m:x("d8"),E:x("br"),b:x("rk?"),e:x("vF?"),d:x("ph?"),f:x("rO?"),w:x("x5?")}})()};
(a=>{a["OwuM3zIBagAVuIT5Tr20nQTBo4U="]=a.current})($__dart_deferred_initializers__);