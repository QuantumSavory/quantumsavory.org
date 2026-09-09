---
title: Overview
description: What the QuantumSavory organization provides.
---

# Overview

QuantumSavory develops Julia packages for quantum information science. The packages cover network simulation, stabilizer methods, symbolic quantum expressions, error-correction tooling, circuit drawing, optimization, and backend interoperability.

The flagship packages are:

- [QuantumSavory.jl](https://github.com/QuantumSavory/QuantumSavory.jl): multi-formalism simulation of quantum hardware and quantum-network protocols.
- [QuantumClifford.jl](https://github.com/QuantumSavory/QuantumClifford.jl): stabilizer tableaux, Pauli algebra, Clifford circuits, graph states, and error-correction workflows.
- [QuantumSymbolics.jl](https://github.com/QuantumSavory/QuantumSymbolics.jl): symbolic quantum algebra and translation to numerical backends.

The organization is hosted in [Prof. Stefan Krastanov's lab](https://lab.krastanov.org/) at [UMass Amherst](https://www.umass.edu/quantum/). Development is tied to research needs, student projects, and maintenance across the Julia quantum ecosystem.

## How The Packages Fit

QuantumSavory.jl sits at the simulation-management layer. It uses common register and state interfaces to work with backends such as QuantumOptics.jl, QuantumClifford.jl, QuantumSymbolics.jl, and Gabs.jl.

QuantumInterface.jl and QuantumOpticsBase.jl provide shared abstractions used across the qojulia and QuantumSavory packages. These interfaces are mainly for package authors and coordinated integrations.

Smaller packages fill specific needs: faster Bell-pair gates, entanglement-purification optimization, circuit rendering, quantum LDPC construction, Gaussian-state simulation, decoder wrappers, and benchmark databases.

## Community Work

QuantumSavory runs bounty issues for bug fixes and enhancements, holds weekly office hours, and helps organize the QNumerics Summer School on Numerical Methods in Quantum Information Science.
