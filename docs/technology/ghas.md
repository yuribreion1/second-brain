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

- Dependabot
    - Open-source vulnerabilities
    - Scan dependencies and raise alerts
    - Take action from GitHub on vulnerabilities
- Secret Scanning
    - Secrets stored/passed in repositories
    - Scan secrets and raise alerts
    - Take action from GitHub
- Code Scanning
    - Scan for code vulnerabilities
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