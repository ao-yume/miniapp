((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={ry:function ry(d,e){this.a=d
this.b=e},
Wa(d,e,f,g,h,i,j,k){var x,w=null
if(k!=null){x=e==null?w:e.wZ(w,k)
if(x==null)x=B.m7(w,k)}else x=e
return new A.H6(d,j,g,i,x,f,h,w,w)},
vZ:function vZ(d,e){this.a=d
this.b=e},
t1:function t1(d,e){this.a=d
this.b=e},
xp:function xp(d,e){this.a=d
this.b=e},
H6:function H6(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.c=i
_.d=j
_.e=k
_.a=l},
aaJ:function aaJ(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.e7$=d
_.by$=e
_.c=_.a=null},
aQA:function aQA(){},
aQB:function aQB(){},
aQC:function aQC(){},
aQD:function aQD(){},
aQE:function aQE(){},
aQF:function aQF(){},
aQG:function aQG(){},
aQH:function aQH(){},
bi1(){var x=new Float64Array(4)
x[3]=1
return new A.qp(x)},
qp:function qp(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[56],A)
A.ry.prototype={
fD(d){return B.vL(this.a,this.b,d)}}
A.vZ.prototype={
fD(d){var x=B.k6(this.a,this.b,d)
x.toString
return x}}
A.t1.prototype={
fD(d){var x=B.dL(this.a,this.b,d)
x.toString
return x}}
A.xp.prototype={
fD(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.i5(new Float64Array(3)),a3=new B.i5(new Float64Array(3)),a4=A.bi1(),a5=A.bi1(),a6=new B.i5(new Float64Array(3)),a7=new B.i5(new Float64Array(3))
this.a.a7d(a2,a4,a6)
this.b.a7d(a3,a5,a7)
x=1-a8
w=a2.nq(x).a5(0,a3.nq(a8))
v=a4.nq(x).a5(0,a5.nq(a8))
u=new Float64Array(4)
t=new A.qp(u)
t.cM(v)
t.B6()
s=a6.nq(x).a5(0,a7.nq(a8))
x=new Float64Array(16)
v=new B.c7(x)
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
v.kx(x[0],x[1],x[2],1)
return v}}
A.H6.prototype={
a6(){return new A.aaJ(null,null)}}
A.aaJ.prototype={
oi(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(t,u,new A.aQA()))
t=y.f
v.cx=t.a(d.$3(v.cx,v.a.x,new A.aQB()))
w=y.d
v.cy=w.a(d.$3(v.cy,v.a.y,new A.aQC()))
v.db=w.a(d.$3(v.db,v.a.z,new A.aQD()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.aQE()))
w=v.dy
v.a.toString
v.dy=t.a(d.$3(w,u,new A.aQF()))
w=v.fr
v.a.toString
v.fr=y.w.a(d.$3(w,u,new A.aQG()))
w=v.fx
v.a.toString
v.fx=x.a(d.$3(w,u,new A.aQH()))},
G(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gfK(),n=q.CW
n=n==null?p:n.ao(o.gp())
x=q.cx
x=x==null?p:x.ao(o.gp())
w=q.cy
w=w==null?p:w.ao(o.gp())
v=q.db
v=v==null?p:v.ao(o.gp())
u=q.dx
u=u==null?p:u.ao(o.gp())
t=q.dy
t=t==null?p:t.ao(o.gp())
s=q.fr
s=s==null?p:s.ao(o.gp())
r=q.fx
r=r==null?p:r.ao(o.gp())
return B.aP(n,q.a.r,C.n,p,u,w,v,p,t,x,s,r,p)}}
A.qp.prototype={
cM(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.al(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aev(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
B6(){var x,w,v,u=Math.sqrt(this.gAU())
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
gAU(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gI(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
nq(d){var x=new Float64Array(4),w=new A.qp(x)
w.cM(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
ai(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaS1(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
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
return new A.qp(i)},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.qp){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gn(d){return B.bD(this.a)},
a5(d,e){var x,w=new Float64Array(4),v=new A.qp(w)
v.cM(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a7(d,e){var x,w=new Float64Array(4),v=new A.qp(w)
v.cM(this)
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
var z=a.updateTypes(["ry(@)","t1(@)","vZ(@)","xp(@)"])
A.aQA.prototype={
$1(d){return new A.ry(y.k.a(d),null)},
$S:z+0}
A.aQB.prototype={
$1(d){return new A.t1(y.m.a(d),null)},
$S:z+1}
A.aQC.prototype={
$1(d){return new B.pw(y.r.a(d),null)},
$S:252}
A.aQD.prototype={
$1(d){return new B.pw(y.r.a(d),null)},
$S:252}
A.aQE.prototype={
$1(d){return new A.vZ(y.a.a(d),null)},
$S:z+2}
A.aQF.prototype={
$1(d){return new A.t1(y.m.a(d),null)},
$S:z+1}
A.aQG.prototype={
$1(d){return new A.xp(y.E.a(d),null)},
$S:z+3}
A.aQH.prototype={
$1(d){return new A.ry(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.au,[A.ry,A.vZ,A.t1,A.xp])
w(A.H6,B.th)
w(A.aaJ,B.rz)
x(B.cf,[A.aQA,A.aQB,A.aQC,A.aQD,A.aQE,A.aQF,A.aQG,A.aQH])
w(A.qp,B.A)})()
B.bX(b.typeUniverse,JSON.parse('{"ry":{"au":["iG?"],"aC":["iG?"],"au.T":"iG?","aC.T":"iG?"},"vZ":{"au":["ah"],"aC":["ah"],"au.T":"ah","aC.T":"ah"},"t1":{"au":["da"],"aC":["da"],"au.T":"da","aC.T":"da"},"xp":{"au":["c7"],"aC":["c7"],"au.T":"c7","aC.T":"c7"},"H6":{"R":[],"c":[]},"aaJ":{"U":["H6"]}}'))
var y=(function rtii(){var x=B.F
return{k:x("iG"),a:x("ah"),r:x("iN"),m:x("da"),E:x("c7"),b:x("ry?"),e:x("vZ?"),d:x("pw?"),f:x("t1?"),w:x("xp?")}})()};
(a=>{a["u4dkheAg6hyg7GZ1HqeUeibs4SU="]=a.current})($__dart_deferred_initializers__);