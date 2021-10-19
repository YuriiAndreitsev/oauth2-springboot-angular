package com.bolsadeideas.springboot.backend.apirest.config;

public class JwtConfig {
    public static final String SECRET = "signing.key.123";

    public static final String RSA_PRIVATE = "-----BEGIN RSA PRIVATE KEY-----\n" +
            "MIIEoQIBAAKCAQEAoOHFDBg/orZrvqJc0ELCbnhaovBhl06ir+l+6eGIwnUt/Lg1\n" +
            "Wm9N3dCYOxTZLPbNb55a0D37N/YtD/t/GU7uLiWuiF09ZXYVOfOej6xecUfM5fpZ\n" +
            "cMEDNsSH6eEOV0Ay7UB2mtseO71QjrJn6FVYw3tne0MZ5c5FcHFTCo5H9dzqrOku\n" +
            "xkbdIRnq05oJRw4kMiRYktMQbgDR2R7AOCtwdckTLX1bMUBGP8bN35Kc5RC35ghq\n" +
            "UIYIHvhxmIY04HpljIltCos1Hb4TVvBL2AuYCiD4nkM5WGIG7bq1t29Un5gtJdtK\n" +
            "omz+FU3DdKmepx5dvybkJWfDtv8JLJaheuUq0QIDAQABAoH/GwXREzb/eVUqw9qB\n" +
            "vHl6LxQIJVY7Di8nJGUT7DT1w7PrBYfrbkVDzv46k7HsyKCr4RO4LUI78CppZ0XX\n" +
            "E2kumJG7vyvqJCCxcAp7l6ZcNqrYv8hNPaMt5wUbzyz+O6mM5EzvnxMvANnLrixJ\n" +
            "R70OK8eOmiWrM+5xu3FNgXhknec5VktoXKHYbqpcNXEHkpBGXGbJtwUXxeApgq7U\n" +
            "7OoSIBEqDTtSgYCQzbjFpvC/WBdYN+dIn4lYp6gKTYbkHxrJBETx0sT9aQ2FJFv4\n" +
            "zyzYYSYoIXwKnxwdNZIonvVkD0HLFqLb+gV2duVAxFZsgHeFMqR1S9ytFdCmuaCS\n" +
            "L16NAoGBAMxmTFGnM9KpSloPI06LlvuynqMmYPwm7r/JnHitJc+7nEVF3wCnUWvD\n" +
            "g+kawFq2i1fGjGWOzgwtRfe9HDD4jCUpqDuHLc8YdLONYhS7e0pAyxknjEoZEoN+\n" +
            "tPlLsZRsnEovlCjKbk6lpKDltp2kSUft6fyt/fcSxj9vYmfF6qc/AoGBAMl/D3/p\n" +
            "QW9LGD4q2oURPIg0DcCjK8gdlW8EhjIPgqxmAWf9EzJtNd6eRWt5IzqIyLeVE9H+\n" +
            "UvTZ3fcferiaj40PNMXMgjtGhVK4adDmG0p7+WDGPtbNSyJHOSB851rhu0YdZTYC\n" +
            "YUdVtrlntlVQ4NxHVsQcNGHK+N5WVi7q6jnvAoGAd436Y+Q1tqlYmPazwxR42n3u\n" +
            "tiUTo0kuarWFNTypmij1TbuBpYM4Z5zzghwomKafOFck9Z4ivRKaEz7kx2wJpQ8J\n" +
            "nNADpld6oy82SEQk6Bif8vWj5A9oOcuaFRsGIneorufHdFh7TrsqYQYb23cledIa\n" +
            "A7bNjn/Hv4DqASLNjscCgYBhPqYvWFaRLM/VaP8vS2NIZL7iYp2Fpelxu+A8Fso9\n" +
            "A7nYAwaZxqVB/GaKeNssq8ka+KKpLTHCI8eBNbsXjtiK/nS8pXeQvfcoNgIzpGo1\n" +
            "Z2Gyd9rp9gg10ePbLwzFCr5EF3m6OCnUsKRQFKKlyDPNe8x/NxF8xOWZAFf1qsBC\n" +
            "FwKBgQCVY1nTLM1QdMsOoVlezMLDjLInJEwnqJ3F4H/hYgQOvdJjxVKaX8HuuPaf\n" +
            "ZkAt8fUhnaL/ENIYEuqOjhxmiyg0D7qZfEsGNwpOZtavH7PK79uF+4cIfBnTPXth\n" +
            "xlnM8m/PePUvosrG0wD+xBFFwkJpB13fmnymR2W/VO3OGpWG4A==\n" +
            "-----END PRIVATE KEY-----";

    public static final String RSA_PUBLIC = "-----BEGIN PUBLIC KEY-----\n" +
            "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoOHFDBg/orZrvqJc0ELC\n" +
            "bnhaovBhl06ir+l+6eGIwnUt/Lg1Wm9N3dCYOxTZLPbNb55a0D37N/YtD/t/GU7u\n" +
            "LiWuiF09ZXYVOfOej6xecUfM5fpZcMEDNsSH6eEOV0Ay7UB2mtseO71QjrJn6FVY\n" +
            "w3tne0MZ5c5FcHFTCo5H9dzqrOkuxkbdIRnq05oJRw4kMiRYktMQbgDR2R7AOCtw\n" +
            "dckTLX1bMUBGP8bN35Kc5RC35ghqUIYIHvhxmIY04HpljIltCos1Hb4TVvBL2AuY\n" +
            "CiD4nkM5WGIG7bq1t29Un5gtJdtKomz+FU3DdKmepx5dvybkJWfDtv8JLJaheuUq\n" +
            "0QIDAQAB\n" +
            "-----END PUBLIC KEY-----";

}
