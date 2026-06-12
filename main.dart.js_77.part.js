((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={qL:function qL(d,e){this.a=d
this.b=e},
b5u(d,e,f,g,h,i){return new A.Fo(d,i,f,h,e,C.am,g,null,null)},
v5:function v5(d,e){this.a=d
this.b=e},
r9:function r9(d,e){this.a=d
this.b=e},
wy:function wy(d,e){this.a=d
this.b=e},
Fo:function Fo(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.c=i
_.d=j
_.e=k
_.a=l},
a9x:function a9x(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.e_$=d
_.bw$=e
_.c=_.a=null},
aOb:function aOb(){},
aOc:function aOc(){},
aOd:function aOd(){},
aOe:function aOe(){},
aOf:function aOf(){},
aOg:function aOg(){},
aOh:function aOh(){},
aOi:function aOi(){},
bee(){var x=new Float64Array(4)
x[3]=1
return new A.pF(x)},
pF:function pF(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[17],A)
A.qL.prototype={
fA(d){return B.uR(this.a,this.b,d)}}
A.v5.prototype={
fA(d){var x=B.jY(this.a,this.b,d)
x.toString
return x}}
A.r9.prototype={
fA(d){var x=B.dC(this.a,this.b,d)
x.toString
return x}}
A.wy.prototype={
fA(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.hx(new Float64Array(3)),a3=new B.hx(new Float64Array(3)),a4=A.bee(),a5=A.bee(),a6=new B.hx(new Float64Array(3)),a7=new B.hx(new Float64Array(3))
this.a.a6G(a2,a4,a6)
this.b.a6G(a3,a5,a7)
x=1-a8
w=a2.nt(x).a5(0,a3.nt(a8))
v=a4.nt(x).a5(0,a5.nt(a8))
u=new Float64Array(4)
t=new A.pF(u)
t.cN(v)
t.B2()
s=a6.nt(x).a5(0,a7.nt(a8))
x=new Float64Array(16)
v=new B.bo(x)
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
v.kD(x[0],x[1],x[2],1)
return v}}
A.Fo.prototype={
a7(){return new A.a9x(null,null)}}
A.a9x.prototype={
oo(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(t,u,new A.aOb()))
t=y.f
v.cx=t.a(d.$3(v.cx,v.a.x,new A.aOc()))
w=y.d
v.cy=w.a(d.$3(v.cy,v.a.y,new A.aOd()))
v.db=w.a(d.$3(v.db,v.a.z,new A.aOe()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.aOf()))
w=v.dy
v.a.toString
v.dy=t.a(d.$3(w,u,new A.aOg()))
w=v.fr
v.a.toString
v.fr=y.w.a(d.$3(w,u,new A.aOh()))
w=v.fx
v.a.toString
v.fx=x.a(d.$3(w,u,new A.aOi()))},
G(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gfG(),n=q.CW
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
return B.bz(n,q.a.r,C.p,p,u,w,v,p,t,x,s,r,p)}}
A.pF.prototype={
cN(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.ah(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
adY(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r.$flags&2&&B.ah(r)
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
t.$flags&2&&B.ah(t)
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
B2(){var x,w,v,u=Math.sqrt(this.gAN())
if(u===0)return 0
x=1/u
w=this.a
v=w[0]
w.$flags&2&&B.ah(w)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return u},
gAN(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gJ(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
nt(d){var x=new Float64Array(4),w=new A.pF(x)
w.cN(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
ai(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaQS(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
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
return new A.pF(i)},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.pF){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gn(d){return B.bu(this.a)},
a5(d,e){var x,w=new Float64Array(4),v=new A.pF(w)
v.cN(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a9(d,e){var x,w=new Float64Array(4),v=new A.pF(w)
v.cN(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
m(d,e,f){var x=this.a
x.$flags&2&&B.ah(x)
x[e]=f},
j(d){var x=this.a
return B.i(x[0])+", "+B.i(x[1])+", "+B.i(x[2])+" @ "+B.i(x[3])}}
var z=a.updateTypes(["qL(@)","r9(@)","v5(@)","wy(@)"])
A.aOb.prototype={
$1(d){return new A.qL(y.k.a(d),null)},
$S:z+0}
A.aOc.prototype={
$1(d){return new A.r9(y.m.a(d),null)},
$S:z+1}
A.aOd.prototype={
$1(d){return new B.oN(y.r.a(d),null)},
$S:243}
A.aOe.prototype={
$1(d){return new B.oN(y.r.a(d),null)},
$S:243}
A.aOf.prototype={
$1(d){return new A.v5(y.a.a(d),null)},
$S:z+2}
A.aOg.prototype={
$1(d){return new A.r9(y.m.a(d),null)},
$S:z+1}
A.aOh.prototype={
$1(d){return new A.wy(y.E.a(d),null)},
$S:z+3}
A.aOi.prototype={
$1(d){return new A.qL(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.ay,[A.qL,A.v5,A.r9,A.wy])
w(A.Fo,B.rm)
w(A.a9x,B.qM)
x(B.cv,[A.aOb,A.aOc,A.aOd,A.aOe,A.aOf,A.aOg,A.aOh,A.aOi])
w(A.pF,B.C)})()
B.ci(b.typeUniverse,JSON.parse('{"qL":{"ay":["iw?"],"aD":["iw?"],"ay.T":"iw?","aD.T":"iw?"},"v5":{"ay":["al"],"aD":["al"],"ay.T":"al","aD.T":"al"},"r9":{"ay":["d6"],"aD":["d6"],"ay.T":"d6","aD.T":"d6"},"wy":{"ay":["bo"],"aD":["bo"],"ay.T":"bo","aD.T":"bo"},"Fo":{"S":[],"c":[]},"a9x":{"U":["Fo"]}}'))
var y=(function rtii(){var x=B.P
return{k:x("iw"),a:x("al"),r:x("iE"),m:x("d6"),E:x("bo"),b:x("qL?"),e:x("v5?"),d:x("oN?"),f:x("r9?"),w:x("wy?")}})()};
(a=>{a["n+9srHiBADLgFQ6068Na21DqjZo="]=a.current})($__dart_deferred_initializers__);