# The Beauty of Numerical Analysis

**Published:** 2024-08-15 · **Reading time:** 5 min

When students first hear "numerical analysis," they often imagine walls of
floating-point arithmetic. But the field is, at its core, about something
more beautiful: finding elegant approximations to problems that have no
exact closed-form solution.

## Why approximate?

Consider the simple ordinary differential equation

$$\frac{du}{dt} + u \cdot \frac{du}{dx} = 0$$

This is the inviscid **Burgers' equation**, and its solutions steepen over
time and eventually form a shock. There is no single closed-form solution
for arbitrary initial data — yet engineers model traffic flow, gas dynamics,
and acoustics with this equation daily. The trick? Replace the continuum
with a discrete grid, and march forward in time.

## The art of the collocation method

Collocation methods don't just sample a function at grid points — they force
the differential equation to hold exactly at selected nodes. Spline-based
collocation, in particular, gives us smooth, high-order accurate solutions
with relatively few grid points.

> "A good numerical method doesn't just compute — it illuminates."

In my research, I've used quintic Hermite splines and adaptive B-spline
frameworks to capture sharp boundary layers with stunning precision. The
mathematics is rigorous, but the *insight* — that's what we teach for.

## Try it yourself

If you'd like a gentle introduction, the Hybrid Math Hub YouTube channel has
a step-by-step walkthrough of the collocation scheme. Start there, then come
back to the derivations.

— *Wudneh*
