# GitHub Advanced Security

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/i740xlsqxEM/0.jpg)](https://www.youtube.com/watch?v=i740xlsqxEM)

- [www.exampro.com/ghas](http://www.exampro.com/ghas)
- GitHub Certifications **does not validate programming, technical diagramming, code management**.
- Recommended to study **1–2 hours** a day for 14 days
- GitHub does not share the weighting of each domain.
- The exam of questions **in 7 domains**:
  - **Domain 1**: Describe GHAS security features and functionality
  - **Domain 2**: Configure and use secret scanning
  - **Domain 3**: Configure and use dependency management
  - **Domain 4**: Configure and use code scanning
  - **Domain 5**: Use code scanning with CodeQL
  - **Domain 6**: Describe GHAS best practices
  - **Domain 7**: Configure GHAS tools in GitHub Enterprise
- GitHub delivers exams via:
  - PSI Online (online exam system)
  - PSI network of test centers
- Format of Questions
  - Multiple choices
  - Multiple answers
- 15 outscored questions, that can be easy or very difficult. Remember, these questions will not change the score.
- Duration of 2 hours - 1.6 minutes per question

## GitHub Advance Security

Refers to understanding how to use the security features of GitHub to secure your code from security vulnerabilities. Three services are found under the Security tab:

### Dependabot

- Identifies **security vulnerabilities in open-source libraries**
- Scan dependencies and raise alerts
- Take action from GitHub on vulnerabilities

### Secret Scanning

- Follow an access token to simulate the Secret Scanning functionality:

```text
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ
```

- Secrets stored in **repositories** like passwords, access tokens, etc.
- Scan secrets and raise alerts
- Take action from GitHub

Full list **of current secret patterns** supported by Secret Scanning: <https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#high-confidence-patterns>

#### Push Protection

- Scans for secrets in **every commit** that is pushed into repository with secret scanning enabled.
- Prevents secrets from appearing into the repository in the first place.

#### Continuous Scan

- Detect and alert on any **existent secrets** in the repository with secret scanning enabled.
- Helps to detect secrets that are already in the repository. It **does not prevent any new secrets from being added**.

#### Secret Scanning Partner Program

GitHub Partner Program enables product companies to partner with GitHub to be notified if any of their secrets are being leaked on a public or internal GitHub repository. Partners provide **regular expression** via a verification endpoint to detect possible secrets. Follow some of the partners available:

- NPM
- Canva
- Postman
- Terraform
- Atlassian

### Code Scanning

- Identifies **security vulnerabilities in the code**
- Scan and raise alerts on vulnerabilities
- Use GitHub Actions workflow and CodeQL

GHAS is integrated within GitHub and can check for:

- Secrets in code
- Vulnerability in login of the code
- And vulnerable open-source libraries being used by the code

## Enable GHAS

You can enable GHAS in four ways:

1. Personal/individual
    1. Account settings > Code security and analysis
2. Organization
    1. Organization > Settings > Security > Secrets and variables
3. Repository level
    1. Settings > Security
4. Pro or Enterprise plan level

## Security Vulnerability

Potential risk to an organization that can be exploited by a malicious attacker to misuse or negatively impact the organization

- Web-based security vulnerabilities as XSS, CSRF, SSRF
- Open-source vulnerabilities
- Stored secrets
- Cloud misconfiguration
- Zero day
- Virus, malware, ransomware

## GitHub Advisory Database

- <https://github.com/advisories>

A database maintained by GitHub with a list of security vulnerabilities of CVE and GitHub own research.
