<!-- Project Title -->
<h1 align="center">AccioINTERN</h1>

<!-- Project Description -->
<p align="center">
  A platform for internship project submissions and organization invitations.
</p>

<!-- Badges -->
<p align="center">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/AccioINTERN/acciointern.github.io">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/AccioINTERN/acciointern.github.io">
  <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/AccioINTERN/acciointern.github.io">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/AccioINTERN/acciointern.github.io">
  <img alt="GitHub license" src="https://img.shields.io/github/license/AccioINTERN/acciointern.github.io">
</p>



<!-- Table of Contents -->
## Table of Contents
- [About](#about)
- [Features](#features)
- [Setup](#setup)
- [Contributing](#contributing)
- [License](#license)

<!-- About -->
## About
AccioINTERN is a platform designed to streamline the process of internship project submissions and organization invitations. It allows users to submit their projects and receive invitations to join a GitHub organization automatically.

<!-- Features -->
## Features
- **User-friendly Interface**: Simple form-based submission for GitHub usernames.
- **Automated Invitations**: GitHub Actions workflow sends organization invitations.
- **Scalable**: Easily adaptable for different organizational needs.

<!-- Setup -->
## Setup
To get started with AccioINTERN, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AccioINTERN/acciointern.github.io.git
   cd acciointern.github.io

2. **Configure GitHub Actions**:
   - Edit `.github/workflows/invite.yml` with your organization name and setup secrets for `GITHUB_TOKEN`.

3. **Deploy Serverless Function**:
   - Deploy `api/join.js` to handle GitHub invitation requests.

4. **Host the Static Website**:
   - Host `index.html` on GitHub Pages or any web hosting service.

5. **Customize**:
   - Customize the UI and functionality based on your organization's needs.

<!-- Contributing -->
## Contributing
Contributions are welcome! Please follow these guidelines:
- Fork the repository and create your branch (`git checkout -b feature/your-feature`).
- Commit your changes (`git commit -am 'Add some feature'`).
- Push to the branch (`git push origin feature/your-feature`).
- Create a new Pull Request.

<!-- License -->
## License
This project is licensed under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) License - see the [LICENSE](LICENSE) file for details.
