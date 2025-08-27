export type VulnDetails = {
  cve: string; title: string; summary: string;
  cvss: number; epss?: number; knownExploited?: boolean;
  cwe: string; published: string; updated: string;
  vendor: string; package: string;
  affected: { platform: string; versions: string[] }[];
  remediation: string[]; references: { title: string; url: string }[];
};

export const VULN_DETAILS: Record<string, VulnDetails> = {
  "cve-79": {
    cve:"CVE-79", title:"Cross-site scripting in OpenSSL status UI",
    summary:"Reflected XSS allows an attacker to inject arbitrary script into the status page under specific misconfigurations.",
    cvss:6.1, epss:0.23, knownExploited:false, cwe:"CWE-79",
    published:"2025-01-01", updated:"2025-01-05",
    vendor:"OpenSSL", package:"openssl",
    affected:[{ platform:"Windows", versions:["v1.2","v1.2.1"] }, { platform:"Linux", versions:["v1.2"] }],
    remediation:["Upgrade to OpenSSL ≥ v1.2.2.","Disable status UI on internet-exposed systems.","Add CSP headers to the reverse proxy."],
    references:[{ title:"Vendor advisory", url:"https://example.com/openssl-advisory" }]
  },
  "cve-89": {
    cve:"CVE-89", title:"SQL injection in Chromium reporting endpoint",
    summary:"Improper input sanitization may lead to SQL injection on telemetry endpoints under legacy deployments.",
    cvss:8.2, epss:0.41, knownExploited:true, cwe:"CWE-89",
    published:"2025-01-02", updated:"2025-01-06",
    vendor:"Chromium", package:"chromium",
    affected:[{ platform:"Linux", versions:["v2.0","v2.0.1"] }, { platform:"Windows", versions:["v2.0"] }],
    remediation:["Patch to v2.0.2 or later.","Restrict DB user privileges.","Enable WAF rule for injection patterns."],
    references:[{ title:"Chromium notes", url:"https://example.com/chrome" }]
  },
  "cve-120": {
    cve:"CVE-120", title:"Buffer overflow in Apache module",
    summary:"Bounds-check error in request parsing may allow RCE in specific module configurations.",
    cvss:9.1, epss:0.62, knownExploited:false, cwe:"CWE-120",
    published:"2025-01-03", updated:"2025-01-07",
    vendor:"Apache", package:"httpd",
    affected:[{ platform:"macOS", versions:["v3.1"] }, { platform:"Linux", versions:["v3.1","v3.1.1"] }],
    remediation:["Update to v3.1.2.","Disable vulnerable module if update is not possible."],
    references:[{ title:"Apache advisory", url:"https://example.com/apache" }]
  },
  "cve-200": {
    cve:"CVE-200", title:"Information disclosure on Linux logging",
    summary:"Sensitive tokens may be written to logs under default verbosity in rare error conditions.",
    cvss:5.3, epss:0.08, knownExploited:false, cwe:"CWE-200",
    published:"2025-01-04", updated:"2025-01-04",
    vendor:"Linux", package:"linux",
    affected:[{ platform:"Android", versions:["v1.5"] }],
    remediation:["Apply patch level 2025-01-A.","Redact tokens via log sanitizer."],
    references:[{ title:"Kernel commit", url:"https://example.com/kernel" }]
  }
};
