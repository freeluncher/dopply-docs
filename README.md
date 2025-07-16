# Dokumentasi Aplikasi

Website ini dibuat menggunakan Docusaurus untuk mendokumentasikan aplikasi Anda.

## Struktur Dokumentasi
1. Overview / Introduction
2. Getting Started
3. Architecture & Design
4. Folder & File Structure
5. Main Features & Usage
6. API Integration
7. Important Code Examples
8. State Management & Navigation
9. Testing
10. Troubleshooting & FAQ
11. Contributing & Code Style
12. References

Silakan edit dan lengkapi setiap bagian sesuai kebutuhan aplikasi Anda.

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
