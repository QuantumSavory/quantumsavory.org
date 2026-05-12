---
title: Projects
description: Main QuantumSavory projects and ecosystem packages.
---

# Projects

## Flagship Packages

- [QuantumSavory.jl](https://github.com/QuantumSavory/QuantumSavory.jl) ([docs](https://qs.quantumsavory.org/stable/)): a full-stack simulator for quantum hardware and networks, from low-level state representations to protocol-level discrete-event simulation.
- [QuantumClifford.jl](https://github.com/QuantumSavory/QuantumClifford.jl) ([docs](https://qc.quantumsavory.org/stable/)): fast stabilizer states, Pauli operators, Clifford circuits, graph states, and quantum error-correction tools.
- [QuantumSymbolics.jl](https://github.com/QuantumSavory/QuantumSymbolics.jl) ([docs](https://doc.quantumsavory.org/QuantumSymbolics.jl/stable/)): symbolic quantum algebra, with translation to QuantumOptics.jl and QuantumClifford.jl representations.

## Related Ecosystem Work

- [QuantumOptics.jl](https://github.com/qojulia/QuantumOptics.jl) ([site](https://www.qojulia.org/)): numerical simulation of closed and open quantum systems. QuantumSavory integrates with and contributes upstream to this ecosystem.
- [QuantumInterface.jl](https://github.com/qojulia/QuantumInterface.jl): a lightweight interface package coordinating shared abstractions across Julia quantum packages.
- [QuantumOpticsBase.jl](https://github.com/qojulia/QuantumOpticsBase.jl): base types and operations for QuantumOptics.jl-style states, bases, and operators.
- [WaveguideQED.jl](https://github.com/qojulia/WaveguideQED.jl) ([docs](https://qojulia.github.io/WaveguideQED.jl/dev/)): time-binned photon wavepacket simulation for waveguide QED, built as a QuantumOptics.jl extension.

## Focused Packages

- [BPGates.jl](https://github.com/QuantumSavory/BPGates.jl): faster Bell-preserving gates for Clifford-style simulators.
- [QEPOptimize.jl](https://github.com/QuantumSavory/QEPOptimize.jl): entanglement-purification circuit generation and optimization.
- [Quantikz.jl](https://github.com/QuantumSavory/Quantikz.jl): circuit rendering with quantikz and TikZ from Julia.
- [QuantumExpanders.jl](https://github.com/QuantumSavory/QuantumExpanders.jl): quantum Tanner codes, Ramanujan graphs, and quantum expander code examples.
- [Gabs.jl](https://github.com/QuantumSavory/Gabs.jl): Gaussian quantum information simulation in phase-space form.
- [LDPCDecoders.jl](https://github.com/QuantumSavory/LDPCDecoders.jl), [PyQDecoders.jl](https://github.com/QuantumSavory/PyQDecoders.jl), and [PyTesseractDecoder.jl](https://github.com/QuantumSavory/PyTesseractDecoder.jl): decoder tooling and wrappers.
- [LCOrbits.jl](https://github.com/QuantumSavory/LCOrbits.jl): graph-state local-complementation orbit databases.
- [PBCCompiler.jl](https://github.com/QuantumSavory/PBCCompiler.jl): tools for Pauli-based computation.
