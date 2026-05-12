---
title: Flagship Packages
description: QuantumSavory.jl, QuantumClifford.jl, and QuantumSymbolics.jl.
---

# Flagship Packages

## QuantumSavory.jl

[QuantumSavory.jl](https://github.com/QuantumSavory/QuantumSavory.jl) is a multi-formalism simulator for noisy quantum communication and computation hardware.

It provides registers, channels, network structure, timing, noise models, discrete-event protocols, and hooks into multiple backend simulators. Documentation: [qs.quantumsavory.org](https://qs.quantumsavory.org/stable/).

## QuantumClifford.jl

[QuantumClifford.jl](https://github.com/QuantumSavory/QuantumClifford.jl) provides fast stabilizer tableaux, Pauli algebra, Clifford circuits, graph states, noisy circuits, and quantum error-correction workflows.

It is useful when the problem can be expressed in the stabilizer formalism, or when a Clifford backend is needed inside a larger simulation. Documentation: [qc.quantumsavory.org](https://qc.quantumsavory.org/stable/).

## QuantumSymbolics.jl

[QuantumSymbolics.jl](https://github.com/QuantumSavory/QuantumSymbolics.jl) provides symbolic quantum algebra for states, operators, gates, commutators, tensor products, and backend translation.

It is useful as a readable symbolic layer before lowering an expression to QuantumOptics.jl, QuantumClifford.jl, or another representation. Documentation: [doc.quantumsavory.org/QuantumSymbolics.jl](https://doc.quantumsavory.org/QuantumSymbolics.jl/stable/).
