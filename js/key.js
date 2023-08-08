// jetbrains
const jetbrains = "MXMQUYT815-eyJsaWNlbnNlSWQiOiJNWE1RVVlUODE1IiwibGljZW5zZWVOYW1lIjoiSHVuYW4gSW5zdGl0dXRlIG9mIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kiLCJhc3NpZ25lZU5hbWUiOiJqaWtlIGNvZGUiLCJhc3NpZ25lZUVtYWlsIjoiamV0YnJhaW5zMjMwMjA2QG91dGxvb2suY29tIiwibGljZW5zZVJlc3RyaWN0aW9uIjoiRm9yIGVkdWNhdGlvbmFsIHVzZSBvbmx5IiwiY2hlY2tDb25jdXJyZW50VXNlIjpmYWxzZSwicHJvZHVjdHMiOlt7ImNvZGUiOiJEUE4iLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IkRCIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJQUyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiSUkiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJTQyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJHTyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiRE0iLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJTRiIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJEUyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUEMiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJDIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJDTCIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiV1MiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJEIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSUzAiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJNIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJBQyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUlNWIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IkRDIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSU1UiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IkRQIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBEQiIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQV1MiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUFNJIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBQUyIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQQ1dNUCIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQR08iLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUFBDIiwicGFpZFVwVG8iOiIyMDI0LTAyLTA5IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBSQiIsInBhaWRVcFRvIjoiMjAyNC0wMi0wOSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQU1ciLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUlMiLCJwYWlkVXBUbyI6IjIwMjQtMDItMDkiLCJleHRlbmRlZCI6dHJ1ZX1dLCJtZXRhZGF0YSI6IjAxMjAyMzAyMDZMUEFBMDA4MDA5IiwiaGFzaCI6IjQyNTQ5NjcyLzIwMDk1Nzk5Oi03OTk2MzgyNTgiLCJncmFjZVBlcmlvZERheXMiOjcsImF1dG9Qcm9sb25nYXRlZCI6ZmFsc2UsImlzQXV0b1Byb2xvbmdhdGVkIjpmYWxzZX0=-OXfbtL5lwz9bDhPZ0POhH6h8h1ubDm0bzkRWX33IjJlRmK4BkGzO65BWjIJ+ndT0stY8uOUWo4FM1Aej+YGXMTlyD3rcCBkcFN6dB6FEVelLYoBevxN9myhp0IGvfHaLQ6hoVxAKr0AkSAlSsgKVN6gOYw7Nn8lR/ivpuXXteZWiG4x7KCxHM/6/oPXAbQQmD1sy2q05s1tsvxBltZbsFJ3/Yv6lG89h0YlN9FvFciqUM6B1Cc5Fo7a6oUOfpyCJKPSwzyzkxLOhlL4QO6/LfQ3zNO9wirnz506mZXh3oB+wS1gDFLk7RehEQMqdqnjh+zaNKi1QKB/cyK1Op0oDTQ==-MIIETDCCAjSgAwIBAgIBDzANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTIyMTAxMDE2MDU0NFoXDTI0MTAxMTE2MDU0NFowHzEdMBsGA1UEAwwUcHJvZDJ5LWZyb20tMjAyMjEwMTAwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/W3uCpU5M2y48rUR/3fFR6y4xj1nOm3rIuGp2brELVGzdgK2BezjnDXpAxVDw5657hBkAUMoyByiDs2MgmVi9IcqdAwpk988/Daaajq9xuU1of59jH9eQ9c3BmsEtdA4boN3VpenYKATwmpKYkJKVc07ZKoXL6kSyZuF7Jq7HoQZcclChbF75QJPGbri3cw9vDk/e46kuzfwpGftvl6+vKibpInO6Dv0ocwImDbOutyZC7E+BwpEm1TJZW4XovMBegHhWC04cJvpH1u98xoR94ichw0jKhdppywARe43rGU96163RckIuFmFDQKZV9SMUrwpQFu4Z2D5yTNqnlLRfAgMBAAGjgZkwgZYwCQYDVR0TBAIwADAdBgNVHQ4EFgQU5FZqQ4gnVc+inIeZF+o3ID+VhcEwSAYDVR0jBEEwP4AUo562SGdCEjZBvW3gubSgUouX8bOhHKQaMBgxFjAUBgNVBAMMDUpldFByb2ZpbGUgQ0GCCQDSbLGDsoN54TATBgNVHSUEDDAKBggrBgEFBQcDATALBgNVHQ8EBAMCBaAwDQYJKoZIhvcNAQELBQADggIBANLG1anEKid4W87vQkqWaQTkRtFKJ2GFtBeMhvLhIyM6Cg3FdQnMZr0qr9mlV0w289pf/+M14J7S7SgsfwxMJvFbw9gZlwHvhBl24N349GuthshGO9P9eKmNPgyTJzTtw6FedXrrHV99nC7spaY84e+DqfHGYOzMJDrg8xHDYLLHk5Q2z5TlrztXMbtLhjPKrc2+ZajFFshgE5eowfkutSYxeX8uA5czFNT1ZxmDwX1KIelbqhh6XkMQFJui8v8Eo396/sN3RAQSfvBd7Syhch2vlaMP4FAB11AlMKO2x/1hoKiHBU3oU3OKRTfoUTfy1uH3T+t03k1Qkr0dqgHLxiv6QU5WrarR9tx/dapqbsSmrYapmJ7S5+ghc4FTWxXJB1cjJRh3X+gwJIHjOVW+5ZVqXTG2s2Jwi2daDt6XYeigxgL2SlQpeL5kvXNCcuSJurJVcRZFYUkzVv85XfDauqGxYqaehPcK2TzmcXOUWPfxQxLJd2TrqSiO+mseqqkNTb3ZDiYS/ZqdQoGYIUwJqXo+EDgqlmuWUhkWwCkyo4rtTZeAj+nP00v3n8JmXtO30Fip+lxpfsVR3tO1hk4Vi2kmVjXyRkW2G7D7WAVt+91ahFoSeRWlKyb4KcvGvwUaa43fWLem2hyI4di2pZdr3fcYJ3xvL5ejL3m14bKsfoOv"
window.onload = function () {
    $("#jetbrains").val(jetbrains)
}
$(".jetbrains").click(function () {
    $("#jetbrains").val(jetbrains)
})
// sublime
const sublime = "----- BEGIN LICENSE -----\n" +
    "MF#627\n" +
    "Single User License\n" +
    "EA7E-1262338-452690\n" +
    "ABB636F3 B81D12C8 72DB427A 676B673C\n" +
    "671C2A7B 8E66C0E1 DB0CB9A5 9C102D68\n" +
    "DFD5588D 6E0CC826 9CF2BAEB 6955CE03\n" +
    "16438A0A 358F31A2 91A5E0AC 8A1AFFCC\n" +
    "282221ED 8AD3B9CF DFB5E8BD D94E2271\n" +
    "5076A0D6 176DA088 919E65AB EBE0C128\n" +
    "92141E76 3D2DAA23 A9C85B6A 4090AC14\n" +
    "D56F6B1A 9743B02F 23497557 838490FB\n" +
    "------ END LICENSE ———"
