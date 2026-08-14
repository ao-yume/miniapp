((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={ru:function ru(d,e){this.a=d
this.b=e},
We(d,e,f,g,h,i,j,k){var x,w=null
if(k!=null){x=e==null?w:e.xp(w,k)
if(x==null)x=B.m6(w,k)}else x=e
return new A.Gh(d,j,g,i,x,f,h,w,w)},
vZ:function vZ(d,e){this.a=d
this.b=e},
rZ:function rZ(d,e){this.a=d
this.b=e},
xp:function xp(d,e){this.a=d
this.b=e},
Gh:function Gh(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.c=i
_.d=j
_.e=k
_.a=l},
aaP:function aaP(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.e7$=d
_.by$=e
_.c=_.a=null},
aQH:function aQH(){},
aQI:function aQI(){},
aQJ:function aQJ(){},
aQK:function aQK(){},
aQL:function aQL(){},
aQM:function aQM(){},
aQN:function aQN(){},
aQO:function aQO(){},
bi3(){var x=new Float64Array(4)
x[3]=1
return new A.qm(x)},
qm:function qm(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[56],A)
A.ru.prototype={
fE(d){return B.vK(this.a,this.b,d)}}
A.vZ.prototype={
fE(d){var x=B.k5(this.a,this.b,d)
x.toString
return x}}
A.rZ.prototype={
fE(d){var x=B.dJ(this.a,this.b,d)
x.toString
return x}}
A.xp.prototype={
fE(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.i7(new Float64Array(3)),a3=new B.i7(new Float64Array(3)),a4=A.bi3(),a5=A.bi3(),a6=new B.i7(new Float64Array(3)),a7=new B.i7(new Float64Array(3))
this.a.a7N(a2,a4,a6)
this.b.a7N(a3,a5,a7)
x=1-a8
w=a2.nE(x).a5(0,a3.nE(a8))
v=a4.nE(x).a5(0,a5.nE(a8))
u=new Float64Array(4)
t=new A.qm(u)
t.cL(v)
t.By()
s=a6.nE(x).a5(0,a7.nE(a8))
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
v.kH(x[0],x[1],x[2],1)
return v}}
A.Gh.prototype={
a6(){return new A.aaP(null,null)}}
A.aaP.prototype={
ox(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(t,u,new A.aQH()))
t=y.f
v.cx=t.a(d.$3(v.cx,v.a.x,new A.aQI()))
w=y.d
v.cy=w.a(d.$3(v.cy,v.a.y,new A.aQJ()))
v.db=w.a(d.$3(v.db,v.a.z,new A.aQK()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.aQL()))
w=v.dy
v.a.toString
v.dy=t.a(d.$3(w,u,new A.aQM()))
w=v.fr
v.a.toString
v.fr=y.w.a(d.$3(w,u,new A.aQN()))
w=v.fx
v.a.toString
v.fx=x.a(d.$3(w,u,new A.aQO()))},
G(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gfM(),n=q.CW
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
return B.aW(n,q.a.r,C.o,p,u,w,v,p,t,x,s,r,p)}}
A.qm.prototype={
cL(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.ak(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
afc(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r.$flags&2&&B.ak(r)
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
t.$flags&2&&B.ak(t)
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
By(){var x,w,v,u=Math.sqrt(this.gBk())
if(u===0)return 0
x=1/u
w=this.a
v=w[0]
w.$flags&2&&B.ak(w)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return u},
gBk(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gI(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
nE(d){var x=new Float64Array(4),w=new A.qm(x)
w.cL(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
ai(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaSF(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
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
return new A.qm(i)},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.qm){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gn(d){return B.bC(this.a)},
a5(d,e){var x,w=new Float64Array(4),v=new A.qm(w)
v.cL(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a7(d,e){var x,w=new Float64Array(4),v=new A.qm(w)
v.cL(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
l(d,e,f){var x=this.a
x.$flags&2&&B.ak(x)
x[e]=f},
j(d){var x=this.a
return B.i(x[0])+", "+B.i(x[1])+", "+B.i(x[2])+" @ "+B.i(x[3])}}
var z=a.updateTypes(["ru(@)","rZ(@)","vZ(@)","xp(@)"])
A.aQH.prototype={
$1(d){return new A.ru(y.k.a(d),null)},
$S:z+0}
A.aQI.prototype={
$1(d){return new A.rZ(y.m.a(d),null)},
$S:z+1}
A.aQJ.prototype={
$1(d){return new B.pu(y.r.a(d),null)},
$S:252}
A.aQK.prototype={
$1(d){return new B.pu(y.r.a(d),null)},
$S:252}
A.aQL.prototype={
$1(d){return new A.vZ(y.a.a(d),null)},
$S:z+2}
A.aQM.prototype={
$1(d){return new A.rZ(y.m.a(d),null)},
$S:z+1}
A.aQN.prototype={
$1(d){return new A.xp(y.E.a(d),null)},
$S:z+3}
A.aQO.prototype={
$1(d){return new A.ru(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aw,[A.ru,A.vZ,A.rZ,A.xp])
w(A.Gh,B.te)
w(A.aaP,B.rv)
x(B.cb,[A.aQH,A.aQI,A.aQJ,A.aQK,A.aQL,A.aQM,A.aQN,A.aQO])
w(A.qm,B.B)})()
B.bX(b.typeUniverse,JSON.parse('{"ru":{"aw":["iH?"],"aE":["iH?"],"aw.T":"iH?","aE.T":"iH?"},"vZ":{"aw":["ah"],"aE":["ah"],"aw.T":"ah","aE.T":"ah"},"rZ":{"aw":["d9"],"aE":["d9"],"aw.T":"d9","aE.T":"d9"},"xp":{"aw":["c7"],"aE":["c7"],"aw.T":"c7","aE.T":"c7"},"Gh":{"R":[],"c":[]},"aaP":{"U":["Gh"]}}'))
var y=(function rtii(){var x=B.G
return{k:x("iH"),a:x("ah"),r:x("iO"),m:x("d9"),E:x("c7"),b:x("ru?"),e:x("vZ?"),d:x("pu?"),f:x("rZ?"),w:x("xp?")}})()};
(a=>{a["iHW1CRetn6IFnmZ8T4hBmt8hUpk="]=a.current})($__dart_deferred_initializers__);