((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={rA:function rA(d,e){this.a=d
this.b=e},
A5(d,e,f,g,h,i,j,k,l){var x
if(l!=null||j!=null){x=e==null?null:e.x4(j,l)
if(x==null)x=B.ma(j,l)}else x=e
return new A.H8(d,k,g,i,x,f,h,null,null)},
vY:function vY(d,e){this.a=d
this.b=e},
t3:function t3(d,e){this.a=d
this.b=e},
xo:function xo(d,e){this.a=d
this.b=e},
H8:function H8(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.c=i
_.d=j
_.e=k
_.a=l},
aaL:function aaL(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.dR$=d
_.by$=e
_.c=_.a=null},
aQJ:function aQJ(){},
aQK:function aQK(){},
aQL:function aQL(){},
aQM:function aQM(){},
aQN:function aQN(){},
aQO:function aQO(){},
aQP:function aQP(){},
aQQ:function aQQ(){},
bis(){var x=new Float64Array(4)
x[3]=1
return new A.qq(x)},
qq:function qq(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[56],A)
A.rA.prototype={
fF(d){return B.vJ(this.a,this.b,d)}}
A.vY.prototype={
fF(d){var x=B.kb(this.a,this.b,d)
x.toString
return x}}
A.t3.prototype={
fF(d){var x=B.dM(this.a,this.b,d)
x.toString
return x}}
A.xo.prototype={
fF(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.i8(new Float64Array(3)),a3=new B.i8(new Float64Array(3)),a4=A.bis(),a5=A.bis(),a6=new B.i8(new Float64Array(3)),a7=new B.i8(new Float64Array(3))
this.a.a7g(a2,a4,a6)
this.b.a7g(a3,a5,a7)
x=1-a8
w=a2.nu(x).a6(0,a3.nu(a8))
v=a4.nu(x).a6(0,a5.nu(a8))
u=new Float64Array(4)
t=new A.qq(u)
t.cN(v)
t.Ba()
s=a6.nu(x).a6(0,a7.nu(a8))
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
v.kz(x[0],x[1],x[2],1)
return v}}
A.H8.prototype={
a5(){return new A.aaL(null,null)}}
A.aaL.prototype={
n0(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(t,u,new A.aQJ()))
t=y.f
v.cx=t.a(d.$3(v.cx,v.a.x,new A.aQK()))
w=y.d
v.cy=w.a(d.$3(v.cy,v.a.y,new A.aQL()))
v.db=w.a(d.$3(v.db,v.a.z,new A.aQM()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.aQN()))
w=v.dy
v.a.toString
v.dy=t.a(d.$3(w,u,new A.aQO()))
w=v.fr
v.a.toString
v.fr=y.w.a(d.$3(w,u,new A.aQP()))
w=v.fx
v.a.toString
v.fx=x.a(d.$3(w,u,new A.aQQ()))},
G(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gfs(),n=q.CW
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
return B.aL(n,q.a.r,C.m,p,u,w,v,p,t,x,s,r,p)}}
A.qq.prototype={
cN(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.al(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aeE(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
Ba(){var x,w,v,u=Math.sqrt(this.gAY())
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
gAY(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gI(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
nu(d){var x=new Float64Array(4),w=new A.qq(x)
w.cN(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
ak(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaSl(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
h=C.d.ak(g,a4)
x=C.d.ak(d,a1)
w=C.d.ak(e,a2)
v=C.d.ak(f,a3)
u=C.d.ak(g,a3)
t=C.d.ak(e,a1)
s=C.d.ak(f,a4)
r=C.d.ak(d,a2)
q=C.d.ak(g,a2)
p=C.d.ak(f,a1)
o=C.d.ak(d,a3)
n=C.d.ak(e,a4)
m=C.d.ak(g,a1)
l=C.d.ak(d,a4)
k=C.d.ak(e,a3)
j=C.d.ak(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.qq(i)},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.qq){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gn(d){return B.bD(this.a)},
a6(d,e){var x,w=new Float64Array(4),v=new A.qq(w)
v.cN(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a7(d,e){var x,w=new Float64Array(4),v=new A.qq(w)
v.cN(this)
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
var z=a.updateTypes(["rA(@)","t3(@)","vY(@)","xo(@)"])
A.aQJ.prototype={
$1(d){return new A.rA(y.k.a(d),null)},
$S:z+0}
A.aQK.prototype={
$1(d){return new A.t3(y.m.a(d),null)},
$S:z+1}
A.aQL.prototype={
$1(d){return new B.pw(y.r.a(d),null)},
$S:248}
A.aQM.prototype={
$1(d){return new B.pw(y.r.a(d),null)},
$S:248}
A.aQN.prototype={
$1(d){return new A.vY(y.a.a(d),null)},
$S:z+2}
A.aQO.prototype={
$1(d){return new A.t3(y.m.a(d),null)},
$S:z+1}
A.aQP.prototype={
$1(d){return new A.xo(y.E.a(d),null)},
$S:z+3}
A.aQQ.prototype={
$1(d){return new A.rA(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.as,[A.rA,A.vY,A.t3,A.xo])
w(A.H8,B.pS)
w(A.aaL,B.rB)
x(B.cf,[A.aQJ,A.aQK,A.aQL,A.aQM,A.aQN,A.aQO,A.aQP,A.aQQ])
w(A.qq,B.B)})()
B.bX(b.typeUniverse,JSON.parse('{"rA":{"as":["iI?"],"aD":["iI?"],"as.T":"iI?","aD.T":"iI?"},"vY":{"as":["ah"],"aD":["ah"],"as.T":"ah","aD.T":"ah"},"t3":{"as":["d9"],"aD":["d9"],"as.T":"d9","aD.T":"d9"},"xo":{"as":["c7"],"aD":["c7"],"as.T":"c7","aD.T":"c7"},"H8":{"R":[],"c":[]},"aaL":{"V":["H8"]}}'))
var y=(function rtii(){var x=B.G
return{k:x("iI"),a:x("ah"),r:x("iP"),m:x("d9"),E:x("c7"),b:x("rA?"),e:x("vY?"),d:x("pw?"),f:x("t3?"),w:x("xo?")}})()};
(a=>{a["IGOUxQiYqResBGYUR9XrlrgOsyI="]=a.current})($__dart_deferred_initializers__);