$(".sublime").click(function () {
    $("#jetbrains").val(sublime)
})
const vmware = ["VMware Workstation 15 激活密钥：\n" +
    "\n" +
    "MA491-6NL5Q-AZAM0-ZH0N2-AAJ5A\n" +
    "\n" +
    "5A6F6-88247-XZH59-HL0Q6-8CD2V\n" +
    "\n" +
    "HF6QX-20187-2Z391-522NH-9AELT\n" +
    "\n" +
    "5F29M-48312-8ZDF9-A8A5K-2AM0Z\n" +
    "\n" +
    "UY758-0RXEQ-M81WP-8ZM7Z-Y3HDA\n" +
    "\n" +
    "VF750-4MX5Q-488DQ-9WZE9-ZY2D6\n" +
    "\n" +
    "UU54R-FVD91-488PP-7NNGC-ZFAX6\n" +
    "\n" +
    "YC74H-FGF92-081VZ-R5QNG-P6RY4\n" +
    "\n" +
    "YC34H-6WWDK-085MQ-JYPNX-NZRA2\n" +
    "\n" +
    "VMware Workstation 16 激活密钥：\n" +
    "\n" +
    "ZF3R0-FHED2-M80TY-8QYGC-NPKYF\n" +
    "\n" +
    "YF390-0HF8P-M81RQ-2DXQE-M2UT6\n" +
    "\n" +
    "ZF71R-DMX85-08DQY-8YMNC-PPHV8\n" +
    "\n" +
    "VMware workstation 17 激活密钥：\n" +
    "\n" +
    "JU090-6039P-08409-8J0QH-2YR7F\n" +
    "\n" +
    "ZF3R0-FHED2-M80TY-8QYGC-NPKYF\n" +
    "\n" +
    "FC7D0-D1YDL-M8DXZ-CYPZE-P2AY6\n" +
    "\n" +
    "ZC3TK-63GE6-481JY-WWW5T-Z7ATA\n" +
    "\n" +
    "1Z0G9-67285-FZG78-ZL3Q2-234JG\n" +
    "\n" +
    "4A4RR-813DK-M81A9-4U35H-06KND\n" +
    "\n" +
    "NZ4RR-FTK5H-H81C1-Q30QH-1V2LA\n" +
    "\n" +
    "JU090-6039P-08409-8J0QH-2YR7F\n" +
    "\n" +
    "4Y09U-AJK97-089Z0-A3054-83KLA\n" +
    "\n" +
    "4C21U-2KK9Q-M8130-4V2QH-CF810\n" +
    "\n" +
    "MC60H-DWHD5-H80U9-6V85M-8280D\n" +
    "\n" +
    "ZA30U-DXF84-4850Q-UMMXZ-W6K8F\n" +
    "\n" +
    "AC590-2XW97-48EFZ-TZPQE-MYHEA\n" +
    "\n" +
    "YF39K-DLFE5-H856Z-6NWZE-XQ2XD\n" +
    "\n" +
    "AC15R-FNZ16-H8DWQ-WFPNV-M28E2\n" +
    "\n" +
    "CZ1J8-A0D82-489LZ-ZMZQT-P3KX6"]
$(".vmware").click(function () {
    $("#jetbrains").val(vmware)
})