# Security Policy

## Reporting a Vulnerability
Email **vantapoint@proton.me** with steps to reproduce, impact, and any PoC.
Acknowledgement within **72 hours**; status update within **5 business days**.

## Safe Harbor
Good-faith testing within this policy will not result in legal action. Avoid privacy violations, data destruction, or service degradation.

## Cryptography
TLS 1.2+/1.3 with HSTS. Client-side encryption is planned for sensitive payloads before real users are onboarded. No shared backend with other products.

## Dependencies
We pin versions and continuously scan with CodeQL, Secret Scanning, and Dependabot.
