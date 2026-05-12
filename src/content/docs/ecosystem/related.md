---
title: Related Packages
description: External organizations and packages with QuantumSavory contributions.
---

# Related Packages

QuantumSavory is part of a broader Julia quantum software ecosystem. The wording here is conservative: these projects have their own homes and maintainers, and QuantumSavory contributes to or integrates with them where useful.

## qojulia Ecosystem

[QuantumOptics.jl](https://github.com/qojulia/QuantumOptics.jl) is a Julia framework for numerical simulation of closed and open quantum systems. It is inspired by the Quantum Optics Toolbox for MATLAB and QuTiP. Website: [qojulia.org](https://www.qojulia.org/).

[QuantumOpticsBase.jl](https://github.com/qojulia/QuantumOpticsBase.jl) defines base structures for QuantumOptics.jl-style bases, states, and operators.

[QuantumInterface.jl](https://github.com/qojulia/QuantumInterface.jl) is a lightweight interface package for shared quantum abstractions. Its README names QuantumOpticsBase.jl, QuantumOptics.jl, QuantumClifford.jl, QuantumSymbolics.jl, and QuantumSavory.jl as packages using these common interfaces.

[WaveguideQED.jl](https://github.com/qojulia/WaveguideQED.jl) extends QuantumOptics.jl with time-binned photon wavepacket tools for waveguide QED. Documentation: [qojulia.github.io/WaveguideQED.jl](https://qojulia.github.io/WaveguideQED.jl/dev/).

## Neighboring Packages

These packages are also close to the same ecosystem:

- [QuantumCumulants.jl](https://github.com/qojulia/QuantumCumulants.jl): symbolic and numerical mean-field equations for open quantum systems.
- [SecondQuantizedAlgebra.jl](https://github.com/qojulia/SecondQuantizedAlgebra.jl): symbolic algebra for second-quantized operators.
- [CollectiveSpins.jl](https://github.com/qojulia/CollectiveSpins.jl): tools for collective spin systems.

## How QuantumSavory Uses These Layers

QuantumSavory.jl can store states and operations in different representations. That lets a network simulation use a QuantumOptics.jl-style state where full wavefunction or density-matrix dynamics are needed, a QuantumClifford.jl representation where stabilizer simulation is enough, or symbolic objects where that is more readable.
