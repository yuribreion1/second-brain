# GitHub Advanced Security

All information related to features of GHAS.

[![Image of video](https://img.youtube.com/vi/i740xlsqxEM/0.jpg)](https://www.youtube.com/watch?v=i740xlsqxEM)

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

```bash
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAiOJwJV1mI15MaTJdiz3qtfQ5XVaX5jYuBunaLSxQ64/WHlLz
9r09TqEOSGnRgmUHdWD3qQZddbKFYUx3/dmDl94L/xAnuchhtoOlzGFHo9NZLvAG
WhSToSsOl4HZqfU2tO1JA2GNefygHNOjy9G5uspw0FzWzm2rmFxPZKtUHXWAnp9i
9pSFy9n6duxkkwDk6RMEcB4j6Q2cDdkGD6iiEBbgnwdCznW2Exu1F2v7hO4/5ups
0cSsNUsQFbux8XOH2xLin+SMMFKRMQjCMjWMuakm25UoypQxpOU/5u0NzwVlP6jE
S1p2+MN4gP4v48RyrLdLs3GQeCwQfgGUqtvaPwIDAQABAoIBAA6TvVP1U3xeZ+5n
UIKUuECNPr37tpcWW6YdKZYC8KZ3/a+NWkat62/1WHiKBaeIYRgfw0VgP1FajrgI
X9o225Evh9aEnr5lolDrScZEm8+h9mQ4Z8IYYTUEyVEwIQESSIj8S04NXvbH2jiH
qfCkJ85xDZIwONM95vawPzzeE/SZAr+v5VmuUOy8iTLPjUuOEeFrQQ+MUGIVU4lW
FmVWxSJ890+kUND3SHWOIi9uar7tvM5OF8t3CnRVfFddD57nnF5Fa98BD/vbwo5C
ozyQbxaxq639Ft/uV/D15WtLq+W0/6AAa5JRpEwCVvRCubFWXMDZ6TiXUks4OvhC
M1yNgvkCgYEAv56vrgFYqiVZ6ADG6gUUA2iMny2teR5duZOqGc3LHwvPIe9uXxUR
0o7u4QSx4gQRKAQZ1xVE6/RETauPHUZyL1oBGFDODagTT7B+pdHxjilbSucbg2Fr
iyoueTxybL4jhubj4obGJxZrNCaeo/JWpbzRYeG6M9oH1A0lEvRlrqcCgYEAtt/w
gA/L9DASgnJm43muvXz8idM6qFHPiR+dRihzpw1TDlPoz96hLCsM0mbcxL18LLA9
+AnHYpH7kL+mTk268ITeFwEy9XdBSea2WpdV0+lkTNVr2ma5R807oad/msLnNjPw
qeNxwTJ8pK2/bOJxX6IhE5YKnmWStHqAibS3wqkCgYEAlbWiZl2w60ZBZwzsXDxZ
dYxCib8DUKTT70CaXoy1jO0KCOZrIihxA0QfCHlFjWNGEDCcC7oXXg47Kz/FkcbP
QYWdY2UGiA7v/4vSdzV+92YCaJQFn/EGN/Vd1+TNNX6cfTJ5iytnN3TBjz45JbgZ
0GWkZUgZ1ZccFKWseJGvu/MCgYAAqrpmzSfyQQagQSiM5dG0UTNekU2idYHrPxlE
uzsIveyyna24rFgsIBAQ6F0fvo0oYJApSmfWvS+MrJY/rNrkq6dfsBpueLvdOCEs
HWcruasq+JBHIJ7GW0I/aav2dYWAVhonlHPCv5tiwltzWzQMpDu4pZBuWXJ6hAPZ
/LW62QKBgAHW50chArKBboKq/Fj3qiD6GT01BVciXUasWi+89A7oBoi9rAxA7jBr
SmtiwKRrJ9rAe7ktyNKiOKFieIw7jM7/jgSb/gG3ugYGEKWcikSiOn1if8KqB9g6
2l5ChvXuCalu5LVV9d27sS2zMq3POLTez6GMGAsVOolhhAWt9yxN
-----END RSA PRIVATE KEY-----

```

- Secrets stored in **repositories** like passwords, access tokens, etc.
- Scan secrets and raise alerts
- Take action from GitHub

Full list **of current secret patterns** supported by Secret Scanning - [Link](https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)

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

- [Reference](https://github.com/advisories)

A database maintained by GitHub with a list of security vulnerabilities of CVE and GitHub own research.
